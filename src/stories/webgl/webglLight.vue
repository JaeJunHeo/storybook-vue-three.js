<template>
    <HelloLight></HelloLight>
</template>

<script>
import Three from "./js/lightExample";

let HelloLight = {
    template: '<div ref="webgl"></div>',
    mounted(){
        Three(this.$refs.webgl);
    }
}

export default {
    name: "webgl-example",
    components:{
        HelloLight
    }
}
</script>