const mongoose = require("mongoose") ;

const t_CustomerSchema = mongoose.Schema({
    _id: String,
    _FirstName: String,
    _LastName: String,
    _Password: String, 
    _Adresse: {
        _Pays: String,
        _Region: String,
        _Ville: String,
        _Quartier: String
    },
    _NumeroTel: String
});

module.exports = mongoose.model("Customers", t_CustomerSchema ) ;



