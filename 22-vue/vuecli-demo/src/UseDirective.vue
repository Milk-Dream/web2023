<template>
    <div>
        <input type="text" v-color="'red'">
    </div>
</template>

<script>
//inserted方法 - 指令所在标签，被插入到网页上
export default {
    directives:{
        focus:{
            inserted(el){
                el.focus()

            }
        }
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