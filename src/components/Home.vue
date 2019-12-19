<template>
  <div>
    <Layout>

        <div class="head" slot="head">
            
            <ul>
              <li><router-link to='/home/index' @click.stop="fn">首&nbsp;&nbsp;页</router-link></li>
              <li><router-link to='/home/lossGoods' @click.stop="fn">失&nbsp;&nbsp;物</router-link></li>
              <li><router-link to='/home/pickGoods' @click.stop="fn">招&nbsp;&nbsp;领</router-link></li>
              <li><router-link to='#' @click.stop="fn">匿&nbsp;&nbsp;名</router-link></li>
              <li><router-link to='#' @click.stop="fn">关&nbsp;&nbsp;于</router-link></li>
            </ul>
          </div>
          <!-- 
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
          </el-menu>-->
          <div slot="footer">© 2020 The designed by LHX.</div> 
    </Layout>
  </div>
</template>
<script>
import Layout from './layout.vue'
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
    Layout
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
	color: #000;
	font-size:  24px;
}
.head ul {
	height: 50px;
	line-height: 50px;
	float: left;
  /* font-size:14px; */
  display: flex;
  width: 100%;
}
.head li {
	list-style: none;
	float: left;
	height: 50px;
  padding: 0px 0px 10px 0px;
  flex:1;
	
}
.head li a {
	display: block;
	height: 50px;
	/* width:120px; */
	text-align: center;
	line-height: 50px;
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
