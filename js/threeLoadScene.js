
import * as THREE from '../example/ThreeJs/three/build/three.module.js';
import { OrbitControls } from '../example/ThreeJs/three/jsm/controls/OrbitControls.js';

var sceneName = "{FROM}RobotLab{END}";
sceneName = sceneName.replace("{FROM}", "").replace("{END}", "");
var rootPath = "Scenes/" + sceneName;


export var loadScene = {
    scene: null,
    camera: null,
    renderer: null,
    controls: null,
    createScene: function (rootPath, callback) {

        if (loadScene.scene == null)
            loadScene.scene = new THREE.Scene();
        var loader = new THREE.ObjectLoader();

        var mixer;
        var clock = new THREE.Clock();
        var loadComplete = false;
        start();
        function start() {
            var num = 0;
            $.getJSON(rootPath + "/ExportPackageInfo.json", function (data) {
                $.each(data, function (i, v) {
                    var compressionType = v.compressionType;
                    var url = rootPath + "/Models/" + v.name;
                    switch (compressionType) {
                        case "none":
                            loader.load(url, function (obj) {
                                objLoad(obj);
                            });
                            break;
                        case "gzip":
                            var ajax = new XMLHttpRequest();
                            ajax.open("GET", url, true);
                            ajax.responseType = "arraybuffer";
                            ajax.onload = function () {
                                var buffer = new Uint8Array(ajax.response);
                                var b64Data = new TextDecoder("utf-8").decode(buffer);
                                b64Data = b64Data.slice(3, b64Data.length);
                                var gzipString = ungzip(b64Data);
                                loader.setResourcePath(rootPath + "/Textures/");
                                loader.parse(JSON.parse(gzipString), function (obj) {
                                    objLoad(obj);
                                });
                            };
                            ajax.send();
                            break;
                        case "gzipOptimize":
                            var ajax = new XMLHttpRequest();
                            ajax.open("GET", url, true);
                            ajax.responseType = "arraybuffer";
                            ajax.onload = function () {
                                var binData = new Uint8Array(ajax.response);
                                binData = binData.slice(3, binData.length - 1);
                                var data = pako.inflate(binData, { to: 'string' });
                                loader.setResourcePath(rootPath + "/Textures/");
                                loader.parse(JSON.parse(data), function (obj) {
                                    objLoad(obj);
                                });
                            };
                            ajax.onprogress = function (value) {
                                //onSingleProgress(value);
                            };
                            ajax.send();
                            break;
                    }
                })

                function ungzip(b64Data) {
                    var strData = atob(b64Data);
                    var charData = strData.split('').map(function (x) {
                        return x.charCodeAt(0);
                    });
                    var binData = new Uint8Array(charData);
                    var data = pako.inflate(binData, { to: 'string' });
                    return data;
                }

                function objLoad(obj) {
                    loadScene.scene.add(obj);
                    initInfo(obj);
                    update();
                    num++;
                    if (num == data.length) {
                        //所有资料加载完毕，执行回调函数
                        //加载完成后强行渲染一次
                        loadScene.renderer.render(loadScene.scene, loadScene.camera);
                        loadComplete = true;
                        if (callback) {
                            callback(loadScene.scene);
                        }
                    }
                }
            });
        }

        var fps = 30;
        var now;
        var then = Date.now();
        var interval = 1000 / fps;
        var delta;


        //用于记录上帧和当前帧相机的位置
        var cameraThenPos = new THREE.Vector3(), cameraNowPos = new THREE.Vector3();

        function update() {
            requestAnimationFrame(update);

            //渲染优化,1.间隔渲染; 2.判断相机有无运动,无运动则停止渲染
            now = Date.now();
            delta = now - then;
            if (delta > interval) {
                then = now - (delta % interval);

                if (loadScene.camera != null)
                    cameraThenPos = loadScene.camera.position.clone();

                if (loadScene.camera != null) {
                    if (cameraNowPos != null || cameraThenPos != null) {
                        if (cameraNowPos.x != cameraThenPos.x || cameraNowPos.y != cameraThenPos.y || cameraNowPos.z != cameraThenPos.z || !loadComplete) {
                            if (loadScene.renderer != null) {
                                loadScene.renderer.render(loadScene.scene, loadScene.camera);
                                cameraNowPos = loadScene.camera.position.clone();
                            }

                        }
                    }
                }

                //动画更新
                var delta = 0.75 * clock.getDelta();
                if (mixer) {
                    if (loadScene.renderer != null) {
                        loadScene.renderer.render(loadScene.scene, loadScene.camera);
                    }
                    mixer.update(delta);
                }

                //LOD更新
                loadScene.scene.traverse(function (object) {
                    if (object instanceof THREE.LOD) {
                        if (loadScene.camera != null)
                            object.update(loadScene.camera);
                    }
                });
            }
        }

        function onResize() {
            if (loadScene.camera != null) {
                loadScene.camera.aspect = window.innerWidth / window.innerHeight;
                loadScene.camera.updateProjectionMatrix();
                loadScene.renderer.setSize(window.innerWidth, window.innerHeight);
                loadScene.renderer.render(loadScene.scene, loadScene.camera);
            }
        }

        function initInfo(node) {
            //雾效
            if (node.fog != null) {
                loadScene.scene.fog = new THREE.FogExp2(node.fog.color, node.fog.density);
                loadScene.scene.fog = new THREE.Fog(node.fog.color, node.fog.near, node.fog.far);
            }

            //获取动画物体并且播放动画
            if (node.animations) {
                var sceneAnimationClip = node.animations[0];
                if (sceneAnimationClip != null) {
                    mixer = new THREE.AnimationMixer(node);
                    mixer.clipAction(sceneAnimationClip).play();
                }
            }

            ///相机初始化设置
            if (node instanceof THREE.PerspectiveCamera) {
                loadScene.camera = node;

                loadScene.scene.updateMatrixWorld(true);

                if (loadScene.renderer == null)
                    loadScene.renderer = new THREE.WebGLRenderer({ antialias: true });
                loadScene.controls = new OrbitControls(loadScene.camera, loadScene.renderer.domElement);

                //判断相机下是否有CameraTarget子物体,CameraTarget用于设置相机初始化聚焦点
                var cameraTarget = loadScene.camera.getObjectByName("CameraTarget");
                if (cameraTarget != null) {
                    var cameraTargetPosition = new THREE.Vector3();
                    cameraTargetPosition.setFromMatrixPosition(cameraTarget.matrixWorld);
                    loadScene.camera.lookAt(cameraTargetPosition);
                    loadScene.controls.target = cameraTargetPosition;
                }

                //相机加载完成后刷新
                onResize();
                document.getElementById("WebGL_Output").appendChild(loadScene.renderer.domElement);
            }

            ///灯光实时阴影初始化设置
            if (node instanceof THREE.DirectionalLight) {
                //设置灯光target物体为子物体
                var lighTarge = node.getObjectByName("LightTarget");
                node.target = lighTarge;

                node.castShadow = true;
                node.shadow.mapSize.width = 1024;
                node.shadow.mapSize.height = 1024;

                var d = 20;

                node.shadow.camera.left = -d;
                node.shadow.camera.right = d;
                node.shadow.camera.top = d;
                node.shadow.camera.bottom = -d;
                //node.shadow.camera.near = 0;
                //node.shadow.camera.far = d;
                node.shadow.bias = -0.0005;
                node.shadow.camera.far = 20;
            }
            for (var i = 0; i < node.children.length; i++) {
                initInfo(node.children[i]);
            }
        }

        window.onload = start;
        window.addEventListener("resize", onResize, false);
    },
    dispose: function () {
        if (loadScene.scene == null)
            return;
        clearThree(loadScene.scene);
        function clearThree(obj) {
            loadScene.scene.remove(obj)
            if (obj.geometry) obj.geometry.dispose();

            if (obj.material) {
                if (obj.material.length) {
                    for (let i = 0; i < obj.material.length; ++i) {
                        obj.material[i].dispose()
                    }
                }
                else {
                    obj.material.dispose()
                }
            }
            if (obj instanceof THREE.DirectionalLight) {
                obj.dispose();
            }

            while (obj.children.length > 0) {
                clearThree(obj.children[0]);
                obj.remove(obj.children[0]);
            }
        }
    }
}
