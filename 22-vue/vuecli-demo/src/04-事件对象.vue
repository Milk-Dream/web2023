<template>
    <div>
        <a href="http://www.baidu.com" @click="one">百度</a>
        <hr>
        <a href="http://www.taobao.com" @click="two(10,$event)">淘宝</a>
    </div>
</template>

<script>
export default {
    name: '22VueApp',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        one(e) {
            e.preventDefault()
        },
        two(num,e){
            e.preventDefault()
        }
    },
};
</script>

<style lang="scss" scoped>

</style>