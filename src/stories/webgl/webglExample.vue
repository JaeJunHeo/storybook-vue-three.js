<template>
    <WebglExample></WebglExample>
</template>

<script>
import Three from "./js/example";

let WebglExample = {
    template: '<div ref="webgl"></div>',
    mounted(){
        Three(this.$refs.webgl);
    }
}

export default {
    name: "webgl-example",
    components:{
        WebglExample
    }
}
</script>