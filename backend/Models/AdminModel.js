const mongoose = require('mongoose') ;
//const uniqueValidator = require('mongoose-unique-validator') ;

const t_AdminSchema = mongoose.Schema({
    _Login: { type: String, required: true, unique: true},
    _Password: { type: String, required: true},
    _FirstName: { type: String, required: true},
    _LastName: { type: String, required: true},
});

//t_AdminSchema.plugin(uniqueValidator) ;

module.exports = mongoose.model("Admin", t_AdminSchema ) ;