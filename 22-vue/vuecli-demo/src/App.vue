<template>
    <div style="overflow: hidden;">
        <div style="float: left;">
            <MyProce v-for="(obj,index) in list" :key="obj.id" :title="obj.proname" :price="obj.proprice" :intro="obj.info" :index="index" @subprice="fn"></MyProce>
        </div>
        <div style="float: left;">
            <List :arr="list"></List>
        </div>
        
    </div>
</template>

<script>
import MyProce from "./MyProduct_sub.vue"
import List from "./List.vue"
export default {
    name: '22VueApp',
    components: {
        MyProce,
        List
    },
    data() {
        return {
            list:[
                {
                    id:1,
                    proname:"超级好吃的棒棒糖",
                    proprice:18.8,
                    info:"开业大酬宾,全场8折"
                },
                {
                    id:2,
                    proname:"超级好吃的大鸡腿哦",
                    proprice:34.2,
                    info:"好吃不腻,快来买啊"
                },
                {
                    id:3,
                    proname:"超级贵的北京烤鸭",
                    proprice:288,
                    info:"老板不在家,全场1折"
                }
            ]
        };
    },

    mounted() {
        
    },

    methods: {
        fn(index,price){
            this.list[index].proprice > 1 && (this.list[index].proprice).toFixed(2)
        }
    },
};
</script>

<style>

</style>