<template>
    <div>
        <p>原来的样子:{{ msg }}</p>
        <!--
            给过滤器传参
            语法:vue变量|过滤器名(值)
        -->
        <p>使用翻转过滤器{{ msg | reverse("|") }}</p>
        <p :title="msg | toUp | reverse('|')">鼠标长停</p>
    </div>
</template>

<script>
export default {
    name: '22VueApp',

    data() {
        return {
            msg:"Hello,Vue"
        };
    },
    /*方式2:局部 - 过滤器 */
    //只能在当前vue文件使用
    /*
        语法:
        filters:{
            过滤器名字(val) {
                return 处理后的值
            }
        }
    
    */
    filters:{
        toUp(val) {
            return val.toUpperCase()
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