<template>
    <div>
        <div>
            <span>年龄</span>
            <!--.number修饰符-把值parseFloat转数值再赋值给v-model对应的变量-->
            <input type="number" v-model.number="age">
        </div>
        <div>
            <span>人生格言</span>
            <!--去除首尾两边的空格-->
            <input type="text" v-model.trim="motto">
        </div>
        <div>
            <!--失去焦点内容改变时候-->
            <span>个人简介</span>
            <textarea name="" id="" cols="30" rows="10" v-model.lazy="intro"></textarea>
        </div>
    </div>
</template>

<script>
export default {
    name: '22VueApp',

    data() {
        return {
            age:0,
            motto:""
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