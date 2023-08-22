<template>
    <div>
        <MyProce v-for="obj in list" :key="obj.id" :title="obj.proname" :price="obj.proprice" :intro="obj.info"></MyProce>
    </div>
</template>

<script>
import MyProce from "./MyProduct.vue"
export default {
    name: '22VueApp',
    components: {
        MyProce
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
        
    },
};
</script>

<style lang="scss" scoped>

</style>