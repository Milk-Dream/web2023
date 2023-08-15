<template>
    <div>
        <!--v-show 或者 v-if
        v-show = "vue变量"
        v-if="vue变量"
        -->
        <h1 v-show="isShow">我是h1</h1>
        <h1 v-if="isOk">我是h2</h1>

        <p v-if="age >= 18">成年了</p>
        <p v-else>未成年</p>
    </div>
</template>

<script>
export default {
    name: '22VueApp',

    data() {
        return {
            isShow:true,
            isOk:false,
            age:20

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