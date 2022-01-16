const port = 1337 ;
const express = require("express") ;
const app = express();
const productsController = require("./Controllers/ProductsController");
const categoryController = require("./Controllers/CategoryController");
const cartsController = require("./Controllers/CartsController");
const customersController = require("./Controllers/CustomersController");
const adminController = require("./Controllers/AdminController");
const mongoose = require("mongoose");
const cors = require("cors");
const layouts = require("express-ejs-layouts") ;
const path = require('path');
const multer  = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './public/image/');
  },
  filename: (req, file, callback) => {
    const name = file.originalname ;
    callback(null, name);
  }
});
const upload =  multer({storage: storage})
let bodyParser = require('body-parser');


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.json());
app.use(cors()) ;
app.use(layouts);
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css'))) ;
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js'))) ;
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist'))) ;


app.use(express.static("public"));

app.set("view engine", "ejs") ;


mongoose.connect('mongodb://localhost:27017/shop');

const db = mongoose.connection ;

db.once("open", () =>{
    console.log("Connected") ;
})

app.get("/", adminController.displayHome) ;

app.get("/adminHome", adminController.displayHome) ;
app.get("/allCategory", adminController.allCategory) ;
app.get("/addingCategory", adminController.addCategory) ;
app.get("/updatingCategory", adminController.updateCategory) ;
app.get("/allProducts", adminController.allProducts) ;
app.get("/addProduct", adminController.addProduct) ;

//Products Routes

//Poster un produit
app.post("/products", productsController.postProduct) ;

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
app.put("/products/:id", productsController.updateProduct);

//Supprimer un produit
app.delete("/products/:id", productsController.deleteProductById);


//Categorie Route

//Creer une categorie
app.post("/category", upload.single('frame'), categoryController.postCategory);

//Recuperer toutes les categories
app.get("/category", categoryController.getAllCategory, (req, res, next) => {
    res.status(200).json(req.data) ;
});

//Modifier une categorie
app.put("/category/:id", categoryController.updateCategory);

//Supprimer une categorie
app.get("/deleteCategory/:id", categoryController.deleteCategory);

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