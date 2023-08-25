<template>
    <div>
        <p>学习生命周期 - 看控制台打印</p>
        <p id="myP">{{ msg }}</p>
        <ul id="myUL">
            <li v-for="(val,index) in arr" :key="index">
            {{ val }}</li>
        </ul>
        <button @click="arr.push(1000)"></button>
    </div>
</template>

<script>
export default {
    name: '22VueLife',

    data() {
        return {
            msg:"Hello, Vue",
            arr:[5,8,2,1],
            timer:null
        };
    },
    //new Vue()以后,vue内部给实例对象添加了一些属性和方法,data和methods初始化之前
    beforeCreate() {
        console.log("beforeCreate -- 执行")
        console.log(this.msg)//undefined
    },
    //data和methods初始化以后
    //场景:网络请求,注册全局事件
    created() {
        console.log("created -- 执行")
        console.log(this.msg)//Hello Vue
        this.timer = setInterval(()=>{
            console.log("哈哈哈")
        },1000)

    },
    //二:挂载
    //真实DOM挂载之前
    //场景:预处理data,不会除非updated钩子函数
    beforeMount() {
        console.log("beforeMount -- 执行")
        console.log(document.getElementById("myP"))//null
    },
    //真实DOM挂载以后
    //场景:挂载后的真实DOM
    mounted() {
        console.log("mounted -- 执行")
        console.log(document.getElementById("myP"))//p
    },
    //更新
    //更新之前,数据改变,更新到DOM之前
    beforeUpdate() {
        console.log("beforeUpdate -- 执行")
        console.log(document.querySelectorAll("#myUL>li")[4])//undefined
    },
    updated() {
        console.log("updated -- 执行")
        console.log(document.querySelectorAll("#myUL > li")[4])// li
    },
    //四.销毁
    //前提:v-if="false"销毁vue实例
    //场景:移除全局事件,移除当前组件,计时器,定时器,eventBus移除事件$off
    beforeDestroy() {
        console.log("beforeDestroy -- 执行")
        clearInterval(this.timer)

    },
    destroyed() {
        console.log("destroyed -- 执行")
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>