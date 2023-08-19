<template>
    <div>
        <div>
            <span>姓名:</span>
            <input type="text" v-model="full">
        </div>
    </div>
</template>

<script>
export default {
    name: '22VueApp',

    data() {
        return {
            
        };
    },
    /**
     * 
     * 
     * 完整语法:
     * computed:{
     *  "计算属性名"(){},
     *  "计算属性名":{
     *      set(值){
     *      
     *      },
     *      get() {
     *          return 值
     *      }
     * }
     * }
     */
    computed: {
        full:{
            //给full赋值触发set方法
            set(val) {
                console.log(val)
            },
            //使用full赋值触发get方法
            get() {
                return "无名氏"
            }
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