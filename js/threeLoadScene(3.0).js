import * as THREE from '../example/ThreeJs(3.0)/three/build/three.module.js';
import { OrbitControls } from '../example/ThreeJs(3.0)/three/jsm/controls/OrbitControls.js';

export var loadScene = {
    scene: null,
    camera: null,
    renderer: null,
    controls: null,
    createScene: function (rootPath, callback) {
        if (loadScene.scene == null)
            loadScene.scene = new THREE.Scene();
        var loader = new THREE.ObjectLoader();

        if (loadScene.renderer == null) {
            loadScene.renderer = new THREE.WebGLRenderer({ antialias: true });
            loadScene.renderer.setPixelRatio(window.devicePixelRatio);
        }

        var loadComplete = false;
        start();
        function start() {
            var num = 0;
            var fileLoader = new THREE.FileLoader();
            fileLoader.load(rootPath + "/ExportPackageInfo.json", function (text) {
                const sceneConfig = JSON.parse(text)
                for (var i = 0; i < sceneConfig.length; i++) {
                    var compressionType = sceneConfig[i].compressionType;
                    var url = rootPath + "/Models/" + sceneConfig[i].name;
                    switch (compressionType) {
                        case "none":
                            loader.load(url, function (obj) {
                                objLoad(obj);
                            });
                            break;
                        case "gzipCompression":
                            var fileLoader2 = new THREE.FileLoader();
                            fileLoader2.setResponseType('arraybuffer');
                            fileLoader2.load(url, function (text) {
                                var binData = new Uint8Array(text);
                                var data = pako.inflate(binData, { to: 'string' });
                                loader.setResourcePath(rootPath + "/Textures/");
                                loader.parse(JSON.parse(data), function (obj) {
                                    objLoad(obj);
                                });
                            })
                            break;
                    }
                }

                function objLoad(obj) {
                    if (sceneConfig[0].sRGBEncoding) {
                        if (sceneConfig[0].sRGBEncoding != 3001) {
                            loadScene.renderer.outputEncoding = THREE.sRGBEncoding;
                        }
                        else {
                            loadScene.renderer.outputEncoding = null;
                        }
                    } else {
                        loadScene.renderer.outputEncoding = THREE.sRGBEncoding;
                    }
                    loadScene.scene.add(obj);
                    if (obj.isScene) {
                        if (obj.background)
                            loadScene.scene.background = obj.background
                        if (obj.environment)
                            loadScene.scene.environment = obj.environment
                        if (obj.fog)
                            loadScene.scene.fog = obj.fog
                    }

                    initInfo(obj);
                    update();
                    num++;
                    if (num == sceneConfig.length) {
                        loadComplete = true;
                        //所有资料加载完毕，执行回调函数
                        //加载完成后强行渲染一次
                        loadScene.renderer.render(loadScene.scene, loadScene.camera);

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
            ///相机初始化设置
            if (node instanceof THREE.PerspectiveCamera) {
                loadScene.camera = node;
                loadScene.scene.updateMatrixWorld(true);
                //if (loadScene.controls == null)
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
            if (obj.fog != null) {
                obj.fog = null;
            }
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