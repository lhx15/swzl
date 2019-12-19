const Koa = require('koa');
const auth = require('./server/routes/auth');
const list = require('./server/routes/list');
const cate = require('./server/routes/cate');
const goods = require('./server/routes/goods');
const {config} = require('./server/config/config');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const path =require('path')
    , serve = require('koa-static');
const sessionMySqlConfig = {
    user: config.username,
    password: config.password,
    database: config.database,
    host: config.host,
}
app.use(session({
    key:'TODO_USER',
    store:new MysqlStore(sessionMySqlConfig)
}))
app.use(bodyParser());
app.use(async (ctx,next)=>{
    // console.log(ctx.url);
    let arr = ['/user','/register'];//未登录即可访问
    // console.log('111'+arr.includes(ctx.url),'ctx.session'+ctx.session)
    // try{
        if(arr.includes(ctx.url)){
            await next();
        }else if(ctx.url.includes('/api')){
            // console.log('这是要权限的');
            if(ctx.session && ctx.session.power == 1){
                await next()
            }else{
                ctx.body={
                    success:false,
                    info:'没有权限！'
                }
            }
        }else if(ctx.session && ctx.session.id){
            await next();
        }else{
            ctx.body={
                success:false,
                info:'未登录！'
            }
        }
    // }catch(e){
    //     ctx.body = {
    //         success:false,
    //         info:'服务器内部错误！'
    //     }
    // }
    
})
app.use(auth.routes()) // 用户路由
app.use(cate.routes()) // 用户路由
app.use(goods.routes()) // 用户路由

app.use(list.routes()) // 所有走/api/打头的请求都需要经过jwt验证。

// 静态文件serve在koa-router的其他规则之上 
app.use(serve(path.resolve('dist'))); // 将webpack打包好的项目目录作为Koa静态文件服务的目录
app.listen(8899,()=>{
    console.log('Koa is listening in 8899');
});
module.exports = app;