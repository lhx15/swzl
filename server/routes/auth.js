const user = require('../controllers/user');
const router = require('koa-router')();
router.get('/myUser',user.getMyUserInfo);//获取自己信息
router.get('/user/:id',user.getUserInfo);//获取用户信息
router.get('/loginOut',user.loginOut);//退出登陆
router.post('/user',user.postUserAuth);//登陆
router.post('/register',user.registerAuth);//注册用户
router.post('/changePass',user.postChangePassword);//修改密码
module.exports = router;