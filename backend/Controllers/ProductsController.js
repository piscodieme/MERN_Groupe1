const Products = require("../Models/ProductsModel") ;


exports.getAllProducts = (req, res, next) => {
    Products.find({}, (error, products) => {
        if(error)
            next(error);
        req.data = products ;
        next();
        //console.log(req.data);    
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

exports.getProductsByCategory = (req, res, next) => {
    Products.find({_Category: req.params.category}, (error, products) => {
        if(error)
            next(error);
        req.data = products ;
        next();    
    }) ;
} ;

exports.postProduct = (req, res, next) => {
    let product = new Products ;
    let pro = req.body ;
    product._Title = pro.name ;
    product._Category = pro.category ;
    product._Princing._Price = pro.price ;
    product._Princing._Promo = pro.promo ;
    product._Descriptions._Short = pro.short ;
    product._Descriptions._Long = pro.long ;
    product._Quantity = pro._quantity ;
    product._Images._Frame = req.files.frame[0].destination + req.files.frame[0].filename ;
    for (let j = 0; j < req.files.images.length; j++) {
        product._Images._Others[j] = req.files.images[j].destination + req.files.images[j].filename ;    
    }
    product.save((err) =>{
        if(err){
            res.send(err);
        }
        res.send({message: 'product created'});
    });
} ;

exports.updateProduct = (req, res) => {
    Products.findOne({_id: req.params.id}, (error, product) => {
        if(error){
            return res.send(error);
        }
        let pro = req.body ;
        product._Title = pro._Title ;
        product._Category= pro._Category
        product._Princing._Price = pro._Princing._Price ;
        product._Princing._Promo = pro._Princing._Promo ;
        product._Descriptions._Short = pro._Descriptions._Short ;
        product._Descriptions._Long = pro._Descriptions._Long ;
        product._Quantity = pro._Quantity ;
        product._Images._Frame = pro._Images._Frame ;
        product._Images._Others = pro._Images._Others;
        product.save((err) =>{
            if(err){
                return res.send(err);
            }
            return res.send({message: 'product updated'});
        });
    }) ;
} ; 

exports.deleteProductById = (req, res, next) => {
    Products.deleteOne({_id: req.params.id}, (error) => {
        if(error){
            res.send(err);
        }
        res.redirect(200, '/allProducts') ;
    }) ;
} ;