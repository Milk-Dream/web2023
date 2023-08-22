<template>
    <div>
        <!--
            目标:父(App.vue) -> 子(MyProduct)
            需求:每次组件显示不同的数据信息
            步骤(口诀)
                1.子组件 - props - 变量 (准备接收)
                2.父组件 - 传值进去
        -->
        <Product title="好吃的口水鸡" price="50" intro="开业大酬宾,全场8折"></Product>
        <Product title="好可爱的可爱多" price="20" intro="老板不在家,全场1折"></Product>
        <Product title="好贵的北京烤鸭" price="288" :intro="str"></Product>
    </div>
</template>

<script>
//1.创建组件
//2.引入组件
import Product from "./MyProduct.vue"
//3.
export default {
    name: '22VueApp',

    data() {
        return {
            str:"不打折"
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    components: {
        Product //Key和value同名了,可以简写
    }
};
</script>

<style lang="scss" scoped>

</style>