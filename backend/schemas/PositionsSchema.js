const { Double } = require("mongodb");
const {Schema} = require("mongoose");

const PositionsSchema = new Schema({
   product: String,
    name: String,
    qty: Number,
    avg: Double,
    price: Double,
    net: String,
    day: String,
    isLoss: Boolean,
});

module.exports = {PositionsSchema};