# use-three

React Hook for Three.js

## Installation

```
npm install use-three --save
```

## Demo

[![Edit use-three](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/use-three-duck-demo-u77us)

## Usage

```javascript
import useThree from "use-three";

const Three = useThree({
  onStart: ctx => {},
  onUpdate: ctx => {},
  onDestroy: ctx => {},
  onLoad: ctx => {},
  onLoadProgress: (ctx, item, loaded, total) => {},
  onMouseDown: (e, ctx) => {},
  onMouseMove: (e, ctx) => {},
  onMouseUp: (e, ctx) => {},
  onTouchStart: (e, ctx) => {},
  onTouchEnd: (e, ctx) => {},
  onTouchCancel: (e, ctx) => {},
  onTouchMove: (e, ctx) => {}
});

return <Three />;
```

## API

### Parameters

| Field          |    Type    | Description                                                               |
| -------------- | :--------: | ------------------------------------------------------------------------- |
| onStart        | `function` | This function will be called before Update method time.                   |
| onUpdate       | `function` | This function will be called every frame.                                 |
| onDestroy      | `function` | This function will be called when component unmount.                      |
| onLoad         | `function` | This function will be called when all loading is completed.               |
| onLoadProgress | `function` | This function will be called when an item is complete.                    |
| onLoadError    | `function` | This function will be called when any item errors.                        |
| onMouseDown    | `function` | This function will be called when the user presses a mouse button.        |
| onMouseMove    | `function` | This function will be called when the pointer is moving                   |
| onMouseUp      | `function` | This function will be called when a user releases a mouse button          |
| onTouchStart   | `function` | This function will be called when a finger is placed on a touch screen    |
| onTouchEnd     | `function` | This function will be called when a finger is removed from a touch screen |
| onTouchCancel  | `function` | This function will be called when the touch is interrupted                |
| onTouchMove    | `function` | This function will be called when a finger is dragged across the screen   |

#### config

| Key      |                          Type                           | Description                                                                                                                   |
| -------- | :-----------------------------------------------------: | ----------------------------------------------------------------------------------------------------------------------------- |
| store    |                        `object`                         | This is store for saving any variables.                                                                                       |
| scene    |                      `THREE.Scene`                      | Scenes allow you to set up what and where is to be rendered by three.js. This is where you place objects, lights and cameras. |
| renderer |                  `THREE.WebGLRenderer`                  | The WebGL renderer displays your beautifully crafted scenes using WebGL.                                                      |
| camera   | `THREE.OrthographicCamera` or `THREE.PerspectiveCamera` | This is Three.js camera instance.                                                                                             |
| manager  |                 `THREE.LoadingManager`                  | Handles and keeps track of loaded and pending data.                                                                           |

## License

The files included in this repository are licensed under the MIT license.
