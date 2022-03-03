<template>
    <HelloRender></HelloRender>
</template>

<script>
import Three from "./js/renderExample";

let HelloRender = {
    template: '<div ref="webgl"></div>',
    mounted(){
        Three(this.$refs.webgl);
    }
}

export default {
    name: "webgl-example",
    components:{
        HelloRender
    }
}
</script>