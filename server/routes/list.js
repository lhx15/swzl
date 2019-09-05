const router= require('koa-router')();
const api = require('../controllers/list')
router.get('/api/todolist/:id',api.getTodoList);
router.post('/api/addlist',api.createList);
router.delete('/api/todolist/:userId/:id',api.removeTodolist);
router.put('/api/todolist/:userId/:id/:status', api.updateList)
module.exports = router;