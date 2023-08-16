<template>
    <div>
        <ul>
            <li v-for="(val,index) in arr" :key="index">
                {{ val }}
            </li>
        </ul>
        <button @click="revBtn">数组反转</button>
        <button @click="sliceBtn">截取前3个</button>
        <button @click="updateBtn">更新第一个元素</button>
    </div>
</template>

<script>
export default {
    name: '22VueApp',

    data() {
        return {
            arr: [5,3,9,2,1]
        };
    },

    mounted() {
        
    },

    methods: {
        revBtn() {
            this.arr.reverse()
        },
        sliceBtn() {
            let newArr = this.arr.slice(0,3)
            console.log(this.arr);
            this.arr = newArr

        },
        updateBtn() {
            //3.更新某个值的时候，v-for是检测不到的
            this.arr[0] = 1000;
            //解决-this.$set
            //参数1:更新的目标结构
            //参数2:更新的位置
            //参数3:更新的值
            this.$set(this.arr,0,1000)
        }
    },
};
</script>

<style lang="scss" scoped>

</style>