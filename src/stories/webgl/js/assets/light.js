/**
 * Three.js의 조명을 설정하는 파트입니다
 */
import { PointLight, AmbientLight, DirectionalLight } from "three";

class Light{
    constructor(){
        this.ambientLight = new AmbientLight( 0x20202A, 8, 100 );
        this.dirLight = new DirectionalLight(0xffffff, 1);

        this.setLight();
    }

    setLight(){
        this.dirLight.position.set( 0, 10, 20 );
        this.dirLight.castShadow = true;
    }

    get lightElement(){
        return this.dirLight;
    }
}

export { Light };