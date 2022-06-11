var modelsRoot = "Scenes/";
var sceneName = "SampleScene";
var mobileSceneName = "";

var advancedTexture;
var highting;

var loadScene = {
    createScene: function (modelsRoot, sceneName, canvas, callback) {
        var packageInfo;
        var num = 0;
        var timestamp = Date.parse(new Date());

        //loadScene.startRendering = true;

        var assetsInformationPath = modelsRoot + sceneName + "/AssetsInformation.js";

        getSceneConfig(assetsInformationPath);

        function getSceneConfig(fileURL) {
            var ajax = new XMLHttpRequest();
            ajax.open("GET", fileURL, true);
            ajax.responseType = "arraybuffer";
            ajax.onload = function (e) {
                var binData = new Uint8Array(ajax.response);
                var EPI_Data = JSON.parse(pako.inflate(binData, { to: 'string' }));

                if (EPI_Data == null)
                    return;

                loadScene.sceneConfig = EPI_Data;
                packageInfo = EPI_Data.packageList;
                for (var i = 0; i < packageInfo.length; i++) {
                    var url = modelsRoot + sceneName + "/Models/" + packageInfo[i].name;
                    switch (packageInfo[i].compressionType) {
                        case "none":
                        case "binary":
                            loadJson(url);
                            break;
                        case "gzip":
                        case "gzipBinary":
                            loadGzip(url);
                            break;
                    }
                }
            };
            ajax.onprogress = function (value) { };
            ajax.send(null);
        }

        BABYLON.SceneOptimizerOptions.HighDegradationAllowed();

        function loadJson(fileURL) {
            var ajax = new XMLHttpRequest();
            ajax.open("GET", fileURL, true);
            ajax.responseType = "text";
            ajax.onload = function () {
                loadSceneByJson(ajax.response);
            };
            ajax.onError = function () { }
            ajax.onprogress = function (value) {
                //console.log(value.loaded/value.total);
            }
            ajax.send();
        }


        function loadGzip(fileURL) {
            var ajax = new XMLHttpRequest();
            ajax.open("GET", fileURL, true);
            ajax.responseType = "arraybuffer";
            ajax.onload = function () {
                var binData = new Uint8Array(ajax.response);
                var data = pako.inflate(binData, { to: 'string' });
                loadSceneByJson(data);
            };
            ajax.onprogress = function (value) {
                //console.log(value.loaded/value.total);
            }
            ajax.send(null);
        }

        var engine, scene;


        this.fps = 30;
        var then = Date.now();
        var interval = 1000 / this.fps;

        var cameraThenPos = new BABYLON.Vector3(0, 0, 0),
            cameraNowPos = new BABYLON.Vector3(1, 1, 1);
        //loadScene.cameraStopToRendering = false;
        //loadScene.loadComplete = false;

        function loadSceneByJson(jsonData) {
            BABYLON.Logger.LogLevels = 0;

            if (engine == null) {
                engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true }, false);
                engine.enableOfflineSupport = true;
                engine.enableTexturesOffline = true;
                engine.doNotHandleContextLost = true;
            }

            if (scene == null) {
                scene = new BABYLON.Scene(engine);
                scene.collisionsEnabled = true;

                //scene.fileURL = loadScene.fileURL;
                scene.sceneConfig = loadScene.sceneConfig;
            }


            var registeredPlugin = BABYLON.SceneLoader.GetDefaultPlugin();
            var plugin = registeredPlugin.plugin;


            var modelsPath = modelsRoot + sceneName + "/Models/";

            plugin.load(scene, jsonData, modelsPath);

            num++;

            if (scene.activeCamera != null) {
                scene.activeCamera.attachControl(canvas, true);


                scene.activeCamera.inertia = 0.5;
                scene.activeCamera.panningInertia = 0.1;
                //scene.activeCamera.panningSensibility = 20;

                scene.activeCamera.wheelPrecision = 0.5;
                scene.activeCamera.panningSensibility = 5;

                scene.activeCamera._panningMouseButton = 1;


                scene.collisionsEnabled = true;

                scene.gravity = new BABYLON.Vector3(0, -1, 0);
                scene.activeCamera.applyGravity = true;

                scene.executeWhenReady(function () {
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


                engine.runRenderLoop(function () {
                    var now = Date.now();
                    var delta = now - then;
                    if (delta > interval) {
                        then = now - (delta % interval);

                        if (scene != null && scene.activeCamera != null) {
                            cameraThenPos = scene.activeCamera.position.clone();
                        }
                        scene.render();
                    }

                    if (scene.activeCamera != null) {
                        if (scene.activeCamera.radius < 0.1) {
                            scene.activeCamera.radius = 0.1;
                        }
                    }
                });

                window.addEventListener("resize", function () {
                    if (engine != null)
                        engine.resize();
                    if (scene != null)
                        scene.render();
                });
            }

            //Auto LOD
            if (scene.sceneConfig.lodConfig.enableLod) {
                if (scene.sceneConfig.lodConfig.autoLod) {
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
            if (scene.sceneConfig.lodConfig.enableLod) {
                if (!scene.sceneConfig.lodConfig.autoLod) {
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

            scene._removePendingData();

            modelsPath = null;
            jsonData = null;
            plugin = null;
            registeredPlugin = null;

            if (num == packageInfo.length) {
                //scene.autoClear = false;
                scene.executeWhenReady(() => {
                    scene.render();
                });

                if (typeof callback === "function") {
                    callback(scene);
                }
            }
        }
    },

}