const mongoose = require("mongoose") ;

const t_CategorySchema = mongoose.Schema({
    _Name: String,
    _Image: String,
});

module.exports = mongoose.model("Category", t_CategorySchema ) ;