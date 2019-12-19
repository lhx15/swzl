<template>
  <div class="container">
      <el-page-header @back="goBack" content="修改密码"></el-page-header>
	  <div class="box">
		<el-form style="width:400px;margin-left:-100px;" :rules="rules" label-position="right" label-width="135px" :model="formLabelAlign" ref="formName">
			<el-form-item label="原密码：" prop="password">
				<el-input class="inputa" prefix-icon="el-icon-goods" type="password" v-model="formLabelAlign.password" autocomplete="off" placeholder="密码"></el-input>
			</el-form-item>
			<el-form-item label="新密码：" prop="newPassword">
				<el-input class="inputa" prefix-icon="el-icon-goods" type="password" v-model="formLabelAlign.newPassword" autocomplete="off" placeholder="密码"></el-input>
			</el-form-item>
			<el-form-item label="再次输入新密码：" prop="newPassword2">
				<el-input class="inputa" prefix-icon="el-icon-goods" type="password" v-model="formLabelAlign.newPassword2" autocomplete="off" placeholder="密码"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="success" @click="submitForm()">提交</el-button>
				<el-button type="danger" @click="cancel" >取消</el-button>
			</el-form-item>
		</el-form>
	  </div>
  </div>
</template>

<script>
import {changePass} from '../api/index';

export default {
	name:'myInfo',
	data(){
		const validateChart_ = ((rule, value, callback) => {
			// console.log(value);
			if (value!=this.formLabelAlign.newPassword) {
				callback(new Error('两次输入密码不一致'));
			} else {
				callback()
				
			}
		});
		const validateChart_2 = ((rule, value, callback) => {
			console.log(value);
			if (value == this.formLabelAlign.password) {
				callback(new Error('两次输入密码一致'));
			} else {
				callback()
			}
		});

		return {
			formLabelAlign:{
				password:'',
				newPassword:'',
				newPassword2:'',
			},
			rules:{
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' },		
				],
				newPassword:[
					{ required: true, message: '请输入修改的密码', trigger: 'blur' },
					{validator:validateChart_2,trigger:'blur'}
				],
				newPassword2:[
					{ required: true, message: '请再次输入修改的密码', trigger: 'blur' },
					{validator:validateChart_,trigger:'blur'}
				],
			}
		}
	},

	methods:{
		async submitForm(){
			this.$refs.formName.validate(async _=>{
				if (_) {
					const res = await changePass({password:this.formLabelAlign.password,newPassword:this.formLabelAlign.newPassword})
					// console.log(res);
					if(res.success){
						this.$message.success(res.info);
						this.$router.push({ path:'/home/myInfo',});
					}
				} else {
					this.$message.error('提交失败');
					return false;
				}
			})
		},
		cancel(){
			this.goBack();
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