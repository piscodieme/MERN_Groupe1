const Products = require("../Models/ProductsModel") ;


exports.getAllProducts = (req, res, next) => {
    Products.find({}, (error, products) => {
        if(error)
            next(error);
        req.data = products ;
        next();    
    }) ;
} ;

exports.getProductById = (req, res, next) => {
    Products.findOne({_id: req.params.id}, (error, product) => {
        if(error)
            next(error);
        req.data = product ;
        next();    
    }) ;
} ;

exports.postProduct = (req, res, next) => {
    let product = new Products ;
    let pro = req.body ;
    product._Title = pro._Title ;
    for (let i = 0; i < pro._Category.length; i++) {
        product._Category[i] = pro._Category[i] ;    
    }
    product._Princing._Price = pro._Princing._Price ;
    product._Princing._Promo = pro._Princing._Promo ;
    product._Descriptions._Short = pro._Descriptions._Short ;
    product._Descriptions._Long = pro._Descriptions._Long ;
    product._Quantity = pro._Quantity ;
    product._Images._Frame = pro._Images._Frame ;
    for (let j = 0; j < pro._Images._Others.length; j++) {
        product._Images._Others[j] = pro._Images._Others[j] ;    
    }
    product._Comments._LoginUser = pro._Comments._LoginUser ;
    product._Comments._Comment = pro._Comments._Comment ;
    product._Mark = pro._Mark ;
    product.save((err) =>{
        if(err){
            res.send(err);
        }
        res.send({message: 'product created'});
    });
    next();
} ;

exports.deleteProductById = (req, res, next) => {
    Products.remove({_id: req.params.id}, (error) => {
        if(error){
            res.send(err);
        }
        res.send({message: 'product deleted'});
    }) ;
    next();
} ;