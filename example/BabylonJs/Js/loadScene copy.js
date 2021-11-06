var modelsRoot = "Scenes/";
var sceneName = "SampleScene";
var mobileSceneName = "";

var advancedTexture;
var highting;

var loadScene = {
    scene: null,
    engine: null,
    startRendering: null,
    stats: null,
    sceneConfig: null,

    cameraStopToRendering: null,
    loadComplete: null,
    setRender: function(value) {
        startRendering = value;
    },
    createScene: function(callback) {
        var packageInfo;
        var num = 0;
        var timestamp = Date.parse(new Date());

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            if (mobileSceneName == "")
                sceneName = sceneName + "_Mobile";
            else
                sceneName = mobileSceneName;
        }

        startRendering = true;

        var assetsInformationPath = modelsRoot + sceneName + "/AssetsInformation.js";


        getSceneConfig(assetsInformationPath);

        function getSceneConfig(fileURL) {
            var ajax = new XMLHttpRequest();
            ajax.open("GET", fileURL, true);
            ajax.responseType = "arraybuffer";
            ajax.onload = function() {
                var binData = new Uint8Array(ajax.response);
                var EPI_Data = JSON.parse(pako.inflate(binData, { to: 'string' }));

                //console.log(EPI_Data);

                if (EPI_Data == null)
                    return;

                sceneConfig = EPI_Data;

                packageInfo = EPI_Data.packageList;
                //console.log(packageInfo);
                for (var i = 0; i < packageInfo.length; i++) {
                    var url = modelsRoot + sceneName + "/Models/" + packageInfo[i].name;
                    switch (packageInfo[i].compressionType) {
                        case "none":
                        case "binary":
                            loadJson(url);
                            break;
                        case "lzma":
                            loadLzma(url);
                            break;
                        case "gzip":
                        case "gzipBinary":
                            loadGzip(url);
                            break;
                        case "lzmaBinary":
                            loadLzma(url);
                            break;
                        case "zip":
                        case "zipBinary":
                            loadZip(url);
                            break;
                    }
                }

            };
            ajax.onprogress = function(value) {};
            ajax.send(null);
        }

        /*
        $.getJSON(assetsInformationPath, function (EPI_Data) {
            if (EPI_Data == null)
                return;

            sceneConfig = EPI_Data;
            packageInfo = EPI_Data.packageList;
            console.log(packageInfo);
            for (var i = 0; i < packageInfo.length; i++) {
                var url = modelsRoot + sceneName + "/Models/" + packageInfo[i].name;
                switch (packageInfo[i].compressionType) {
                    case "none":
                    case "binary":
                        loadJson(url);
                        break;
                    case "lzma":
                        loadLzma(url);
                        break;
                    case "gzip":
                    case "gzipBinary":
                        loadGzip(url);
                        break;
                }
            }
        });*/


        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        } else {
            //BABYLON.SceneOptimizerOptions.LowDegradationAllowed();
            //BABYLON.SceneOptimizerOptions.ModerateDegradationAllowed();
            BABYLON.SceneOptimizerOptions.HighDegradationAllowed();
        }

        function loadJson(fileURL) {
            var ajax = new XMLHttpRequest();
            ajax.open("GET", fileURL, true);
            ajax.responseType = "text";
            ajax.onload = function() {
                loadSceneByJson(ajax.response);
                fileURL = null;
                ajax.response = null;
                ajax = null;
            };
            ajax.onError = function() {}
            ajax.onprogress = function(value) {
                //console.log(value.loaded/value.total);
            }
            ajax.send();
        }

        function loadLzma(fileURL) {
            var ajax = new XMLHttpRequest();
            ajax.open("GET", fileURL, true);
            ajax.responseType = "arraybuffer";
            ajax.onload = function() {
                var buffer = new Uint8Array(ajax.response);
                //var my_lzma = LZMA;
                LZMA.decompress(buffer, lzmaInvoke);
            };
            ajax.onprogress = function(value) {
                //console.log(value.loaded/value.total);
            }
            ajax.send();

            function lzmaInvoke(text) {
                loadSceneByJson(text);
                ajax.response = null;
                ajax = null;
                text = null;
                //LZMA.disable();
                //LZMA = null;
            }
        }

        function loadGzip(fileURL) {
            var ajax = new XMLHttpRequest();
            ajax.open("GET", fileURL, true);
            ajax.responseType = "arraybuffer";
            ajax.onload = function() {
                var binData = new Uint8Array(ajax.response);
                var data = pako.inflate(binData, { to: 'string' });
                loadSceneByJson(data);

                binData = null;
                data = null;
                ajax.response = null;
                ajax = null;
            };
            ajax.onprogress = function(value) {
                //console.log(value.loaded/value.total);
            }
            ajax.send(null);
        }

        function loadZip(fileURL) {
            var ajax = new XMLHttpRequest();
            ajax.open("GET", fileURL, true);
            ajax.responseType = "arraybuffer";
            ajax.onload = function() {
                var buffer = new Uint8Array(ajax.response);
                var new_zip = new JSZip();
                new_zip.loadAsync(buffer).then(function(zip) {
                    var urlSplit = packageInfo[num].name.split('.');
                    var tempFileName = urlSplit[0] + ".json";
                    return zip.file(tempFileName).async("string");
                }).then(function(text) {
                    loadSceneByJson(text);
                });
                ajax.response = null;
                ajax = null;
            };
            ajax.onprogress = function(value) {
                //console.log(value.loaded/value.total);
            }
            ajax.send(null);
        }

        var engine, scene;


        //平均帧率
        this.fps = 25;
        //当前时间
        var then = Date.now();
        //间隔时间
        var interval = 1000 / this.fps;

        //用于记录上帧和当前帧相机的位置
        var cameraThenPos = new BABYLON.Vector3(0, 0, 0),
            cameraNowPos = new BABYLON.Vector3(1, 1, 1);
        cameraStopToRendering = false;
        loadComplete = false;

        function loadSceneByJson(jsonData) {
            var canvas = document.getElementById("renderCanvas");

            if (engine == null) {
                engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true }, false);
                engine.enableOfflineSupport = true;
                engine.enableTexturesOffline = true;
                engine.doNotHandleContextLost = true;

                //BABYLON.Database.IDBStorageEnabled = true;
            }

            if (scene == null) {
                scene = new BABYLON.Scene(engine);
                scene.collisionsEnabled = true;

                scene.sceneConfig = loadScene.sceneConfig;

                stats = new Stats();
                var fps = document.getElementById("fps");
                //fps.style.visibility = "hidden";

                scene.onPreKeyboardObservable.add(function(e) {
                    if (e.event.ctrlKey && e.event.shiftKey && e.event.altKey && e.event.keyCode === 70) {
                        if (e.event.type == "keydown") {
                            if (fps != null && fps.style.visibility != "hidden")
                                fps.style.visibility = "hidden";
                            else
                                fps.style.visibility = "visible";
                        }
                    }
                });
            }


            //注册
            var registeredPlugin = BABYLON.SceneLoader._registeredPlugins[".babylon"];
            var plugin = registeredPlugin.plugin;

            //模型URL
            var modelsPath = modelsRoot + sceneName + "/Models/";

            //加载场景
            plugin.load(scene, jsonData, modelsPath);

            num++;

            //scene.clearCachedVertexData();
            //此处禁用后会导致碰撞没有反应
            //scene.cleanCachedTextureBuffer();


            if (scene.activeCamera != null) {
                scene.activeCamera.attachControl(canvas, true);
                //console.log(scene.activeCamera);
                //console.log(scene.activeCamera.inputs);


                /*  scene.activeCamera.upperBetaLimit = Math.PI / 2;
                  scene.activeCamera.lowerRadiusLimit = 1;

                  //scene.activeCamera.wheelPrecision = 60;
                  scene.activeCamera.wheelPrecision = 10; //鼠标滚轮精度,值越大滚动越慢
                  scene.activeCamera.panningSensibility = 300; //鼠标平移,值越大移动越慢


                  //console.log( scene.activeCamera);*/
                //console.log(scene.activeCamera);


                //Mobile
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

                } else {

                    scene.activeCamera.inertia = 0.5;
                    scene.activeCamera.panningInertia = 0.1;
                    scene.activeCamera.panningSensibility = 20;
                    scene.activeCamera._panningMouseButton = 1;
                    scene.activeCamera.inputs.attached.pointers.buttons.length = 2;

                    // scene.activeCamera.checkCollisions = true;
                    // scene.activeCamera.useBouncingBehavior = true;
                    //console.log(scene.activeCamera);

                    //设置场景碰撞
                    scene.collisionsEnabled = true;
                    //将相机包围一个球形，用于碰撞
                    //scene.activeCamera.ellipsoid = new BABYLON.Vector3(0.35, 1, 0.35);
                    scene.gravity = new BABYLON.Vector3(0, -1, 0);
                    scene.activeCamera.applyGravity = true;

                    // scene.activeCamera.onViewMatrixChangedObservable.add(function () {
                    //     cameraStopToRendering = false;
                    // });

                    scene.executeWhenReady(function() {

                        if (scene.activeCamera.keysUp) {
                            scene.activeCamera.keysUp.push(90); // Z
                            scene.activeCamera.keysUp.push(87); // W
                            scene.activeCamera.keysDown.push(83); // S
                            scene.activeCamera.keysLeft.push(65); // A
                            scene.activeCamera.keysLeft.push(81); // Q
                            scene.activeCamera.keysRight.push(69); // E
                            scene.activeCamera.keysRight.push(68); // D
                        }
                    });

                    var pipeline = new BABYLON.DefaultRenderingPipeline(
                        "default", // The name of the pipeline
                        false, // Do you want HDR textures ?
                        scene, // The scene instance
                        [scene.activeCamera] // The list of cameras to be attached to
                    );

                }

                //pipeline.samples = 4;
                //pipeline.fxaaEnabled = true;

                /* pipeline.sharpenEnabled = true;
                 pipeline.sharpen.edgeAmount = 0.9;
                 pipeline.sharpen.colorAmount = 0.0;*/

                //pipeline.depthOfFieldEnabled = true;


                //pipeline.bloomEnabled = true;

                //pipeline.imageProcessingEnabled = true;

                //pipeline.chromaticAberrationEnabled = true;

                /*        scene.clearCachedVertexData();
                        scene.cleanCachedTextureBuffer();*/

                engine.runRenderLoop(function() {
                    if (startRendering) {
                        stats.begin();

                        var now = Date.now();
                        var delta = now - then;
                        if (delta > interval) {
                            then = now - (delta % interval);

                            if (scene != null && scene.activeCamera != null) {
                                cameraThenPos = scene.activeCamera.position.clone();
                            }

                            //console.log("cameraStopToRendering = " + cameraStopToRendering);
                            //console.log("loadComplete = " + loadComplete);
                            /*  if (!loadComplete) {
                                  //try {
                                  scene.render();
                                  // }catch (e) {
                                  //
                                  // }
                              } else {
                                  if (cameraNowPos.x.toString() != cameraThenPos.x.toString() || cameraNowPos.y.toString() != cameraThenPos.y.toString() || cameraNowPos.z.toString() != cameraThenPos.z.toString()) {
                                      //try {
                                      scene.render();
                                      //}catch (e) {
                                      //}
                                      cameraNowPos = scene.activeCamera.position.clone();
                                      //console.log("1111");
                                  } else {
                                      if (cameraNowPos.x.toString() == cameraThenPos.x.toString() && cameraNowPos.y.toString() == cameraThenPos.y.toString() && cameraNowPos.z.toString() == cameraThenPos.z.toString()) {
                                          if (!cameraStopToRendering) {
                                              cameraStopToRendering = true;
                                              cameraThenPos = new BABYLON.Vector3(-1, -1, -1);
                                              cameraNowPos = new BABYLON.Vector3(1, 1, 1);
                                              //try {
                                              scene.render();
                                              //}catch (e) {
                                              //}
                                              //console.log("3333");
                                          } else {
                                              //console.log("555");
                                              cameraThenPos = new BABYLON.Vector3(0, 0, 0);
                                          }
                                      } else {
                                          cameraStopToRendering = true;
                                          //console.log("4444");
                                      }
                                  }
                              }*/


                            if (!loadComplete) {
                                scene.render();
                            } else {
                                if (!cameraStopToRendering)
                                    scene.render();
                            }
                        }

                        if (scene.activeCamera != null) {
                            if (scene.activeCamera.radius < 0.1) {
                                scene.activeCamera.radius = 0.1;
                            }
                        }

                        //var findObj = scene.getNodeByName('Mat_UV_Animation');
                        //findObj.material.diffuseTexture.uOffset -= 0.01;

                        stats.end();
                    }
                });

                loadScene.scene = scene;
                loadScene.engine = engine;

                window.addEventListener("resize", function() {
                    engine.resize();
                    scene.render();
                });
            }

            //Auto LOD
            if (sceneConfig.lodConfig.enableLod) {
                if (sceneConfig.lodConfig.autoLod) {
                    for (var i = 0; i < scene.meshes.length; i++) {
                        if (scene.meshes[i].name != "SceneSkyboxMesh") {
                            var radius = scene.meshes[i].getBoundingInfo().boundingSphere.radius;
                            if (radius > 0) {
                                if (scene.meshes[i]) {
                                    var dis = radius > 1 ? (radius * radius * 3) : (radius + 35);
                                    //var dis = radius > 1 ? (radius * radius * 1) : (radius + 35);
                                    // try {
                                    if (!scene.meshes[i].isAnInstance)
                                        scene.meshes[i].addLODLevel(dis, null);
                                    //} catch (e) {
                                    //}
                                }
                            }
                        }
                    }
                }
            }

            //LOD
            if (sceneConfig.lodConfig.enableLod) {
                if (!sceneConfig.lodConfig.autoLod) {
                    for (var i = 0; i < scene.meshes.length; i++) {
                        if (scene.meshes[i].name != "SceneSkyboxMesh") {
                            var metadata = scene.meshes[i].metadata;
                            if (metadata != null) {
                                var properties = metadata.properties;
                                if (properties != null) {
                                    var lodGroupInfo = properties.lodGroupInfo;
                                    if (lodGroupInfo != null) {
                                        var lodCount = lodGroupInfo.lodCount;
                                        for (var a = 0; a < lodCount; a++) {
                                            var dis = lodGroupInfo.lodDetails[a].lodPercent;
                                            if (a == (lodCount - 1)) {
                                                scene.meshes[i].addLODLevel(dis, null);
                                            } else {
                                                var tempID = lodGroupInfo.lodDetails[a + 1].lodRenderers[0].source;
                                                scene.meshes[i].addLODLevel(dis, scene.getNodeByID(tempID));
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            //Occluded
            /*for (var i = 0; i < scene.meshes.length; i++) {
                if (scene.meshes[i].name != "SceneSkyboxMesh") {
                    scene.meshes[i].occlusionQueryAlgorithmType = BABYLON.AbstractMesh.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE;
                    scene.meshes[i].isOccluded = true;
                    scene.meshes[i].occlusionType = BABYLON.AbstractMesh.OCCLUSION_TYPE_STRICT;
                }
            }*/


            scene._removePendingData();

            //scene.createOrUpdateSelectionOctree();


            //清理内存数据
            canvas = null;
            modelsPath = null;
            jsonData = null;
            plugin = null;
            registeredPlugin = null;

            if (num == packageInfo.length) {

                //console.log((Date.parse(new Date()) - timestamp) / 1000 + "秒");

                //var findObj = scene.getNodeByName('Cube');
                /*  findObj.occlusionQueryAlgorithmType = BABYLON.AbstractMesh.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE;
                  findObj.isOccluded = true;
                  findObj.occlusionType = BABYLON.AbstractMesh.OCCLUSION_TYPE_STRICT;*/
                // console.log(findObj);

                /*        scene.registerBeforeRender(function () {
                            if (findObj.isOccluded) {
                                scene.clearColor = new BABYLON.Color3(0.5, 0.8, 0.5);
                                console.log("111");
                            } else {
                                scene.clearColor = new BABYLON.Color3(0.1, 0.2, 0.8);
                                console.log("2222");
                            }
                        });*/

                //播放动画
                /*var findObj = scene.getNodeByName('Animation_02');
                console.log(findObj);
                scene.beginAnimation(findObj, 0, 100, true, 1.0);*/


                //隐藏调试界面
                scene.registerBeforeRender(function() {
                    //scene.debugLayer.show();
                    //scene.debugLayer.hide();
                    //stopRender = true;

                });
                scene.executeWhenReady(() => {
                    scene.render();
                    loadComplete = true;

                    /*
                    cameraStopToRendering = true;


                    // IE9, Chrome, Safari, Opera
                    window.addEventListener("mousewheel", MouseWheelHandler, false);
                    // Firefox
                    window.addEventListener("DOMMouseScroll", MouseWheelHandler, false);

                    function MouseWheelHandler(e) {
                        cameraStopToRendering = false;
                        return false;
                    }

                    scene.onPointerObservable.add(function () {
                        cameraStopToRendering = false;
                    });
                    */

                    //Auto LOD
                    // if (sceneConfig.lodConfig.enableLod) {
                    //     if (sceneConfig.lodConfig.autoLod) {
                    //         for (var i = 0; i < scene.meshes.length; i++) {
                    //             if (scene.meshes[i].name != "SceneSkyboxMesh") {
                    //                 var radius = scene.meshes[i].getBoundingInfo().boundingSphere.radius;
                    //                 if (radius > 0) {
                    //                     if (scene.meshes[i]) {
                    //                         var dis = radius > 1 ? (radius * radius * 3) : (radius + 35);
                    //                         //var dis = radius > 1 ? (radius * radius * 1) : (radius + 35);
                    //                         //try {
                    //                         if (!scene.meshes[i].isAnInstance)
                    //                             scene.meshes[i].addLODLevel(dis, null);
                    //                         //} catch (e) {
                    //                         //console.log(scene.meshes[i]);
                    //                         //}
                    //                     }
                    //                 }
                    //             }
                    //         }
                    //     }
                    // }
                });


                if (typeof callback === "function") {
                    callback();
                }
            }
        }

    },
    getSceneConfig: function() {
        return sceneConfig;
    },

    setCameraStopToRendering: function(value) {
        cameraStopToRendering = value;
    },

    setLoadComplete: function(value) {
        loadComplete = value;
    }
};