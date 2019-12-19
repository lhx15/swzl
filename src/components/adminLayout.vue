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
      <el-aside width="240px">
        <div class="logo">
          LOGO
        </div>
        <slot name="nav"></slot>
          
      
      </el-aside>
      <el-container>
        <el-header>
          <slot name="head"></slot>
          
        </el-header>
        <el-main>
			
			<router-view></router-view>
			 
        </el-main>
        <el-footer><slot name="footer"></slot></el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'adminLayout',
  data() {
    return {
    	squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
    	formInline: {
          catelog: '',
          region: '',
          author:'',

        },
        tableData: [{
            IBSN: '00000',
            booktype: '计算机',
            bookname: '软件工程导论',
            author:'套小虎',
            copyright:'出版社',
            date:'2018-10-01',
            sums:1000,
            placeSum:300,
            price:22.0
          },{
            IBSN: '00000',
            booktype: '计算机',
            bookname: '软件工程导论',
            author:'套小虎',
            copyright:'出版社',
            date:'2018-10-01',
            sums:1000,
            placeSum:300,
            price:22.0
          },{
            IBSN: '00000',
            booktype: '计算机',
            bookname: '软件工程导论',
            author:'套小虎',
            copyright:'出版社',
            date:'2018-10-01',
            sums:1000,
            placeSum:300,
            price:22.0
          },{
            IBSN: '00000',
            booktype: '计算机',
            bookname: '软件工程导论',
            author:'套小虎',
            copyright:'出版社',
            date:'2018-10-01',
            sums:1000,
            placeSum:300,
            price:22.0
          }],
          loading:true,
    }
  },
  created(){

    this.loading = true
    setTimeout(()=>{
        this.loading = false
      },2000)
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
      }
  }
}

;

</script>
<style scoped>
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
  background-color: rgba(0,0,0,.05);
  color: #333;
  margin-left: 240px;
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
  /*background-color: #E9EEF3;*/
  color: #333;
  /*text-align: center;*/
  /*line-height: 160px;*/
  margin-left: 240px;
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
