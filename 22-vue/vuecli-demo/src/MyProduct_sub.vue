<template>
    <div class="my-product">
        <h3>标题: {{ title }}</h3>
        <p>价格: {{ price }}元</p>
        <p>{{ intro }}</p>
        <button @click="subFn">宝刀-砍1元</button>
        
    </div>
</template>

<script>
import eventBus from './EventBus';
export default {
    props:["title","price","intro","index"],
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        subFn() {
            //错误
            //1.子组件改父传入的数据不通知父亲会造成数据的不一致性
            //2.vue贵的,props,本身只读的,不允许重新赋值
            //this.price = this.price - 1
            //this.$emit("subprice",this.index,1)

            //目标:跨组件传值
            eventBus.$emit("send",this.index,1)
        }
    },
};
</script>

<style>
    .my-product {
        width: 400px;
        padding: 20px;
        border: 2px solid #000;
        border-radius: 5px;
        margin: 10px;
    }
</style>