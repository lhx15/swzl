<template>
  <div class="b">
    <div style="    background: rgba(0,0,0,.3);width:100%;height:100vh;overflow:hidden;">
      <div class="container">
        <h1>注&nbsp;册</h1>
        <el-form :model="ruleForm" status-icon  ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-input class="" prefix-icon="el-icon-user" type="text" v-model="ruleForm.username" autocomplete="off" placeholder="用户名"></el-input>
          <div style="float:left;font-size:12px;color:red;" v-show="isFlagUser">必填</div>
          <el-input class="inputa" prefix-icon="el-icon-goods" type="password" v-model="ruleForm.password" autocomplete="off" placeholder="密码"></el-input>
          <div style="float:left;font-size:12px;color:red;" v-show="isFlagPass">必填</div>
          <el-input class="inputa" prefix-icon="el-icon-phone" type="text" v-model="ruleForm.tel" autocomplete="off" @input.native="handleInput($event)" placeholder="电话"></el-input>
          <!-- <div style="float:left;font-size:12px;color:red;" v-show="isFlagUser">必填</div> -->
          <el-input class="inputa" prefix-icon="el-icon-chat-dot-round" type="text" v-model="ruleForm.wechat" autocomplete="off" placeholder="微信"></el-input>
          <el-button type="primary" class="btn inputa" @click="register">注册</el-button>
        </el-form>
        <el-link type="primary" style="margin:0 auto;" @click="gotoLogin">我有账号了,立即登录</el-link>
      </div>
    </div>
  </div>
</template>
<script>
import {userRegister} from '../api/index.js'

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
        wechat:'',
        tel:''
      }

    };
  },
  created(){

  },
  methods: {
    async register() {
      this.isFlagUser = (this.ruleForm.username.length === 0)
      this.isFlagPass = (this.ruleForm.password.length === 0)
      if(this.isFlagUser || this.isFlagPass){
          return;
      }
    //   console.log({'name':this.ruleForm.username,password:this.ruleForm.password})
      const res = await userRegister({
            'name':this.ruleForm.username,
            'password':this.ruleForm.password,
            'tel':this.ruleForm.tel,
            'wechat':this.wechat
          })
    //   console.log(res);
      // const res = this.$http.post('/user', {'user_name':this.username,password:this.password});
      if (res.success) {
        this.$message({
          message: '注册成功',
          type: 'success',
          iconClass: 'el-icon-success'
        });

        this.$router.push({ path:'/login',})
      }
    },
    gotoLogin(){
        this.$router.push({ path:'/login',});
    },
    handleInput(e){
        this.ruleForm.tel = e.target.value.replace(/[^\d]/g,'')
    }
  },
  watch:{
    "ruleForm.username":function(value){
      this.isFlagUser = (this.ruleForm.username.length === 0)
    },
    "ruleForm.password":function(value){
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
  height: 462px;
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
