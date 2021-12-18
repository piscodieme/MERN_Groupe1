const mongoose = require("mongoose") ;

const t_ProductsSchema = mongoose.Schema({
    _Title: String,
    _Category: [String],
    _Princing: {
        _Price: Number, _Promo: Number},
    _Descriptions: {_Short: String, _Long: String},
    _Quantity: Number,
    _Images: {_Frame: String, _Others: [String]},
    _Comments: {_LoginUser: String, _Comment: String},
    _Mark: Number
});

module.exports = mongoose.model("Products", t_ProductsSchema ) ;