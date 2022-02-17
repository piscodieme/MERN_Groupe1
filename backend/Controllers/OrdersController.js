const Orders = require("../Models/OrdersModel") ;

exports.postOrders = (req, res, next) => {
    Orders.find({_id: req.params.id}, (error, order) => {
        if(error)
            res.send(error);
        order._FirstName = req.body.firstname;
        order._LastName = req.body.lastname;
        order._Numero = req.body.numero;
        order._Email = req.body.email;
        order._DeliveryAdress = req.body.adresse ;
        order._Status = "En cours" ;
        order._TotalAmount = 0 ;
        req.body.products.forEach(product => {
            order._TotalAmount += product._Princing._Price ;
        });
        order._Products = req.body.products ;
        //console.log(req.data);
        res.send({message: "Commande passe avec succes"}) ;    
    }) ;
} ;


