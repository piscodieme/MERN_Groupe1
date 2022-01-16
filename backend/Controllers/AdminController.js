const Category = require("../Models/CategoryModel") ;

exports.displayHome = (req, res) => {
    res.render("adminHome") ;
} ;

exports.allCategory = (req, res) => {
    Category.find({}, (error, categories) => {
        if(error)
            res.send(error);
        res.render("allCategory", {cat: categories}) ;   
        // res.send(categories);
    }) ;
    
} ;

exports.addCategory = (req, res) => {
    res.render("addCategory") ;
} ;

exports.updateCategory = (req, res) => {
    Category.findOne({_id: req.params.id}, (error, category) => {
        if(error){
            return res.send(error);
        }
        return res.render("updateCategory") ;
    }) ;
} ;

exports.allProducts = (req, res) => {
    res.render("allProducts") ;
} ;

exports.addProduct = (req, res) => {
    res.render("addProduct") ;
} ;