<template>
    <div>
        <!--1.变量准备-静态页面铺设-->
        <h1>{{ msg }}</h1>
        <!--2.绑定点击事件-->
        <button @click="btn">逆转世界</button>
    </div>
</template>

<script>
export default {
    name: '22VueApp',

    data() {
        return {
            msg:"Hello, World"
        };
    },

    mounted() {
        
    },

    methods: {
        btn() {
            //3.截取字符串返回数组
            let arr = this.msg.split("")
            //4.翻转
            arr.reverse()
            this.msg = arr.join("")
        }
    },
};
</script>

<style lang="scss" scoped>

</style>