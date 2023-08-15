<template>
    <div>
        <!--语法1:
        v-for="(值变量名,索引变量名) in 目标结构"
        v-for="值变量名 in 目标结构"
        想要谁循环就放到谁身上
        -->
        <ul>
            <li v-for="(item,index) in arr">
                {{ item }} ---- {{ index }}
            </li>
        </ul>
        <!---->
        <ul>
            <li v-for="obj in stuArr">
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
            arr:["小明","小白","小黑"],
            stuArr:[
                {
                    id:1001,
                    name:"孙悟空",
                    age:18,
                    hobby:["飞天"]
                }
            ]
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