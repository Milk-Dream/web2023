<template>
    <div>
        
        <p v-text="str"></p>
        <p v-html="str"></p>
        <!--v-text或者v-html会覆盖插值表达式-->
    </div>
</template>

<script>
export default {
    name: '22VueApp',

    data() {
        return {
            str :"<span>我是一个span</span>"
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