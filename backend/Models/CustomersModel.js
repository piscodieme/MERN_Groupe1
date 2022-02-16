const mongoose = require("mongoose") ;
//const uniqueValidator = require('mongoose-unique-validator') ;

const t_CustomerSchema = mongoose.Schema({
    _Login: { type: String, required: true, unique: true},
    _Password: { type: String, required: true},
    _FirstName: { type: String, required: true},
    _LastName: { type: String, required: true},
    _NumeroTel: { type: String, required: true},
    _Adresse: { type: String, required: true},
    _Panier: {type: Array}
});

//t_CustomerSchema.plugin(uniqueValidator) ;

module.exports = mongoose.model("Customers", t_CustomerSchema ) ;



