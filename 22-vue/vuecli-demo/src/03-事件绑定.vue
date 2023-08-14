<template>
    <div>
        <p>你要购买商品的数量{{ count }}</p>
        <!--绑定事件
            语法: v-on:事件名="少量代码"
            语法: v-on:事件名 = "method里的函数名"
            语法: v-on:事件名 = "method里的函数名(实参)"
            语法: @事件名="method函数名"
        -->
        <button v-on:click="count = count + 1">+1</button>
        <button v-on:click="addFn">+1</button>
        <button v-on:click="addCountFn(5)">+5</button>
        <button @click="addCountFn(10)">+10</button>
    </div>
</template>

<script>
export default {
    name: '22VueApp',

    data() {
        return {
            count:1
        };
    },

    mounted() {
        
    },

    //2. 定义函数
    methods: {
        addFn() {//this指向的是export default
                //data函数会把对象挂到组件对象上
            this.count++
        },
        addCountFn(num) {
            this.count += num
        }
    },
};
</script>

<style lang="scss" scoped>

</style>