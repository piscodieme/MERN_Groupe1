const mongoose = require("mongoose") ;

const t_OrderSchema = mongoose.Schema({
    _id: String,
    _FirstName: String,
    _LastName: String,
    _Numero: String,
    _Email: String,
    _DeliveryAdress: String,
    _PaymentStatus: String,
    _Status: String,
    _Products: []
});

module.exports = mongoose.model("Orders", t_OrderSchema ) ;



