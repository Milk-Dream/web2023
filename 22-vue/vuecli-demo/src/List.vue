<template>
    <ul class="my-product">
        <li v-for="(item,index) in arr" :key="index">
            <span>{{ item.proname }}</span>
            <span>{{ item.proprice }}</span>
        </li>
    </ul>
</template>

<script>
//目标:跨组件传值
//1.引入空白vue对象(EventBus)
//2.接收方 - $on监听事件
import eventBus from "../src/EventBus/index"
export default {
    created() {
        eventBus.$on("send",(index,price)=>{
            this.arr[index].proprice > 1 && (this.arr[index].proprice = (this.arr[index].proprice - price).toFixed(2))
        })
    },
    name: '22VueList',
    props:["arr"],
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

<style>
    .my-product {
        width: 400px;
        padding: 20px;
        border: 2px solid #000;
        border-radius: 5px;
        margin: 10px;
    }
</style>