<template>
    <div>
        <el-row  class="content">
            <span class="title">
            欢迎登录 
            </span>
            <el-row>
                <el-input v-model="account" placeholder="账号" type="text"></el-input>
                <el-input placeholder="请输入密码" v-model="password"  type="password"></el-input>
                <el-button type="primary" @click="loginToDo">登录</el-button>
            </el-row>
        </el-row>
        
    </div>
</template>
<script>
export default{
    data(){
        return {
            account: '',
            password: ''
        }
    },
    methods:{
        loginToDo(){
            if(this.account == '' || this.password =='') return;
            let obj = {
                name: this.account,
                password: this.password
            }
            this.$http.post('/user', obj).then((res)=>{
                 console.log(JSON.stringify(res));
                 console.log('this='+this);
                 if(res.data.success){
                    sessionStorage.setItem('demo-token',this.account);
                    console.log('登陆成功');
                    this.$router.push('/todolist');
                 }
            }).catch((error)=>{
                sessionStorage.setItem('demo-token',null);
                console.log(error);
            })
        }
    }
}
</script>
<style lang="less" scoped>
    .title{
        font-size:28px;
    }
    .content{
        width:40%;
        margin:0 auto;
    }
    .el-input{
        margin: 12px 0;
    }
</style>


