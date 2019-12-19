var config = {
    database: 'swzl', // 使用哪个数据库
    username: 'root', // 用户名
    password: '123456', // 口令
    host: 'localhost', // 主机名
    port: 3306 // 端口号，MySQL默认3306
};
const SALT_WORK_FACTOR = 10;//加密强度
module.exports = {
    config,
    SALT_WORK_FACTOR
};
