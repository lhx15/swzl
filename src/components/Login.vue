<template>
  <div class="b">
    <div style="    background: rgba(0,0,0,.3);width:100%;height:100vh;overflow:hidden;">
      <div class="container">
        <h1>登&nbsp;录</h1>
        <el-form :model="ruleForm" status-icon  ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-input class="" prefix-icon="el-icon-user" type="text" v-model="ruleForm.username" autocomplete="off" placeholder="用户名"></el-input>
          <div style="float:left;font-size:12px;color:red;" v-show="isFlagUser">必填</div>
          <el-input class="inputa" prefix-icon="el-icon-goods" type="password" v-model="ruleForm.password" autocomplete="off" placeholder="密码"></el-input>
          <div style="float:left;font-size:12px;color:red;" v-show="isFlagPass">必填</div>
          <el-checkbox class="box" v-model="checked">记住账号</el-checkbox>
          <el-button type="primary" class="btn" @click="submitForm()">登录</el-button>
        </el-form>
        <el-link type="primary" style="margin:0 auto;" @click="register">立即注册</el-link>
      </div>
    </div>
  </div>
</template>
<script>
import {userLogin} from '../api/index.js'
console.log(userLogin);
export default {
  name: 'login',
  data() {

    return {
      isFlagUser:false,
      isFlagPass:false,

      checked: false,
      ruleForm: {
        username: '',
        password: '',
      }

    };
  },
  created(){

    if(localStorage.getItem("username")){
      this.ruleForm.username = localStorage.getItem("username")
    }
  },
  methods: {
    async submitForm() {

      this.isFlagUser = (this.ruleForm.username.length === 0)
      this.isFlagPass = (this.ruleForm.password.length === 0)
      console.log({'name':this.ruleForm.username,password:this.ruleForm.password})
      const res = await userLogin({'name':this.ruleForm.username,password:this.ruleForm.password})
      console.log(res);
      // const res = this.$http.post('/user', {'user_name':this.username,password:this.password});
      if (res.success) {
        this.$message.success(res.info);
        //判断是否勾选了记住账号，记住的话就localstorage
        if(this.checked){
          localStorage.setItem("username", this.ruleForm.username);
        }else{
          localStorage.removeItem("username");
        }
        localStorage.setItem("login", true);

        this.$store.dispatch('setUser',res.data);
        
        if(res.data.power === 2){
          this.$router.push({ path:'/home/index',})
        }else{
          this.$router.push({ path:'/admin/index',})
        }
        

      }
    },
    register(){
      this.$router.push({ path:'/register',});
    }
  },
  watch:{
    "ruleForm.username":function(value){
      // console.log(111);
      this.isFlagUser = (this.ruleForm.username.length === 0)
    },
    "ruleForm.password":function(value){
      // console.log(111);
      this.isFlagPass = (this.ruleForm.password.length === 0)
    },
  }
}
;

</script>
<style scoped>
.b {
  background-image: url(https://img.alicdn.com/tfs/TB1nTrMt4TpK1RjSZFKXXa2wXXa-1434-954.png);
  background-size: cover;
  height: 100vh;
  overflow: hidden;

}

.container {
  height: 362px;
  width: 366px;
  position: relative;
  top: 50%;
  left: 50%;
  margin-left: -225px;
  margin-top: -220px;
  background-color: #fff;
  padding: 36px 42px 42px 42px;
  overflow: hidden;
  text-align: center;

}

.container h1 {
  font-weight: normal;
  margin: 0 auto;
  height: 68px;
  text-align: center;
}

.inputa {
  margin-top: 31px;

}

.box {
  margin-top: 31px;
  margin-bottom: 28px;
  float: left;
  margin-right: 400px;
}

.btn {
  width: 365px;
  margin-bottom: 30px;
}

</style>
