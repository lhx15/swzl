<template>
  <div class="container">
      <el-page-header @back="goBack" :content="goods.cate2"></el-page-header>
	  <div class="box">
		标题:{{goods.name}}<br>
		日期:{{goods.date}}<br>
		详细描述:{{goods.detail}}<br>
		图片:{{goods.img}}<br>
		类别:{{goods.cate}}<br>
		电话:{{goods.tel}}<br>
		微信:{{goods.wechat}}<br>
		用户名:{{goods.username}}<br>
		地点:{{goods.palce}}<br>
	  </div>
  </div>
</template>

<script>
import {getGoods} from '../api/index';
import {timestampToTime} from '../assets/js/common';
export default {
	name:'goodsInfo',
	data(){
		return {
			goods:{
				name:'',//标题
				date:'',//日期
				detail:'',//详细描述
				img:'',
				cate:'',//物品类别
				cate2:'失物详情',//失物=1，招领=2
				wechat:'',
				tel:'',
				place:'',
				username:'',
			},
		}
	},
	async created(){
		const res = await(getGoods({
				goods_id:this.$route.query.id
			})
		);
		console.log(res);
		if(res.success){
			const {name, place, img, detail, cate2, cate, user, date} = res.data.rows[0];
			this.goods.name = name;
			this.goods.date = timestampToTime(date);
			this.goods.place = place;
			this.goods.img = img;
			this.goods.detail = detail;
			this.goods.cate = cate.name;
			this.goods.username = user.user_name;
			this.goods.tel = user.tel;
			this.goods.wechat = user.wechat;
			this.goods.cate2 = cate2 == 1?'失物详情':'招领详情';

		}else{
			this.$message.error(res.info);
		}
	},
	methods:{
		submitForm(){
			//编辑没写
			this.$message({
				message: '编辑没写',
				type: 'success',
				iconClass: 'el-icon-success'
			});
			this.isUpdate = false;
		},
		cancel(){
			this.isUpdate = false;
		},
		update(){
			this.isUpdate = true;
		},
		goBack(){
			this.$router.go(-1);
		}
	}
}

;
</script>

<style scoped> 
.box {
	margin-top: 20px;
	display: flex;
	justify-content: center;
}
</style>