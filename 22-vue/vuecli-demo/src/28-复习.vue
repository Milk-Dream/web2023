<template>
    <div>
        <ul>
            <li v-for="val in arr">
                {{ val }}
            </li>
        </ul>
        
        <button @click="btn">更改值</button>
    </div>
</template>

<script>
export default {
    name: '22VueApp',

    data() {
        return {
            arr:[1, 2, 3]
        };
    },

    mounted() {
        
    },

    methods: {
        btn() {
            this.$set(this.arr,1,100)
            //this.arr[1] = 100
        }
    },
};
</script>

<style lang="scss" scoped>

</style>