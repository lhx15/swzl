const db = require('../config/db');
const sequelize = db.sequelize;
const listModel = require('../schema/list');
const Sequelize  = require('sequelize');
const list = listModel(sequelize,Sequelize)
const getTodoListById = async function (id){
    const todolist  = await list.findAll({
        where:{
            user_id:id
        },
        attributes: ['id', 'content', 'status'] //只需要三个字段
    });
    return todolist;
}
const createTodolist =  async function (data) {
    await list.create({
        user_id:data.id,
        content:data.content,
        status:data.status
    });
    return true;
}
const removeTodoList = async function (id,userId){
    const result = await list.destroy({
        where:{
            id,
            user_id:userId
        }
    });
    return result === 1;
}
const updateTodoList = async function (id,userId,status) {
    const result = await list.update(
        {
            status
        },
        {
            where:{
                id,
                user_id:userId
            }
        }
    );
    return result[0] === 1;
}
module.exports = {
    getTodoListById,
    createTodolist,
    removeTodoList,
    updateTodoList
}