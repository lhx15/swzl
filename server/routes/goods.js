const goods = require('../controllers/goods');
const router = require('koa-router')();
router.post('/getGoods',goods.postGoods);//获取列表信息
router.post('/addGoods',goods.addGoods);

router.get('/deleteGoods',goods.apiDeleteGoods);//删除
router.post('/updateGoods',goods.apiUpdateGoods);//更新

module.exports = router;