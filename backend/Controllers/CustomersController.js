const Customer = require("../Models/CustomersModel") ;
const Product = require("../Models/ProductsModel") ;
const bcrypt = require("bcrypt") ;
const jwt = require('jsonwebtoken');




exports.signup = (req, res) => {
  console.log("register test+++++++++++++++++",req.body);
  bcrypt.hash(req.body._Password, 10)
    .then(hash => {
      const customer = new Customer({
        _Login: req.body._Login,
        _FirstName: req.body._FirstName,
        _LastName: req.body._LastName,
        _Adresse: req.body._Adresse,
        _NumeroTel: req.body._NumeroTel,
        _Password: hash,
        _Panier: []
      });
      customer.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
    
};

exports.login = (req, res) => {
  Customer.findOne({ _Login: req.body._Login })
    .then(customer => {
      if (!customer) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body._Password, customer._Password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: customer._id,
            firstname: customer._FirstName,
            lastname: customer._LastName,
            adresse: customer._Adresse,
            numero: customer._NumeroTel,
            panier: customer._Panier,
            token: jwt.sign(
              { userId: customer._id },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' }
            )
          });
          console.log(res.token);
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};


exports.getCustomer = (req, res, next) => {
    Customer.findOne({_id: req.params.id}, (error, customer) => {
        if(error)
            next(error);
        req.data = customer ;
        next();    
    }) ;
} ;

exports.getCustomerCart = (req, res, next) => {
    let client;
    Customer.findOne({_id: req.params.id}, (error, customer) => {
        if(error)
            return res.send(error); 
        return res.send(customer._Panier) ;       
    }) ;
} ;


exports.updateCustomerCart = (req, res, next) => {
    Customer.findOne({_id: req.params.id}, (error, customer) => {
        if(error) 
            return res.send(error);
        customer._Panier.push(req.body);
        customer.save((err) =>{
            if(err){
                return res.send(err);
            }
            return res.send({ message: "Produit ajoute au panier"}) ;
        });   
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