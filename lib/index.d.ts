import * as THREE from "three";
export interface Store {
    [key: string]: any;
}
export interface Context {
    store: Store;
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    camera: THREE.PerspectiveCamera | THREE.OrthographicCamera;
    manager: THREE.LoadingManager;
    [type: string]: any;
}
export interface EventsArguments {
    onStart?: (ctx: Context) => void;
    onUpdate?: (ctx: Context, deltaTime: number) => void;
    onDestroy?: (ctx: Context) => void;
    onLoad?: (ctx: Context) => void;
    onLoadError?: (ctx: Context, url: string) => void;
    onLoadProgress?: (ctx: Context, item: any, loaded: number, total: number) => void;
    onMouseDown?: (e: MouseEvent, ctx: Context) => void;
    onMouseMove?: (e: MouseEvent, ctx: Context) => void;
    onMouseUp?: (e: MouseEvent, ctx: Context) => void;
    onTouchStart?: (e: TouchEvent, ctx: Context) => void;
    onTouchEnd?: (e: TouchEvent, ctx: Context) => void;
    onTouchCancel?: (e: TouchEvent, ctx: Context) => void;
    onTouchMove?: (e: TouchEvent, ctx: Context) => void;
}
interface ContextArguments {
    store?: Store;
    scene?: THREE.Scene;
    renderer?: THREE.WebGLRenderer;
    camera?: THREE.PerspectiveCamera | THREE.OrthographicCamera;
    manager?: THREE.LoadingManager;
    [type: string]: any;
}
declare const useThree: (events?: EventsArguments, context?: ContextArguments) => Function;
export default useThree;
