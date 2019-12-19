<template>
  <div class="container">
      <el-page-header @back="goBack" content="个人中心"></el-page-header>
	  <div class="box">
		<el-form style="width:400px;" label-position="right" label-width="80px" :model="formLabelAlign">
			<el-form-item label="用户名：">
				<el-input v-model="formLabelAlign.name" v-if="isUpdate"></el-input>
				<span v-if="!isUpdate">{{formLabelAlign.name}}</span>
				
			</el-form-item>
			<el-form-item label="电话：">
				<el-input v-model="formLabelAlign.tel"  v-if="isUpdate"></el-input>
				<span v-if="!isUpdate">{{formLabelAlign.tel}}</span>
			</el-form-item>
			<el-form-item label="微信：">
				<el-input v-model="formLabelAlign.wechat"  v-if="isUpdate"></el-input>
				<span v-if="!isUpdate">{{formLabelAlign.wechat}}</span>
			</el-form-item>
			<el-form-item>
				<el-button type="success" @click="submitForm()" v-if="isUpdate">提交</el-button>
				<el-button type="danger" @click="cancel" v-if="isUpdate">取消</el-button>
				<el-button type="primary" @click="update" v-if="!isUpdate">编辑</el-button>
			</el-form-item>
		</el-form>
	  </div>
  </div>
</template>

<script>
import {getUserInfo} from '../api/index';
export default {
	name:'myInfo',
	data(){
		return {
			formLabelAlign:{
				name:'',
				tel:'',
				wechat:'',
			},
			isUpdate:false,
		}
	},
	async created(){
		const {name, tel, wechat} = this.$store.state.user;
		this.formLabelAlign.name = name;
		this.formLabelAlign.tel = tel;
		this.formLabelAlign.wechat = wechat;
		
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