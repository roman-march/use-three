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
}
export interface EventsArguments {
    onStart?: (ctx: Context) => void;
    onUpdate?: (ctx: Context, deltaTime: number) => void;
    onDestroy?: (ctx: Context) => void;
    onLoad?: (ctx: Context) => void;
    onLoadError?: (ctx: Context, url: string) => void;
    onLoadProgress?: (ctx: Context, item: any, loaded: number, total: number) => void;
}
interface ContextArguments {
    store?: Store;
    scene?: THREE.Scene;
    renderer?: THREE.WebGLRenderer;
    camera?: THREE.PerspectiveCamera | THREE.OrthographicCamera;
    manager?: THREE.LoadingManager;
}
declare const useThree: (callbacks: EventsArguments, context?: ContextArguments) => Function;
export default useThree;
