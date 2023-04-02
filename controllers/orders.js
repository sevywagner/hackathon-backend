const { validationResult } = require('express-validator')
const Order = require('../models/Order');
const TimeStamp = require('./../models/TimeStamp');

exports.postOrder = (req, res, next) => {
    const name = req.body.name;
    const address = req.body.address;
    const email = req.body.email;
    const date = req.body.date;
    const time = req.body.time;
    const bloodAmount = req.body.amount;
    const payout = req.body.payout;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const error = new Error(errors.array()[0].msg);
        error.statusCode = 422;
        throw error;
    }

    const order = new Order(name, address, email, date, time, bloodAmount, payout);
    const timeStamp = new TimeStamp(date, time);
    
    order.save().then(() => {
        res.status(201).json({
            message: 'Successfully placed order'
        });
    }).catch((err) => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });

    timeStamp.save().then(() => {
        res.status(201).json({
            message: 'Successfully stamped time'
        });
    }).catch((err) => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
}

exports.getTimeStamps = (req, res, next) => {
    TimeStamp.fetchTimeStamps().then((stamps) => {
        if (!stamps) {
            const error = new Error('Error fetching stamps');
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({
            timeStamps: stamps
        });
    }).catch((err) => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
}