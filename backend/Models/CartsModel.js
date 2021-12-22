const mongoose = require("mongoose") ;

const t_CartSchema = mongoose.Schema({
    _id: String,
    _Status: String,
    _Quantity: Number,
    _Total: Number,
    _Products: [String]
});

module.exports = mongoose.model("Carts", t_CartSchema ) ;