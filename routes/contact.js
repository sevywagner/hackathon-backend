const router = require('express').Router();
const contactController = require('./../controllers/contact');

router.post('/contact', contactController.postContact);

module.exports = router;