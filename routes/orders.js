const orderController = require('./../controllers/orders');
const router = require('express').Router();

router.post('/orders', orderController.postOrder);

module.exports = router;