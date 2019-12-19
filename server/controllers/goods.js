const goods = require('../models/goods');

const getDate = _=>{
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    day = day<10?'0'+day:day;
    month = month<10?'0'+month:month;
    return `${year}-${month}-${day}`;
}
/**
 * 
 * @param id:number 
 */
const postGoods =async function (ctx){
    const data = ctx.request.body;
    const res = await goods.postGoods({...data});
    ctx.body = {
        success: true,
        data:res
    }
}

const addGoods = async ctx=>{
    const data = ctx.request.body;
    const {id:user_id} = ctx.session;
    // console.log(user_id,data);
    const dateStr = new Date().getTime();
    const res = await goods.addGoods({...data,user_id,date:dateStr});
    if(!!res){
        ctx.body = {
            success:true,
            info:'添加成功！'
        }
    }else{
        ctx.body = {
            success:false,
            info:'未知错误！'
        }
    }
}

const apiDeleteGoods = async ctx =>{
    const {id} =ctx.query;

    const {user_id} =await goods.postGoods({goods_id:id});
    if(user_id === ctx.session.user_id || ctx.session.power === 1){
        //管理员或者自己才能删除
        const res =await goods.apiDeleteGoods(id);
        if(!!res){
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
    }else {
        ctx.body = {
            success:false,
            info:'没有权限！'
        }
    }
}

const apiUpdateGoods = async ctx =>{
    const {id, cate_id, cate2, detail, name, img, place} = ctx.request.body;

    const {user_id} =await goods.postGoods({goods_id:id});
    if(user_id === ctx.session.user_id || ctx.session.power === 1){
        //管理员或者自己才能修改
        let option = {};
        cate_id && (option.cate_id = cate_id);
        cate2 && (option.cate2 = cate2);
        detail && (option.detail = detail);
        name && (option.name = name);
        img && (option.img = img);
        place && (option.place = place);
        option.date = new Date().getTime();
        const res =await goods.apiUpdateGoods(id,option);

        if(!!res){
            ctx.body = {
                success: true,
                info:'更新成功！'
            }
        }else{
            ctx.body = {
                success:false,
                info:'未知错误！'
            }
        }
    }else {
        ctx.body = {
            success:false,
            info:'没有权限！'
        }
    }
}



module.exports = {
    postGoods,
    addGoods,
    apiDeleteGoods,
    apiUpdateGoods
}