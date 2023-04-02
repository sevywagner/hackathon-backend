const orderController = require('./../controllers/orders');
const router = require('express').Router();

router.put('/orders', orderController.putOrder);

module.exports = router;