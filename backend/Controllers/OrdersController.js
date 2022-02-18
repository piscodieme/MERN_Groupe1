const Orders = require("../Models/OrdersModel") ;

exports.postOrders = (req, res, next) => {
        let order = new Orders ;
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
        order.save((err) =>{
            if(err){
                return res.send(err);
            }
            return res.send({message: "Commande passe avec succes"}) ;
        });   
} ;


