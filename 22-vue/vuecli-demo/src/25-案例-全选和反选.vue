<template>
    <div>
        <span>全选:</span>
        <!--4. v-model关联全选 - 选中状态-->
        <input type="checkbox" v-model="isAll">
        <button @click="btn">反选</button>
        <ul>
            <li v-for="(obj,index) in arr" :key="index">
                <input type="checkbox" v-model="obj.c">
                <span>{{ obj.name }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: '22VueApp',
    
    data() {
        return {
            arr:[
                {
                    name:"猪八戒",
                    c:false
                },
                {
                    name:"孙悟空",
                    c:false
                },
                {
                    name:"唐僧",
                    c:false
                },
                {
                    name:"白龙马",
                    c:false
                }
            ]
        };
    },
    computed: {
        isAll: {
            set(val) {
                //7.全选框 - 选中状态(true/false)
                this.arr.forEach(obj=>obj.c = val)
            },
            get() {
                //every口诀:查找数组里不符合台哦就，直接原地返回false
                return this.arr.every(obj=>obj.c === true)
            }
            
        }
    },

    mounted() {
        
    },

    methods: {
        btn() {
            this.arr.forEach(obj=>obj.c = !obj.c)
        }
    },
};
</script>

<style lang="scss" scoped>

</style>