const db = require('../config/db');
const Sequelize = require('sequelize');
const sequelize = db.sequelize;
const userModel = require('../schema/cate');
const Cate = userModel(sequelize,Sequelize,2);
const getCateContext = async function () {
    const cateInfo = await Cate.findAll();
    return cateInfo;
}
const addCate = async function (name){
    const cateInfo = await Cate.create({
        name
    })
    return cateInfo;
}
const deleteCate = async id=>{
    console.log(231);
    const result = await Cate.destroy({
        where:{
            cate_id:id
        }
    });
    return result;
}
const updateCate = async (id,name)=>{
    const result = await Cate.update({
            name
        },
        {
            where:{
                cate_id:id
            }
        }
    );
    return result[0] === 1;
}

module.exports = {
    getCateContext,
    updateCate,
    deleteCate,
    addCate
}
 