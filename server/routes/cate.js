const cate = require('../controllers/cate');
const router = require('koa-router')();
router.get('/getCate',cate.getCateInfo);//获取列表信息
router.get('/deleteCate',cate.deleteCate);//删除列表
router.post('/updateCate',cate.updateCate);//更新列表
router.post('/addCate',cate.addCate);//添加列表
module.exports = router;