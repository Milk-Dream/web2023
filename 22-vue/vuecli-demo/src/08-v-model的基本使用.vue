<template>
    <div>
        <div>
            <span>用户名:</span>
            <input type="text" v-model="username">
        </div>
        <div>
            <span>密码:</span>
            <input type="password" v-model="pass">
        </div>
    </div>
</template>

<script>
export default {
    name: '22VueApp',

    data() {
        return {
            username:"",
            pass:""
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