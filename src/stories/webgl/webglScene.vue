<template>
    <HelloScene></HelloScene>
</template>

<script>
import Three from "./js/sceneExample";

let HelloScene = {
    template: '<div ref="webgl"></div>',
    mounted(){
        Three(this.$refs.webgl);
    }
}

export default {
    name: "webgl-example",
    components:{
        HelloScene
    }
}
</script>