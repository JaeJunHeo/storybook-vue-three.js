/**
 * 모든 파트를 통합하는 메인 파일입니다
 * 매개변수: 3D 렌더링을 등록 할 Element Type Instance
 * 반환: 3D 렌더링이 등록된 Element Type Instance
 */
import { Scene } from "./assets/scene"
import { Renderer } from "./assets/renderer"
import { Control } from "./assets/control"
import { Render } from "./assets/render";

import { Gui } from "./plugins/gui"

import * as THREE from "three"

export default (element) => {
    element.style = "width:500px";

    // Scene Setting
    let scene = new Scene;
    let cameraElement = scene.camera.cameraElement;
    let lightElement = scene.light.lightElement;
    let sceneElement = scene.sceneElement;
    scene.setLight();

    // Renderer Setting
    let renderer = new Renderer(element);
    let renderElement = renderer.domElement;
    let rendererElement = renderer.rendererElement;

    // Control Setting
    let control = new Control(cameraElement, renderElement);
    let controlElement = control.controlElement;
    
    // Render Setting
    let render = new Render;
    render.element = element;
    render.controls = controlElement;
    render.scene = sceneElement;
    render.camera = cameraElement;
    render.renderer = rendererElement;

    // Rendering Start
    render.start();

    // WebGL Context Lost Handling
    renderElement.addEventListener("webglcontextlost", event => {
        event.preventDefault();
        render.stop();
    }, false);

    // WebGL Context Restored Handling
    renderElement.addEventListener("webglcontextrestored", () => {
        render.start();
    }, false);

    // Dat.GUI Setting
    let gui = new Gui(element);
    let options = {
        "LightX": 0,
        "LightY": 0,
        "LightZ": 0,

        "CameraHelper": false
    }
    gui.addOptions(options);
    gui.addFolder("Light");

    gui.addLight("CameraHelper", null, null, null, scene);

    gui.addLight("LightX", 0, 50, lightElement.position);
    gui.addLight("LightY", 0, 50, lightElement.position);
    gui.addLight("LightZ", 0, 50, lightElement.position);

    return element;
}