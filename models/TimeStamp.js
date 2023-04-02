const { getDb } = require('./../util/database')

class TimeStamp {
    constructor(date, time) {
        this.date = date;
        this.time = time;
    }

    save() {
        const db = getDb();
        return db.collection('TimeStamps').insertOne(this);
    }

    static fetchTimeStamps() {
        const db = getDb();
        return db.collection('TimeStamps').find().toArray();
    }
}

module.exports = TimeStamp;