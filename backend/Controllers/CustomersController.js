const Customer = require("../Models/CustomersModel") ;


exports.getCustomer = (req, res, next) => {
    Customer.findOne({_id: req.params.id}, (error, customer) => {
        if(error)
            next(error);
        req.data = customer ;
        next();    
    }) ;
} ;



exports.postCustomer = (req, res, next) => {
    let customer = new Customer ;
    let c = req.body ;
    customer._id = c._id ;
    customer._Password = c._Password ;
    customer._FirstName = c._FirstName ;
    customer._LastName = c._LastName ;
    customer._NumeroTel = c.NumeroTel ;
    customer._Adresse._Pays = c._Adresse._Pays ;
    customer._Adresse._Region = c._Adresse._Region ;
    customer._Adresse._Ville = c._Adresse._Ville ;
    customer._Adresse._Quartier = c._Adresse._Quartier ;
    customer.save((err) =>{
        if(err){
            return res.send(err);
        }
        return res.send({message: 'customer created'});
    });
    next();
} ;

exports.updateCustomer = (req, res) => {
    Customer.findOne({_id: req.params.id}, async (error, customer) => {
        if(error){
            res.send(error);
        }
        let c = req.body ;
        customer._Password = c._Password ;
        customer._FirstName = c._FirstName ;
        customer._LastName = c._LastName ;
        customer._NumeroTel = c.NumeroTel ;
        customer._Adresse._Pays = c._Adresse._Pays ;
        customer._Adresse._Region = c._Adresse._Region ;
        customer._Adresse._Ville = c._Adresse._Ville ;
        customer._Adresse._Quartier = c._Adresse._Quartier ;
        try{
             await customer.save();
             return res.send(customer);
        }
        catch(err) {
            console.log(err) ;
        }

    }) ;
} ;

exports.deleteCustomer = (req, res, next) => {
    Customer.remove({_id: req.params.id}, (error) => {
        if(error){
            res.send(error);
        }
        res.send({message: 'cart deleted'});
    }) ;
    next();
} ;