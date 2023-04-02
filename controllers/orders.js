const Order = require('./../models/order');

exports.postOrder = (req, res, next) => {
    const name = req.body.name;
    const address = req.body.address;
    const email = req.body.email;
    const date = req.body.date;
    const time = req.body.time;
    const bloodAmount = req.body.amount;
    const payout = req.body.payout;

    const order = new Order(name, address, email, date, time, bloodAmount, payout);
    order.save().then(() => {
        res.status(201).json({
            message: 'Successfully placed order'
        });
    }).catch((err) => {
        console.log(err);
    });
}