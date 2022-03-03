/**
 * 3D 모델 파일을 가져오는 파트입니다
 */

import { Group } from "three";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import * as THREE from "three";

class Resource{
    constructor(){
        this.loader = new FBXLoader();
        this.obj = new Group();

        this.setResource();
    }

    setResource(file = "TEST"){
        if(file === "TEST"){
            const geometry = new THREE.BoxGeometry( 1, 1, 1 );
            const material = new THREE.MeshBasicMaterial( {color: 0x0a0ffa} );
            const cube = new THREE.Mesh( geometry, material );

            if(cube.isMesh){
                cube.castShadow = true;
                cube.receiveShadow = true;
            }

            this.obj.add(cube);
        }
        else{
            this.loader.load(file, function(object){
                object.updateMatrix();
    
                object.traverse(function(child){
                    if(child.isMesh){
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                });
    
                this.obj.add(object);
            });
        }
    }
}

export { Resource };