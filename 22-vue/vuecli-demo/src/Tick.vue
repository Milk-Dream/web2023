<template>
    <div>
        <input ref="input" type="text" placeholder="这是一个输入框" v-if="isShow">
        <button v-else @click="btn">点击我进行搜索</button>
    </div>
</template>

<script>
export default {

    data() {
        return {
            isShow:false
        };
    },

    mounted() {
        
    },

    methods: {
        async btn() {
            this.isShow = true;
            /*this.$nextTick(()=>{
                this.$refs.input.focus()
            })*/
            //扩展:await 取代回调函数
            await this.$nextTick()
            this.$refs.input.focus()
        }
    },
};
</script>

<style lang="scss" scoped>

</style>