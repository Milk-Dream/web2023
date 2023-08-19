<template>
    <div>
        <p>{{ num }}</p>
    </div>
</template>

<script>
export default {
    name: '22VueApp',

    data() {
        return {
            a:10,
            b:20
        };
    },
    //计算属性
    //场景:一个变量的值,需要用另外的变量计算
    //就散属性和da
    /*
        语法:
        computed:{
            计算属性名(){
                return 值
            }
        }
    */
    computed: {
        num() {
            return this.a + this.b
        }
    },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>