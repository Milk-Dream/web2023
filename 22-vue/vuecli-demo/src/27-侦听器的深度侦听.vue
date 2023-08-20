<template>
    <div>
        
        <input type="text" v-model="user.name">
        <input type="text" v-model="user.age">
    </div>
</template>

<script>
export default {
    name: '22VueApp',

    data() {
        return {
            user: {
                name:"",
                age:0
            }
            
        };
    },
    watch: {
        user: {
            handler(newVal,oldVal) {
                // user里的对象
                console.log(newVal,oldVal)
            },
            deep:true,//深度监听(对象里面层的值改变)
            immediate:true//立即侦听(网页打开)
        }
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>