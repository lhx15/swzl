const cate = require('../models/cate');

/**
 * @return {Object:{id,name}}
 */
const getCateInfo =async function (ctx){
    const cateInfo = await cate.getCateContext();
    if(cateInfo!=null){
        ctx.body = {
            success: true,
            data:cateInfo
        }
    }else{
        ctx.body = {
            success:false,
            info:'未知错误！'
        }
    }
}

/**
 * @param {string:name}
 * @return {Object:{id,name}}
 */
const addCate =async function (ctx){
    const data =ctx.request.body;
    const cateInfo = data.name && await cate.addCate(data.name);
    if(!!cateInfo){
        ctx.body = {
            success: true,
            info:'添加成功'
        }
    }else{
        ctx.body = {
            success:false,
            info:'未知错误！'
        }
    }
}
/**
 * @param @param {number:id}
 * @return {Object:{success,info}}
 */
const deleteCate =async function (ctx){
    const {id} =ctx.query
    console.log(id);
    const cateInfo = id && await cate.deleteCate(id);
    if(!!cateInfo){
        ctx.body = {
            success: true,
            info:'删除成功！'
        }
    }else{
        ctx.body = {
            success:false,
            info:'未知错误！'
        }
    }
}
/**
 * @param @param {number:id,string:name}
 * @return {Object:{success,info}}
 */
const updateCate =async function (ctx){
    const data =ctx.request.body;
    const cateInfo = data && await cate.updateCate(data.id,data.name);
    if(!!cateInfo){
        ctx.body = {
            success: true,
            info:'修改成功！'
        }
    }else{
        ctx.body = {
            success:false,
            info:'未知错误！'
        }
    }
}

module.exports = {
    getCateInfo,
    updateCate,
    deleteCate,
    addCate
}