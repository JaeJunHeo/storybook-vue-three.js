/**
 * Three.js의 렌더링을 실행하는 파트입니다.
 */

 class Render{
    constructor(){
        this.status = true;
    }

    start(){
        this.status = window.requestAnimationFrame(() => {
            this.renderer.render(this.scene, this.camera);
            this.controls.update();

            this.start();

            // console.log(this.status);
        });
    }

    stop(){
        window.cancelAnimationFrame(this.status);
    }

    status(value){
        this.status = value
    }
 }
 
 export { Render };