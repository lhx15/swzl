const user = require('../models/user');
const bcrypt = require('bcryptjs');
const {SALT_WORK_FACTOR} = require('../config/config');

/**
 * 
 * @param id:number 
 */
const getMyUserInfo =async function (ctx){
    const id = ctx.session.id;;
    if(id == null){
        ctx.body = {
            success: false,
            info:'未登录!'
        }
    }else{
        const {user_name,tel,wechat,power} = await user.getUserById(id);
        ctx.body = {
            success: true,
            data:{
                id,
                name:user_name,
                tel,
                wechat,
                power
            }
        }
    }
    
}
/**
 * 获取用户信息
 * @param id:number
 * @return {object}={success:bool,data:{user_name,tel,wechat}}
 */
const getUserInfo = async function (ctx){
    const id = ctx.params.id;
    const data = id && await user.getUserById(id);
    // console.log('111'+data);

    if(data != null){
        ctx.body = {
            success: true,
            data:{
                name:data.user_name,
                tel:data.tel,
                wechat:data.tel
            }
        }
    }else{
        ctx.body = {
            success:false,
            info:'未知错误！'
        }
    }
    
}

/**
 * 用户注册
 * @param {object}={name,password,tel,wechat}
 * @return {object}={success:bool,info:string}
 */
const registerAuth = async function (ctx) {
    const {name, password:dataPassword, tel, wechat} = ctx.request.body;
    // console.log(tel);
    const isEmpty = await user.getUserByName(name);
    if(isEmpty ==null && name && dataPassword){
        const password = bcrypt.hashSync(dataPassword,SALT_WORK_FACTOR);

        const userInfo = await user.registerUser({
            name,
            password,
            tel,
            wechat
        })

        if(userInfo!=null){
            ctx.session = {
                user: userInfo.user_name,
                id:userInfo.id
            }
            ctx.response.body = {
                success: true,
                info: '创建成功!' // 如果用户不存在返回用户不存在
            }
        }else{
            ctx.body = {
                success: true,
                info: '注册失败,用户名或密码格式不正确！' // 返回token
            }
       }
    }else if(isEmpty !=null){
        ctx.response.body = {
          success: false,
          info: '用户名已存在！' // 如果用户不存在返回用户不存在
        }
    }else{
        ctx.response.body = {
            success: false,
            info: '参数错误.' // 如果用户不存在返回用户不存在
          }
    }
}

/**
 * 用户登陆
 * @param {object}={name,password}
 * @return {object}={success:bool,info:string}
 */
const postUserAuth = async function (ctx) {
    const data = ctx.request.body;
    console.log('postUserAuth()----data.name:'+data.name)
    const userInfo = await user.getUserByName(data.name);
   
    if(userInfo !=null){
        
       if(!bcrypt.compareSync(data.password,userInfo.password)){
          ctx.response.body = {
            success: false,
            info: '密码错误！' // 如果用户不存在返回用户不存在
          };
          
       }else{
        //    console.log('---user_name:'+JSON.stringify(userInfo)+'---userInfo'+userInfo.id)
            ctx.session = {
                user: userInfo.user_name,
                id:userInfo.id,
                power:userInfo.power
            }// 返回token
            ctx.body = {
                success: true,
                info: '登陆成功！',
                data: {
                    name:userInfo.user_name,
                    tel:userInfo.tel,
                    wechat:userInfo.wechat,
                    power:userInfo.power
                }
            }
       }
    }else{
        ctx.response.body = {
          success: false,
          info: '用户不存在！' // 如果用户不存在返回用户不存在
        }
    }

}

/**
 * 用户登出
 * @return {object}={success:bool,info:string}
 */
const loginOut = async function (ctx){
    const id = ctx.session.id;
    const result = id && await user.getUserById(id);
    if(result){
        ctx.session ='';
        ctx.body = {
            success: true,
            info: '登出成功' // 返回token
        }
    }else{
        ctx.body = {
            success: false,
            info: '非法请求！'
        }
    }
}

/**
 * 修改密码
 * @param {object}={password,newPassword}
 * @return {object}={success:bool,info:string}
 */
const postChangePassword = async function (ctx){
    const data = ctx.request.body;
    const id = ctx.session.id;
    if(id == null){
        ctx.response.body = {
            success: false,
            info: '未登录' // 如果用户不存在返回用户不存在
        }
    }else if(data.password == data.newPassword){
        ctx.response.body = {
            success: false,
            info: '修改的密码不能和原来密码一致!' // 如果用户不存在返回用户不存在
        }
    }else{
        const {password} = await user.getUserById(id);
        if(!bcrypt.compareSync(data.password,password)){
            ctx.response.body = {
                success: false,
                info: '密码错误！' // 如果用户不存在返回用户不存在
            }
        }else{
            const password = bcrypt.hashSync(data.newPassword,SALT_WORK_FACTOR);

            const userInfo = await user.changgePassword({
                password,
                id
            })
            if(userInfo==null){
                ctx.response.body = {
                    success: false,
                    info: '未知错误'
                }
            }else{
                ctx.response.body = {
                    success: true,
                    info: '修改成功！' // 如果用户不存在返回用户不存在
                }
            }
        }
    }
    

    
}

module.exports = {
    getUserInfo,
    postUserAuth,
    loginOut,
    registerAuth,
    postChangePassword,
    getMyUserInfo
}