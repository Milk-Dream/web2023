<template>
    <div>
        <h1>1.动态dynamic组件的使用</h1>
        <UseDynamic></UseDynamic>
        <h1>2.自定义指令</h1>
        <UseDirective></UseDirective>
    </div>
</template>

<script>
import UseDynamic from './UseDynamic.vue';
import UseDirective from './UseDirective.vue';
export default {
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    components: { UseDynamic, UseDirective}
};
</script>

<style lang="scss" scoped>

</style>