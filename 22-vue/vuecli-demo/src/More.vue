<template>
    <div>
        <p>1.获取原生DOM元素</p>
        <h1 id="h" ref="myH">我是一个孤独可怜又能吃的h1</h1>
        <p>2.获取组件对象 - 可调用组件内的一切</p>
        <Demo ref="de"></Demo>
        <p>3.vue更新dom是异步的</p>
        <p>{{ count }}</p>
        <button @click="btn">点击count+1,马上提取p标签内容</button>
    </div>
</template>

<script>
import Demo from "./Demo.vue"
export default {
    components:{
        Demo
    },
    data() {
        return {
            count:0
        };
    },

    mounted() {
        console.log(document.querySelector("#h"))
        console.log(this.$refs.myH)
        let demoObj = this.$refs.de;
        demoObj.fn()
    },

    methods: {
        btn() {
            this.count++;
            //0
            //console.log(this.$refs.myP.innerHTML)
            //原因:Vue更新DOM是异步的
            //解决:this.$nextTick()
            //过程:DOM更新完会挨个触发$nextTick里的函数体
            this.$nextTick(()=>{
                console.log(this.$refs.myP.innerHTML)
                
            })
        }
    },
};
</script>

<style lang="scss" scoped>

</style>