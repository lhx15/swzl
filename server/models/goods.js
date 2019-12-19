const db = require('../config/db');
const Sequelize = require('sequelize');
const sequelize = db.sequelize;
const goodsModel = require('../schema/goods');
const Goods = goodsModel(sequelize,Sequelize,3);
const User = goodsModel(sequelize,Sequelize,1);
const Cate = goodsModel(sequelize,Sequelize,2);

//type=1 丢失物品 
//type=2 捡到物品
const postGoods = async function ({goods_id,cate_id, cate2, user_id, name, limit, offset}) {
    //page:{offset:10,limit:5}跳过10个数据，获取5个数据，第三页

    let option = {};
    let page = {};
     
    goods_id && (option.goods_id = goods_id);
    cate_id && (option.cate_id = cate_id);
    cate2 && (option.cate2 = cate2);
    user_id && (option.user_id = user_id);
    name && (option.name = {
        [Sequelize.Op.like]:'%' +name + '%'
    });
    
    limit && (page.limit = parseInt(limit));
    offset && (page.offset = parseInt(offset));

    const res = await Goods.findAndCountAll({
        include: [
            {
                model: User,
                where:{
                    user_id:Sequelize.col('Goods.user_id'),
                },
            attributes:['user_name','tel','wechat']
        },
        {
            model: Cate,
            where:{
                cate_id:Sequelize.col('Goods.cate_id')
            }
        },
        ],
        order: [['date', 'DESC']],
        where:option,
        ...page

    })
    return res;
}
const addGoods = async function (obj) {
    const res = await Goods.create({
        ...obj
    })
    return res;
}
const apiDeleteGoods = async function(id) {

    const res = await Goods.destroy({
        where:{
            goods_id:id
        }
    });
    return res;
}
const apiUpdateGoods = async function(id,option) {

    const res = await Goods.update({
        ...option
    },{
        where:{
            goods_id:id
        }
    });
    return res;
}
module.exports = {
    postGoods,
    addGoods,
    apiDeleteGoods,
    apiUpdateGoods
    // registerUser,
    // changgePassword
}
 