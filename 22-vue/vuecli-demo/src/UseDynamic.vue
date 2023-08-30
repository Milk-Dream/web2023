<template>
    <div>
        <button @click="comName='UserName'">账号密码填写</button>
        <button @click="comName='UserInfo'">个人信息填写</button>
        <p>下面显示注册组件 - 动态切换</p>
        <div style="border: 1px solid red;">
            <components :is="comName"></components>
        </div>
    </div>
</template>

<script>
import UserName from './UserName.vue';
import UserInfo from './UserInfo.vue';
//目标:动态组件 - 切换组件显示
//1.创建要被切换的组件 - 标签+样式
//2.引入到要展示的vue文件内
export default {
    components:{
        UserName,
        UserInfo
    },
    data() {
        return {
            comName:"UserName"
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