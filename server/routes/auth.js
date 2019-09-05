const user = require('../controllers/user');
const router = require('koa-router')();
router.get('/user/:id',user.getUserInfo);
router.get('/username/:name',user.getUserInfoByName);
router.get('/user/loginout/:id',user.loginOut)
router.post('/user',user.postUserAuth);
module.exports = router;