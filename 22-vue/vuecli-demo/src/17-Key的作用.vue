<template>
    <div>
        <ul>
            <li v-for="obj in arr" :key="obj.id">
                {{ obj.name }}
                <input type="text">
            </li>
        </ul>
        <button @click="btn">添加一个input</button>
    </div>
</template>

<script>
export default {
    name: '22VueApp',

    data() {
        return {
            arr:[
                {
                    name:"老大",
                    id:50
                },
                {
                    name:"老二",
                    id:31
                },
                {
                    name:"老三",
                    id:34
                }
            ]
        };
    },

    mounted() {
        
    },

    methods: {
        btn() {
            this.arr.splice(1,0,{name:"老四",id:19})
        }
    },
};
</script>

<style lang="scss" scoped>

</style>