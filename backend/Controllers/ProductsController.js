const Products = require("../Models/ProductsModel") ;
const mongoose = require("mongoose");


exports.getAllProducts = (req, res, next) => {
    Products.find({}, (error, products) => {
        if(error)
            next(error);
        req.data = products ;
        next();    
    }) ;
} ;