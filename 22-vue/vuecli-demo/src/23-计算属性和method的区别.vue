<template>
    <div>
        <p>{{ reverseMessage }}</p>
        <p>{{ reverseMessage }}</p>
        <p>{{ reverseMessage }}</p>
        <p>{{ getMessage() }}</p>
        <p>{{ getMessage() }}</p>
        <p>{{ getMessage() }}</p>
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
    //计算属性的优势
    //带缓存
    //计算属性对应函数执行后,会把return值缓存起来
    //依赖项不变,多次调用都是从缓存值获取
    //依赖值-变化,函数会自动重新执行-并缓存更新
    computed: {
        reverseMessage() {
            console.log("计算属性执行了")
            return this.msg.split("").reverse().join()
        }
    },

    methods: {
        getMessage() {
            console.log("函数执行了")
            return this.msg.split("").reverse().join()
        }
    },
};
</script>

<style lang="scss" scoped>

</style>