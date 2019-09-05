const Koa = require('koa');
const auth = require('./server/routes/auth');
const list = require('./server/routes/list');
const config = require('./server/config/config');
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
app.use(auth.routes()) // 挂载到koa-router上，同时会让所有的auth的请求路径前面加上'/auth'的请求路径。
app.use(list.routes()) // 所有走/api/打头的请求都需要经过jwt验证。
// 静态文件serve在koa-router的其他规则之上 
app.use(serve(path.resolve('dist'))); // 将webpack打包好的项目目录作为Koa静态文件服务的目录
app.listen(8899,()=>{
    console.log('Koa is listening in 8899');
});
module.exports = app;