<template>
    <div>
        <!--1.绑定键盘按下事件.enter-回车-->
        <input type="text" @keydown.enter="enterFn">
        <!--2.esc修饰符 - 取消键-->
        <input type="text" @keydown.esc="escFn">
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
        enterFn() {
            console.log("用户按下回车键");
        },
        escFn() {
            console.log("用户按下esc键");
        }
    },
};
</script>

<style lang="scss" scoped>

</style>