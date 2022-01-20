const Category = require("../Models/CategoryModel") ;
const Products = require("../Models/ProductsModel") ;
const Admin = require("../Models/AdminModel") ;
const bcrypt = require("bcrypt") ;
const jwt = require('jsonwebtoken');



exports.signup = (req, res) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const admin = new Admin({
        _Login: req.body.login,
        _Password: hash,
        _FirstName: req.body.firstname,
        _LastName: req.body.lastname,
      });
      admin.save()
        .then(() => res.status(201).json({ message: 'Administrateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  Admin.findOne({ _Login: req.body.login })
    .then(admin => {
      if (!admin) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, admin._Password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          
          req.body.login = admin._id ;
          req.body.password = jwt.sign(
              { userId: admin._id },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' }
            );
            next() ;
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.displayHome = (req, res) => {
    res.render("adminHome") ;
} ;

exports.displayLogin = (req, res) => {
    res.render("login", { layout: false }) ;
} ;

exports.allAdmin = (req, res) => {
    Admin.find({}, (error, admin) => {
        if(error)
            res.send(error);
        res.render("allAdmin", {ad: admin}) ;   
    }) ;
    
} ;

exports.addAdmin = (req, res) => {
    res.render("addAdmin") ;
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
        return res.render("updateCategory", {cat: category}) ;
    }) ;
} ;

exports.allProducts = (req, res) => {
    Products.find({}, (error, products) => {
        if(error)
            res.send(error);
        res.render("allProducts", {pro: products}) ;
        // res.send(products);   
    }) ;
} ;

exports.addProduct = (req, res) => {
    Category.find({}, (error, categories) => {
        if(error)
            res.send(error);
        res.render("addProduct", {cat: categories}) ;   
        // res.send(categories);
    }) ;
} ;