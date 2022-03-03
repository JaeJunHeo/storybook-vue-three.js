<template>
    <HelloCamera></HelloCamera>
</template>

<script>
import Three from "./js/cameraExample";

let HelloCamera = {
    template: '<div ref="webgl"></div>',
    mounted(){
        Three(this.$refs.webgl);
    }
}

export default {
    name: "webgl-example",
    components:{
        HelloCamera
    }
}
</script>