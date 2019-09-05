const user = require('../models/user');
const bcryptjs = require('bcryptjs');
const getUserInfo = async function (ctx){
    const id = ctx.params.id;
    const result = await user.getUserById(id);
    ctx.response.body = result;
}
const getUserInfoByName = async function (ctx){
    const name = ctx.params.name;
    const result = await user.getUserByName(name);
    ctx.response.body = result;
}
const postUserAuth = async function (ctx) {
    const data = ctx.request.body;
    //console.log('postUserAuth()----data.name:'+data.name)
    const userInfo = await user.getUserByName(data.name);
    if(userInfo !=null){
       if(!bcryptjs.compareSync(data.password,userInfo.password)){
          ctx.response.body = {
            success: false,
            info: '密码错误！' // 如果用户不存在返回用户不存在
          }
       }else{
           console.log('---user_name:'+JSON.stringify(userInfo)+'---userInfo'+userInfo.id)
            ctx.session = {
                user: userInfo.user_name,
                id:userInfo.id
            }
            ctx.body = {
                success: true,
                info: '登陆成功！' // 返回token
            }
       }
    }else{
        ctx.response.body = {
          success: false,
          info: '用户不存在！' // 如果用户不存在返回用户不存在
        }
    }

}
const loginOut = async function (ctx){
    const id = ctx.params.id;
    const result = await user.getUserById(id);
    if(result){
        ctx.session ='';
        console.log('登出成功');
        ctx.body = {
            success: true,
            info: '登出成功' // 返回token
        }
    }
}
module.exports = {
    getUserInfo,
    postUserAuth,
    getUserInfoByName,
    loginOut
}