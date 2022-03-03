<template>
    <HelloControl></HelloControl>
</template>

<script>
import Three from "./js/controlExample";

let HelloControl = {
    template: '<div ref="webgl"></div>',
    mounted(){
        Three(this.$refs.webgl);
    }
}

export default {
    name: "webgl-example",
    components:{
        HelloControl
    }
}
</script>