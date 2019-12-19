<template>
  <div class="block">
    <el-carousel height="400px">
      <el-carousel-item v-for="item in 4" :key="item">
        <!-- <h3 class="small">{{ item }}</h3> -->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
	export default {
		name:'Lunbo',
		data(){
			return {
				bookName:'',
				radioBox:'',
				cardID:'',
				date:'',
				radio:1,

				 options: [{
		          value: '选项1',
		          label: '史蒂夫·乔布斯传'
		        }, {
		          value: '选项2',
		          label: '大数据供应链'
		        }, {
		          value: '选项3',
		          label: '深度学习'
		        }, {
		          value: '选项4',
		          label: '裂变'
		        }, {
		          value: '选项5',
		          label: '归属感'
		        }, {
		          value: '选项6',
		          label: '沉默的大多数'
		        }
		        ],
		        value1: [],
        		value2: []
			}
		},
		methods:{
			submit(){
				this.$message({
		          message: '提交成功',
		          type: 'success',
		          iconClass: 'el-icon-success'
		        });
			}
		}
	}

;
</script>

<style scoped> 
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
    .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
.block {
    width: 100%;
}
.small {
    text-align: center;
}
</style>