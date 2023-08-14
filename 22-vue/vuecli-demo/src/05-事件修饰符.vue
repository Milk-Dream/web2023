<template>
    <div>
        <div @click="fatherFn">
            <p @click.stop="oneFn">.stop-阻止事件冒泡</p>
            <a href="http://www.baidu.com" @click.prevent.stop>去百度</a>
            <p @click.once="twoFn">点击观察事件处理函数执行几次</p>
        </div>
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
        fatherFn() {
            console.log("father-触发click事件");
        },
        oneFn() {
            console.log("p标签点击了")
        },
        twoFn() {
            console.log("p标签被点击了")
        }
    },
};
</script>

<style lang="scss" scoped>

</style>