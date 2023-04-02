const { createTransport } = require('nodemailer');

const transport = createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'sevywagner@gmail.com',
        pass: process.env.TRANSPORT_PASS
    }
});

exports.postContact = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    transport.sendMail({
        from: email,
        to: 'sevywagner@gmail.com',
        subject: 'Contact form submission',
        text: message
    });

    res.status(200).json({
        message: 'Message Sent'
    });
}