const getDb = require('./../util/database').getDb;

class Order {
    constructor(name, address, bloodAmount, payout) {
        this.name = name;
        this.address = address;
        this.bloodAmount = bloodAmount;
        this.payout = payout;
    }

    save() {
        const db = getDb();
        return db.collection('orders').insertOne(this);
    }

    static fetchOrders() {
        const db = getDb();
        return db.collection('orders').find().toArray();
    }
}

module.exports = Order;