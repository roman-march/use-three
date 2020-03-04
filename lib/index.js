"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var THREE = __importStar(require("three"));
var useThree = function (events, context) {
    if (events === void 0) { events = {}; }
    if (context === void 0) { context = {}; }
    var ref = react_1.useRef();
    var storage = react_1.useRef({});
    var store = react_1.useRef(context.store || {});
    var element = react_1.useRef(function (props) {
        return react_1.default.createElement("div", __assign(__assign({}, props), { ref: ref }));
    });
    var frameId = react_1.useRef();
    var scene = react_1.useRef();
    var camera = react_1.useRef();
    var renderer = react_1.useRef();
    var manager = react_1.useRef();
    var deltaTime = react_1.useRef(0);
    var lastTime = react_1.useRef(0);
    var callbacks = react_1.useRef(events);
    var createRenderer = react_1.useCallback(function () {
        if (context.webgl2) {
            var canvas = document.createElement("canvas");
            var canvasContext = canvas.getContext("webgl2");
            return new THREE.WebGLRenderer({
                canvas: canvas,
                context: canvasContext || undefined
            });
        }
        else {
            return new THREE.WebGLRenderer();
        }
    }, []);
    var createEventListener = react_1.useCallback(function (event, handler) {
        window.addEventListener(event, handler);
        return function () {
            window.removeEventListener(event, handler);
        };
    }, []);
    var handleMouseDown = react_1.useCallback(function (e) {
        if (callbacks.current.onMouseDown) {
            callbacks.current.onMouseDown(e, storage.current);
        }
    }, []);
    var handleMouseMove = react_1.useCallback(function (e) {
        if (callbacks.current.onMouseMove) {
            callbacks.current.onMouseMove(e, storage.current);
        }
    }, []);
    var handleMouseUp = react_1.useCallback(function (e) {
        if (callbacks.current.onMouseUp) {
            callbacks.current.onMouseUp(e, storage.current);
        }
    }, []);
    var handleTouchStart = react_1.useCallback(function (e) {
        if (callbacks.current.onTouchStart) {
            callbacks.current.onTouchStart(e, storage.current);
        }
    }, []);
    var handleTouchEnd = react_1.useCallback(function (e) {
        if (callbacks.current.onTouchEnd) {
            callbacks.current.onTouchEnd(e, storage.current);
        }
    }, []);
    var handleTouchCancel = react_1.useCallback(function (e) {
        if (callbacks.current.onTouchCancel) {
            callbacks.current.onTouchCancel(e, storage.current);
        }
    }, []);
    var handleTouchMove = react_1.useCallback(function (e) {
        if (callbacks.current.onTouchMove) {
            callbacks.current.onTouchMove(e, storage.current);
        }
    }, []);
    react_1.useEffect(function () {
        callbacks.current = events;
        if (ref.current) {
            var width = ref.current.clientWidth;
            var height = ref.current.clientHeight;
            var aspect = width / height;
            scene.current = context.scene || new THREE.Scene();
            renderer.current = context.renderer || new THREE.WebGLRenderer();
            camera.current =
                context.camera || new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
            manager.current = context.manager || new THREE.LoadingManager();
            storage.current = __assign(__assign({}, storage.current), context);
            storage.current.camera = camera.current;
            storage.current.renderer = renderer.current;
            storage.current.scene = scene.current;
            storage.current.manager = manager.current;
            storage.current.store = store.current || {};
            renderer.current.setSize(width, height);
            renderer.current.setPixelRatio(window.devicePixelRatio || 1);
            var removeMouseDownListener_1 = createEventListener("mousedown", handleMouseDown);
            var removeMouseMoveListener_1 = createEventListener("mousemove", handleMouseMove);
            var removeMouseUpListener_1 = createEventListener("mouseup", handleMouseUp);
            var removeTouchStartListener_1 = createEventListener("touchstart", handleTouchStart);
            var removeTouchEndListener_1 = createEventListener("touchend", handleTouchEnd);
            var removeTouchCancelListener_1 = createEventListener("touchcancel", handleTouchCancel);
            var removeTouchMoveListener_1 = createEventListener("touchmove", handleTouchMove);
            manager.current.onProgress = function (item, loaded, total) {
                if (callbacks.current.onLoadProgress) {
                    callbacks.current.onLoadProgress(storage.current, item, loaded, total);
                }
            };
            manager.current.onError = function (url) {
                if (callbacks.current.onLoadError) {
                    callbacks.current.onLoadError(storage.current, url);
                }
            };
            manager.current.onLoad = function () {
                if (callbacks.current.onLoad) {
                    callbacks.current.onLoad(storage.current);
                }
            };
            start();
            ref.current.appendChild(renderer.current.domElement);
            window.addEventListener("resize", resize, false);
            return function () {
                removeMouseDownListener_1();
                removeMouseMoveListener_1();
                removeMouseUpListener_1();
                removeTouchStartListener_1();
                removeTouchEndListener_1();
                removeTouchCancelListener_1();
                removeTouchMoveListener_1();
                stop();
            };
        }
    }, []);
    var renderScene = react_1.useCallback(function () {
        if (renderer.current && camera.current && scene.current) {
            camera.current.updateProjectionMatrix();
            renderer.current.render(scene.current, camera.current);
        }
    }, [callbacks]);
    var update = react_1.useCallback(function (time) {
        deltaTime.current = (time - lastTime.current) / 1000;
        frameId.current = window.requestAnimationFrame(update);
        if (callbacks.current.onUpdate) {
            callbacks.current.onUpdate(storage.current, deltaTime.current);
        }
        if (!storage.current.manualRender) {
            renderScene();
        }
        lastTime.current = time;
    }, [renderScene]);
    var start = react_1.useCallback(function () {
        if (callbacks.current.onStart) {
            callbacks.current.onStart(storage.current);
        }
        if (!frameId.current) {
            frameId.current = requestAnimationFrame(update);
        }
    }, [update]);
    var stop = react_1.useCallback(function () {
        if (callbacks.current.onDestroy) {
            callbacks.current.onDestroy(storage.current);
        }
        if (frameId.current) {
            cancelAnimationFrame(frameId.current);
        }
    }, []);
    var resize = react_1.useCallback(function () {
        if (ref.current && camera.current && renderer.current) {
            var width = ref.current.clientWidth;
            var height = ref.current.clientHeight;
            var aspect = width / height;
            if (camera.current.type === "PerspectiveCamera") {
                camera.current.aspect = aspect;
            }
            camera.current.updateProjectionMatrix();
            renderer.current.setSize(width, height);
        }
    }, []);
    return element.current;
};
exports.default = useThree;
