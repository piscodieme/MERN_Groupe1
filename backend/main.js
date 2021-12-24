const port = 1337 ;
const express = require("express") ;
const app = express();
const productsController = require("./Controllers/ProductsController");
const categoryController = require("./Controllers/CategoryController");
const cartsController = require("./Controllers/CartsController");
const customersController = require("./Controllers/CustomersController");
const mongoose = require("mongoose");
const cors = require("cors");


app.use(express.json());
app.use(cors()) ;


mongoose.connect('mongodb://localhost:27017/shop');

const db = mongoose.connection ;

db.once("open", () =>{
    console.log("Connected") ;
})

app.get("/", (req, res) => {
    res.send("Hello, universe !") ;
});

//Products Routes

//Poster un produit
app.post("/products", productsController.postProduct, (req, res, next) => {
    console.log("Post Successful");
});

//Recuperer tous les produits
app.get("/products", productsController.getAllProducts, (req, res, next) => {
    res.status(200).json(req.data) ;
});

//Recuperer un produit par Id
app.get("/products/:id", productsController.getProductById, (req, res, next) => {
    res.status(200).json(req.data) ;
});

//Recuperer les produits par Categorie
app.get("/products/:category", productsController.getProductsByCategory, (req, res, next) => {
    res.status(200).json(req.data) ;
});

//Modifier un produit
app.put("/products/:id", productsController.updateProduct, (req, res, next) => {
    res.status(200).json(req.data) ;
});

//Supprimer un produit
app.delete("/products/:id", productsController.deleteProductById, (req, res, next) => {
    console.log("products deleted"); 
});


//Categorie Route

//Creer une categorie
app.post("/category", categoryController.postCategory, (req, res, next) => {
    console.log("Post Successful");
});

//Recuperer toutes les categories
app.get("/category", categoryController.getAllCategory, (req, res, next) => {
    res.status(200).json(req.data) ;
});

//Modifier une categorie
app.put("/category/:id", categoryController.updateCategory, (req, res, next) => {
    console.log("category updated"); 
});

//Supprimer une categorie
app.delete("/category/:id", categoryController.deleteCategory, (req, res, next) => {
    console.log("category deleted"); 
});

// Carts Routes

//Ajouter un panier
app.post("/cart/", cartsController.postCart, (req, res, next) => {
    console.log("Post Successful");
});

//Recuperer un panier
app.get("/cart/:id", cartsController.getCart, (req, res, next) => {
    res.status(200).json(req.data) ;
});

//Modifier un panier
app.put("/cart/:id", cartsController.updateCart, (req, res, next) => {
    console.log("cart updated");
});

//Supprimer un panier
app.delete("/cart/:id", cartsController.deleteCart, (req, res, next) => {
    console.log("cart deleted"); 
});


// Customers Routes

//Ajouter un client
app.post("/customer/", customersController.postCustomer, (req, res, next) => {
    console.log("Post Successful");
});

//Recuperer un client
app.get("/customer/:id", customersController.getCustomer, (req, res, next) => {
    res.status(200).json(req.data) ;
});

//Modifier un client
app.put("/customer/:id", customersController.updateCustomer, (req, res, next) => {
    console.log("customer updated");
});

//Supprimer un client
app.delete("/customer/:id", customersController.deleteCustomer, (req, res, next) => {
    console.log("customer deleted"); 
});

app.listen(port, () => {
    console.log(`Express.js server started at: http://localhost:${port}`) ;
});    