<template>
    <div>
        <div>
            <span>来自于:</span>
            <!--下拉菜单要绑定到select上-->
            <select v-model="from">
                <option value="北京市">北京</option>
                <option value="南京市">南京</option>
                <option value="天津市">天津</option>
            </select>
        </div>
        <div>
            <!--(重要)
            遇到复选框，v-model的变量值
            非数组 - 关联的是复选框的checked属性
            数组 - 关联的是复选框的value属性
            -->
            <span>复选框:</span>
            <input type="checkbox" v-model="hobby" value="抽烟">抽烟
            <input type="checkbox" v-model="hobby" value="喝酒">喝酒
            <input type="checkbox" v-model="hobby" value="写代码">写代码

        </div>
        <div>
            <span>性别:</span>
            <input type="radio" v-model="gender" value="男" name="sex">男
            <input type="radio" v-model="gender" value="女" name="sex">女
        </div>
        <div>
            <span>自我介绍</span>
            <textarea v-model="content" name="" id="" cols="30" rows="10"></textarea>
        </div>
    </div>
</template>

<script>
export default {
    name: '22VueApp',

    data() {
        return {
            from:"",
            hobby:[],
            gender:"女",
            content:"你好"
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