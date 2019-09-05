const List = require('../models/list');
const getTodoList = async function (ctx){
    const id = ctx.params.id;
    const result = await List.getTodoListById(id);
    ctx.body = result;
}
const createList = async function (ctx){
    const data =ctx.request.body;
    const success = await List.createTodolist(data);
    ctx.body = {
        success
    } 
}
const removeTodolist = async function (ctx){
    const id = ctx.params.id
    const userId = ctx.params.userId;
    const success = await List.removeTodoList(id,userId);
    ctx.body = {
        success
    }
}
const updateList = async function (ctx) {
    const id = ctx.params.id
    const userId = ctx.params.userId
    let status = ctx.params.status
    status === '0' ? status = true : status = false// 状态反转（更新）
  
    const success = await List.updateTodoList(id, userId, status)
  
    ctx.body = {
      success
    }
  }
module.exports = {
    getTodoList,
    createList,
    removeTodolist,
    updateList
}