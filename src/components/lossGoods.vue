<template>
  <div class="constainer">
      <h3>失物</h3>
	  <el-table
		:data="goods"
		style="width: 100%;padding:0 30px;">
		<el-table-column
			prop="cate.name"
			label="类型"
			>
		</el-table-column>
		<el-table-column
			prop="name"
			label="物品名称"
			>
		</el-table-column>
		<el-table-column
			prop="date"
			label="发布日期"
			>
		</el-table-column>
		<el-table-column
			prop="user.user_name"
			label="发布用户"
			>
		</el-table-column>
		
		<el-table-column
			label="操作"
			align="center"
			width="300"
			>
			<template slot-scope="scope">
				<el-button size="medium" @click="gotoInfo(scope.row.goods_id)">查看</el-button>
				<el-button type="danger" size="medium" v-if="scope.row.flag">删除</el-button>
			</template>
		</el-table-column>
		
	</el-table>
	<el-pagination
		style="float:right;margin:20px 20px 0 0;"
		background
		:current-page="currentPage"
		layout="prev, pager, next"
		:page-size="limit"
		:total="total"
		@current-change="changePage">
	</el-pagination>
  </div>
</template>

<script>
import {getGoods} from '../api/index';
import {timestampToTime} from '../assets/js/common';
export default {
	name:'Lunbo',
	data(){
		return {
			cate2:1,
			goods:[],
			// hasNext:false,
			currentPage:1,		//当前页
			limit:10,			//一页10个数据
			total:0,			//总数
		}
	},
	async created(){
		const res = await(getGoods({
				cate2:this.cate2,
				limit:this.limit,
				offset:0,
			})
		);
		if(res.success){
			const {name} = this.$store.state.user
			this.total = res.data.count;
			this.goods = res.data.rows;
			this.goods.map(item => {
				//判断是否是自己发布的
				if(item.user.user_name == name){
					item.flag = true;
				}else{
					item.flag = false;
				}
				item.date = timestampToTime(item.date);
			})
		}else{
			this.$message.error(res.info);
		}
		console.log(this.$store.state.user.name)
	},
	methods:{
		async changePage(newPage){
			const res = await(getGoods({
					cate2:this.cate2,
					limit:this.limit,
					offset:(newPage-1)*10,
				})
			);
			if(res.success){
				const {name} = this.$store.state.user
				this.total = res.data.count;
				this.goods = res.data.rows;
				this.goods.map(item => {
					//判断是否是自己发布的
					if(item.user.user_name == name){
						item.flag = true;
					}else{
						item.flag = false;
					}
					item.date = timestampToTime(item.date);
				})
				this.currentPage = newPage;
			}else{
				this.$message.error(res.info);
			}
		},
		gotoInfo(id){
			// alert(id);
			this.$router.push({
				path: '/home/goodsInfo',
				query: {
					id: id
				}
			})
		}
	}
}

;
</script>

<style scoped> 

</style>