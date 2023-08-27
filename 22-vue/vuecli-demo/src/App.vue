<template>
    <div>
        <h1>3.$refs的使用</h1>
        <More></More>
        <hr>
        <h1>4.Tick的使用</h1>
        <Tick></Tick>
        <h1>5.组件对象里面的name属性</h1>
        <ComNameHaHa></ComNameHaHa>
    </div>
</template>

<script>
import More from "./More.vue"
import Tick from "./Tick.vue"
import Com from "./Com.vue"
export default {
    components:{
        More,
        Tick,
        [Com.name]:Com
    },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>