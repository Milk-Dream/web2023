<template>
    <div>
        <!--语法1
        :class="{类名:布尔值}"
        -->
        <p :class="{red_str:bool}">动态class</p>
    </div>
</template>

<script>
export default {
    name: '22VueApp',

    data() {
        return {
            bool:true
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
    .red_str {
        color: red;
    }

</style>