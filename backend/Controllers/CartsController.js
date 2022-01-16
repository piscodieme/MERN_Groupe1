const Cart = require("../Models/CartsModel") ;


exports.getCart = (req, res, next) => {
    Cart.findOne({_id: req.params.id}, (error, cart) => {
        if(error)
            next(error);
        req.data = cart ;
        next();    
    }) ;
} ;



exports.postCart = (req, res, next) => {
    let cart = new Cart ;
    let c = req.body ;
    cart._id = c._id ;
    cart._Status = c._Status ;
    cart._Quantity = c._Quantity ;
    cart._Total = c._Total ;
    for (let i = 0; i < c._Products.length; i++) {
        cart._Products[i] = c._Products[i] ;    
    }
    cart.save((err) =>{
        if(err){
            res.send(err);
        }
        res.send({message: 'cart created'});
    });
    next();
} ;

exports.updateCart = (req, res) => {
    Cart.findOne({_id: req.params.id}, async (error, cart) => {
        if(error){
            res.send(error);
        }
        let c = req.body ;
        cart._id = c._id ;
        cart._Status = c._Status ;
        cart._Quantity = c._Quantity ;
        cart._Total = c._Total ;
        cart._Products = c._Products;
        console.log(cart);
        try{
             await cart.save();
             return res.send(cart);
        }
        catch(err) {
            console.log(err) ;
        }

    }) ;
} ;

exports.deleteCart = (req, res, next) => {
    Cart.remove({_id: req.params.id}, (error) => {
        if(error){
            res.send(error);
        }
        res.send({message: 'cart deleted'});
    }) ;
    next();
} ;