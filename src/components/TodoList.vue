<template>
    <div>
        <el-row class="content">
            <span class="title">
                欢迎{{name}}
                <el-button size="big" class="out" type="primary" @click="loginout">退出登陆</el-button>
            </span>
            <el-input placeholder="请输入待办事项" v-model="todos" @keyup.enter.native="addTodos"></el-input>
            <el-tabs v-model="activeName">
                <el-tab-pane label="待办事项" name="first">
                    <el-col :xs="24">
                        <template v-if="!Done">
                            <template v-for="(item, index) in list">
                                <div class="todo-list" v-if="item.status == false" :key="index">
                                <span class="item no-finished">
                                    {{ index + 1 }}. {{ item.content }}
                                </span>
                                <span class="pull-right">
                                    <el-button size="small" class="finish-item" type="primary" @click="update(index)">完成</el-button>
                                    <el-button class="remove-item" size="small" :plain="true" type="danger" @click="remove(index)">删除</el-button>
                                </span>
                                </div>
                            </template> 
                        </template>
                        <div v-else-if="Done">
                        暂无待办事项
                        </div>
                    </el-col>
                </el-tab-pane>
                <el-tab-pane label="已完成事项" name="second">
                    <template v-if="count > 0">
                        <template v-for="(item, index) in list">
                        <div class="todo-list" v-if="item.status == true" :key="index">
                            <span class="item finished">
                            {{ index + 1 }}. {{ item.content }}
                            </span>
                            <span class="pull-right">
                            <el-button size="small" class="restore-item" type="primary" @click="update(index)">还原</el-button>
                            </span>
                        </div>
                        </template> 
                    </template>
                    <div v-else>
                        暂无已完成事项
                    </div>
                </el-tab-pane>
            </el-tabs>
            
        </el-row>
    </div>
</template>
 
<script>
export default {
    data(){
        return{
            activeName:'first',
            todos:'',
            list: [],
            name: '',
            id:''
            
        }
    },
    computed:{
        Done(){
            let count = 0;
            let length = this.list.length;
            this.list.map((item)=>{
                item.status === 1 ? count+=1 : count;
            })
            this.count = count;
            if(count== length || length === 0){
                return true;
            }else{
                return false;
            }
        }
    },
    created(){
        this.name = sessionStorage.getItem('demo-token');
        this.getUserInfo();
    },
    methods:{
        loginout(){
            this.$http.get('/user/loginout/'+this.id).then((res)=>{
                if(res.data.success){
                    sessionStorage.setItem('demo-token',null);
                    this.$router.push('/');
                }
                console.log('退出成功')
            }).catch((error)=>{
                console.log(error)
            })
        },
        getUserInfo(){
            this.$http.get('/username/'+this.name).then((res)=>{
                if(res.data){
                    this.id = res.data.id;
                }
                this.getTodolist();//用户信息拿到之后去请求列表
            }).catch((error)=>{
                console.log(error)
            })
        },
        getTodolist(){
            this.$http.get('/api/todolist/'+this.id).then((res)=>{
                if(res.status == 200){
                   console.log(JSON.stringify(res));
                    this.list = res.data;
                    console.log('this.list.length:'+this.list.length);
                }else{
                    console.log('获取列表失败！');
                }
            }).catch((error)=>{
                console.log(error);
            })
        },
        addTodos (){
            if(this.todos=='') return;
            let obj = {
                status: false,
                content: this.todos,
                id: this.id
            }
            this.$http.post('/api/addlist', obj)
                .then((res) => {
                if (res.status === 200) {
                    // this.$message({
                    // type: 'success',
                    // message: '创建成功！'
                    // })
                    this.getTodolist()
                } else {
                    // this.$message.error('创建失败！')
                }
                }, (err) => {
                    //this.$message.error('创建失败！')
                    console.log(err)
                })
            this.todos = ''
        },
        update(index){
            this.$http.put('/api/todolist/' + this.id + '/' + this.list[index].id + '/' + this.list[index].status)
            .then((res) => {
                if (res.status === 200) {
                    this.$message({
                        type: 'success',
                        message: '任务状态更新成功！'
                    })
                    this.getTodolist()
                } else {
                    this.$message.error('任务状态更新失败！')
                }
            }, (err) => {
                this.$message.error('任务状态更新失败！')
                console.log(err)
            })
        },
        remove(index){
            this.$http.delete('/api/todolist/'+ this.id + '/' + this.list[index].id).then((res)=>{
                if (res.status === 200) {
                    this.$message({
                        type: 'success',
                        message: '删除成功！'
                    })
                    this.getTodolist()
                } else {
                    this.$message.error('删除失败！')
                }
            }).catch((error)=>{
                this.$message.error('删除失败！')
                console.log(error)
            })
        }
    }
}
</script>
<style lang="less" scoped>
    .title{
        font-size:28px;
    }
    .content{
        width:40%;
        margin:0 auto;
    }
    .el-input{
        margin: 20px auto;
    }
    .todo-list{
        width:100%;
        margin-top: 8px;
        padding-bottom:8px;
        border-bottom: 1px solid #eee;
        text-align:left;
        .item{
            font-size:20px;
            &.finished{
                text-decoration:line-through;
                color: #ddd;
            }
        }
        .pull-right{
            float:right;
        }

    }
    .out{
        float: right;
    }
</style>

 

