const db = require('../config/db');
const Sequelize = require('sequelize');
const sequelize = db.sequelize;
const userModel = require('../schema/user');
const User = userModel(sequelize,Sequelize,1);
const getUserById = async function (id) {
    const userInfo = await User.findOne({
        where:{
            id: id
        }
    })
    return userInfo;
}
const getUserByName = async function (name) {
    const userInfo = await User.findOne({
        where:{
            user_name: name
        }
    })
    return userInfo;
}
const registerUser = async function({name,password,tel=null,wechat=null,power=2}) {
    const userInfo = await User.create({
        user_name: name,
        password:password,
        tel,
        wechat,
        power:2
    })
    return userInfo;
}
const changgePassword = async function({id,password}){
    if(!password && !id)return false;
    const userInfo = await User.update({
        password
    },{
        where:{
            id:id
        }
    });
    return userInfo;
}
module.exports = {
    getUserById,
    getUserByName,
    registerUser,
    changgePassword
}
 