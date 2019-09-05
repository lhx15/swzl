const db = require('../config/db');
const Sequelize = require('sequelize');
const sequelize = db.sequelize;
const userModel = require('../schema/user');
const User = userModel(sequelize,Sequelize);
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
module.exports = {
    getUserById,
    getUserByName
}
 