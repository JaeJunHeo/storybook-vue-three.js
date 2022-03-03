/**
 * 모든 파트를 통합하는 메인 파일입니다
 * 매개변수: 3D 렌더링을 등록 할 Element Type Instance
 * 반환: 3D 렌더링이 등록된 Element Type Instance
 */

import * as dat from "dat.gui";
import * as THREE from "three"

class Gui{
  constructor(element){
    this.gui = new dat.GUI({autoPlace: false});
    this.gui.domElement.style.position = "relative";
    this.gui.domElement.style.flex = "none";
    element.style.display = "inline-flex";

    element.appendChild(this.gui.domElement);
  }

  addOptions(options){
    this.options = options;
  }

  addFolder(name){
    this.guiFolder = this.gui.addFolder(name);
  }

  add(name, min, max){                       
    if(arguments.length > 0) // 단순 추가
      this.gui.add(this.options, arguments[0], arguments[1], arguments[2]).listen();
  }

  addScene(name, min, max, sceneInstance){
    if(arguments.length === 4){ // 함수 추가 3번째 매개변수는 함수 인스턴스, 4번째는 함수 매개변수를 받는다.
      this.guiFolder.add(this.options, name, min, max)
      .onChange(() => {
        // 인스턴스를 불러와서 수정, Ex) instance.scale.X = arguments
        sceneInstance[name.substr(-1).toLowerCase()] = this.options[name];
      })
      .listen();    
    }
  }

  addRender(name, min, max, renderInstance, width=true){
    this.guiFolder.add(this.options, name, min, max)
    .onFinishChange(() => {
      width ? renderInstance.setSize(this.options[name], this.options["RenderHeight"]) 
        : renderInstance.setSize(this.options["RenderWidth"], this.options[name]);

    })
    .listen();    
  }

  addControl(name, min, max, controlInstance){
    if(arguments.length === 4){ // 함수 추가 3번째 매개변수는 함수 인스턴스, 4번째는 함수 매개변수를 받는다.
      this.guiFolder.add(this.options, name, min, max)
      .onChange(() => {
        // 인스턴스를 불러와서 수정, Ex) instance.scale.X = arguments
        controlInstance[name] = this.options[name];
      })
      .listen();    
    }  
  }

  addCamera(name, min=null, max=null, cameraInstance=null, sceneClassInstance=null){
    this.guiFolder.add(this.options, name, min, max)
    .onChange(() => {
      if(typeof(this.options[name]) === "boolean"){
        this.options[name] ? sceneClassInstance.setCameraHelper() :
          sceneClassInstance.removeHelper();
      }
      else{
        cameraInstance[name.substr(-1).toLowerCase()] = this.options[name];
      }
    })
  }

  addLight(name, min=null, max=null, lightInstance=null, sceneClassInstance=null){
    this.guiFolder.add(this.options, name, min, max)
    .onChange(() => {
      if(typeof(this.options[name]) === "boolean"){
        this.options[name] ? sceneClassInstance.setLightHelper() :
          sceneClassInstance.removeHelper();
      }
      else{
        lightInstance[name.substr(-1).toLowerCase()] = this.options[name];
      }
    })
  }
}

export { Gui }