<template>
  <div>
    <adminLayout>

        <div class="head" slot="head">
          <!-- <child class="aa" v-model="objj" /> -->
            <router-link to='#' @click.stop="fn">政府管理系统{{objj}}</router-link>
             <div class="rightBox">
              <el-avatar shape="square" :size="40" :src="squareUrl"></el-avatar>
              

              <el-tooltip placement="top" effect="light"
              >
              <div slot="content"><a href="#" @click="exitLogin()">退出</a></div>
          <div style="float:right;margin-top:-20px; width:60px;margin-left:10px;cursor:pointer;">
                <span style="float:left;font-size:13px;">淘小宝</span>
                
                <span style="float:left;margin-top:-40px;font-size:12px;">技术部</span>
                <i class="bottom">></i>
              </div>
        </el-tooltip>
             </div>
            <ul>
              <li><a href="#" title="反馈">反馈</a></li>
              <li><a href="#" title="帮助">帮助</a></li>
            </ul>
          </div>
          
          <el-menu :default-active="this.$route.path" router slot="nav">
              <el-menu-item index="/home/index">
                <i class="el-icon-house"></i>
                <span slot="title">图书管理</span>
              </el-menu-item>
              <el-menu-item index="/home/borrow">
                <i class="el-icon-menu"></i>
                <span slot="title">图书借阅</span>
              </el-menu-item>
              <el-menu-item index="/home/recommend">
                <i class="el-icon-user"></i>
                <span slot="title">图书推荐</span>
              </el-menu-item>

              <el-menu-item index="/home/donate">
                <i class="el-icon-c-scale-to-original"></i>
                <span slot="title">图书捐赠</span>
              </el-menu-item>
          </el-menu>
          <div slot="footer">© 2018 Theme designed by ICE</div>
    </adminLayout>
  </div>
</template>
<script>
import adminLayout from './adminLayout.vue'
export default {
  name: 'Home',
  data() {
    return {
    	squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      objj:"aaabbb"
    }
  },
  created(){

  },
  methods:{
  	fn(e){
  		console.log(e.currentTarget);
  	},
  	handleClick(){
  		//点击tab页面
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
      },
      exitLogin(){
        //退出登录
        localStorage.removeItem("login")

        this.$store.commit('setLogin', false)
        this.$router.push('/')
      }
  },
  components:{
    adminLayout
  }
}

;

</script>
<style scoped>
.aa {
  width: 200px;
  height: 200px;
  background-color: pink;
  position: relative;
  top:0;
  z-index: 1000;
  left:700px;
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
  background-color: rgba(0,0,0,0.05);
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
  color: #3080fe;
  font-weight: 700;
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
}

.el-header {
  margin-left: 240px;
  background-color: #3080fe;;
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
  background-color: transparent;
  color: #333;
  line-height: 58px;
  text-align: right;
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
  background-color: #E9EEF3;
  color: #333;
  /*text-align: center;*/
  /*line-height: 160px;*/
  margin-left: 240px;
}

body>.el-container {
  margin-bottom: 40px;
}



</style>
