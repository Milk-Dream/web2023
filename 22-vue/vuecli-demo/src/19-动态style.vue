<template>
    <div>
        <!--动态style语法
        :style="{css属性名: 值
        }"
        -->
        <p :style="{backgroundColor:colorStr}">动态style</p>
    </div>
</template>

<script>
export default {
    name: '22VueApp',

    data() {
        return {
            colorStr:"red"
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