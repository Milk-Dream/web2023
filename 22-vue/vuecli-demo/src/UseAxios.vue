<template>
    <div>
        <p>1.获取所有图书信息</p>
        <button @click="getAllFn">获取所有图书</button>
        <p>2.查询某本书籍的信息</p>
        <input type="text" v-model="bName" placeholder="请输入要查询的书籍">
        <button @click="findFn"></button>
        <p>3.新增图书信息</p>
        <div>
            <input type="text" placeholder="书名" v-model="bookObj.bookname">

        </div>
        <div>
            <input type="text" placeholder="作者" v-model="bookObj.author">
            
        </div>
        <div>
            <input type="text" placeholder="出版社" v-model="bookObj.publisher">
            
        </div>
        <button @click="sendFn">新增图书</button>
    </div>
</template>

<script>
//目标1:获取所有图书信息
//1.下载axios
//2.引入axios
import axios from "axios"
//4.全局配置
axios.defaults.baseURL = "http://123.57.109.30:3006"
export default {
    name: '22VueUseAxios',

    data() {
        return {
            bName:"",
            bookObj:{//参数名提前和后台参数名对上，这样发送请求就不用对接了
                bookname:"",
                author:"",
                publisher:""
            }
        };
    },

    mounted() {
        
    },

    methods: {
        getAllFn() {
                axios({
                    url:"/api/getbooks",
                    method:"GET"//默认就是GET方式请求，可以省略不写
                }).then(res=>{
                    console.log(res)
                })
            },
            findFn() {
                axios({
                    url:"/api/getbooks",
                    method:"GET",//默认就是GET方式请求，可以省略不写
                    params: {//都会被axios最终拼接到url?后面
                        bookname:this.bName
                    }
                }).then(res=>{
                    console.log(res)
                })
            },
            sendFn() {
                axios({
                    url:"/api/addbook",
                    method:"POST",//默认就是GET方式请求，可以省略不写
                    data:{
                        appkey:"7250d3eb-18e1-41bc-8bb2-11483665535a",
                        // bookname:this.bookObj.bookname,
                        // author:this.bookObj.author,
                        // publisher:this.bookObj.publisher
                        ...this.bookObj
                    }
                }).then(res=>{
                    console.log(res)
                })
            }
    },
};
</script>

<style lang="scss" scoped>

</style>