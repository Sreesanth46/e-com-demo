const mongoose = require("mongoose");
require('dotenv').config();

async function database() {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL ?? '');
    } catch (error) {
        throw new Error('Database connection failed');
    }
}


module.exports = database;