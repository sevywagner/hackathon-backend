exports.putOrder = (req, res, next) => {
    const name = req.body.name;

    console.log(name);
    res.status(200).json({
        message: 'Success'
    });
}