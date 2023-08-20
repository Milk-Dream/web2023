<template>
    <div>
        <input type="text" v-model="name">
    </div>
</template>

<script>
export default {
    name: '22VueApp',

    data() {
        return {
            name:""
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    /**
     * 
     * 
     * watch: {
     *  变量名(新变量名,旧变量名){
     *      
     *   }
     * }
     */

    watch: {
        name(newVal, oldVal) {
            console.log(newVal,oldVal)
        }
    }
};
</script>

<style lang="scss" scoped>

</style>