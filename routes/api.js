const router = require('express').Router();
const controller = require('../controllers/userController');

router
    .get('/getTodos', controller.listData)
    .post('/add',  controller.create)
    .delete('/delete/:id',  controller.delete)

module.exports = router;