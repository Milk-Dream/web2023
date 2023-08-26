<template>
    <div>
        <h1>1.生命周期</h1>
        <Life v-if="isShow"></Life>
        <button @click="isShow = false">销毁组件</button>
    </div>
</template>

<script>
import Life from "./Life.vue"
export default {
    components:{
        Life
    },

    name: '22VueApp',

    data() {
        return {
            isShow:true
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