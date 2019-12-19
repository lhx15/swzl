/**
 * head 头部插槽
 * nav  导航栏插槽
 * footer 底部插槽
 *
 *
 *
 *
 */

<template>
  <div>
    <el-container>
      <el-container>
        <el-header>
          <div class="logo">
            LOGO
          </div>
          
          <div class="time">
            {{date}}
          </div>
          <el-dropdown class="user" placement="bottom" @command="loginOut">
            <div  @click="gotoInfo" class="user-name">
              用户名:{{this.$store.state.user.name}}
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="changePass">修改密码</el-dropdown-item>
              <el-dropdown-item command="loginOut">退出登陆</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
            
        </el-header>
        <div class="navd">
          <div class="w">
            <slot name="head"></slot>
          </div>
          
        </div>
        <el-main>
          
			    <router-view></router-view>
			 
        </el-main>
        <el-footer><slot name="footer"></slot></el-footer>
        <el-tooltip class="addgood" effect="dark" content="发布" placement="top">
          <el-button type="primary" icon="el-icon-plus" circle class="add-btn"></el-button>
        </el-tooltip>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import {loginOut} from '../api/index';
export default {
  name: 'layout',
  data() {
    return {
      date:'',
      username:'',
      squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      loading:true,
      isshow:true,
      tip:''
    }
  },
  async created(){
    const getDate = _=>{
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth()+1;
        let year = date.getFullYear();
        let h = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        day = day<10?'0'+day:day;
        month = month<10?'0'+month:month;
        h = h<10?'0'+h:h;
        min = min<10?'0'+min:min;
        sec = sec<10?'0'+sec:sec;
        return `${year}-${month}-${day} ${h}:${min}:${sec}`;
    }
    this.date = getDate();
    this.time = setInterval(_=>{
      this.date = getDate()
    },1000);

    console.log(this.$route.path);//获取当前页路由路劲
    
    if(this.$route.path == '/login/addGoods'){
      this.isshow = false;
    }else{
      this.isshow = true;
    }

    if(localStorage.getItem("username")){
      this.username = localStorage.getItem("username")
    }

  },
  methods:{
  	gotoInfo(){
      this.$router.push({ path:'/home/myInfo',});
    },
  	async loginOut(val){
      switch(val){
        case 'changePass':
          this.$router.push({ path:'/home/changePass',});
          break;
        case 'loginOut':
          const res = await loginOut()
          if(res.success){
            this.$router.push({ path:'/login',});
            this.$message.success(res.info);
          }else{
            this.$message.error('未知错误!');
          }
          break;
      }
      
    },
  	onSubmit() {
        console.log('submit!');
      },
       handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleCurrentChange(){
        this.loading = true
        //这里因为使用匿名函数，需要使用箭头函数，不要改变this指向
        setTimeout(()=>{
          this.loading = false
        },2000)
      }
  },
  destroyed(){
    clearInterval(this.time);
  }
}

;

</script>
<style scoped>
.add-btn {
  height: 60px;
  width: 60px;
  font-size: 30px;
}
.addgood {
  position:fixed;
  bottom: 80px;
  right:80px;
  z-index: 999;
}
.user-name {
  position: relative;
  top:20px;
}
.downMenu {
  top:10px;

}
.user {
  float: right;
  margin-right: 20px;
  margin-top: -20px;
  cursor: pointer;
}
.user:hover {
  color:blue;
}
.navd {
  width: 100%;
  margin-top: 40px;
  background-color: blue;
  height: 50px;
}
.navd .w {
  width: 1280px;
  margin: 0 auto;
  height: 50px;
}

.el-main h2 {
    color: rgba(0,0,0,.85);
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 13px;
}
.bottom {
    transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    /* IE 9 */
    -moz-transform: rotate(90deg);
    /* Firefox */
    -webkit-transform: rotate(90deg);
    /* Safari 和 Chrome */
    -o-transform: rotate(90deg);
    /* Opera */
    display: block;
    float: right;
    margin-top: -48px;
}
.rightBox {
	float: right;
	padding-top: 10px;
	height: 52px;
	display: inline-block;
    margin-bottom: 2px;
    color: #fff;
    text-align: center;
}

.el-menu-item {
	height:40px;
	line-height: 40px;
}
.el-menu-item.is-active {
	font-weight: 700;
}
.head>a {
	text-decoration: none;
	color: #fff;
	font-size:  24px;
}
.head ul {
	height: 62px;
	line-height: 62px;
	float: right;
	margin-right: 20px;
	font-size:14px;
}
.head li {
	list-style: none;
	float: left;
	height: 40px;
	padding: 10px 0px 10px 0px;
	
}
.head li a {
	display: block;
	height: 40px;
	width:60px;
	text-align: center;
	line-height: 40px;
	color: #fff;

}
.head li a:hover {
	background-color: rgba(0,0,0,.3);
}
/*.head a:visited {
	text-decoration:underline;
}*/

.logo {
  color: red;
  font-weight: 700;
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
  float: left;
  margin-left: 20px;
}
.time {
  color: #666;
  /* font-weight: 700; */
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
  float: right;
  margin-right: 20px;
}

.el-header {
  /* margin-left: 240px; */
  /* background-color: #3080fe;; */
  color: #333;
  text-align: left;
  height: 62px;
  line-height: 62px;
}

.head {
  /*margin-left: 240px;*/
  line-height: 62px;
}

.el-footer {
  background-color: rgba(0,0,0,.05);
  color: #333;
  /* margin-left: 240px; */
  line-height: 58px;
  text-align: center;
  height: 58px;
  color: #666;
  font-size: 12px;
  /*text-align: rig;*/
}

.el-aside {
  /*background-color: #D3DCE6;*/
  color: #333;
  width: 240px;
  height: 100%;
  position: fixed;
  padding-top: 10px;
  /*overflow: hidden;*/
}

.el-main {
  /*background-color: #E9EEF3;*/
  color: #333;
  /*text-align: center;*/
  /*line-height: 160px;*/
  /* margin-left: 240px; */
}

body>.el-container {
  margin-bottom: 40px;
}

.block {
  float: right;
  margin-top: 20px;
  margin-bottom: 20px;
}

</style>
