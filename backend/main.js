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
const auth = require('./Middleware/Auth');
var session = require('express-session');
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './../frontend/public/assets/images/');
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
app.use(session({
  secret: 'malako wax',
  resave: true,
  saveUninitialized: false, 
  cookie: { expires: new Date(Date.now() + 3600000) }
})) ;
app.use(express.json());
app.use(cors()) ;
app.use(layouts);
app.use(express.static("public"));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css'))) ;
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js'))) ;
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist'))) ;

app.set("view engine", "ejs") ;


mongoose.connect('mongodb://localhost:27017/shop');

const db = mongoose.connection ;

db.once("open", () =>{
    console.log("Connected") ;
})

app.get("/", auth, adminController.displayHome) ;
app.get("/displayLogin", adminController.displayLogin) ;
app.get("/adminHome", auth, adminController.displayHome) ;
app.get("/allAdmin", auth, adminController.allAdmin) ;
app.get("/addingAdmin", auth, adminController.addAdmin) ;
app.get("/updatingAdmin/:id", auth, adminController.updatingAdmin) ;
app.post("/updateAdmin/:id", auth, upload.none(), adminController.updateAdmin) ;
app.get("/deleteAdmin/:id", adminController.deleteAdmin);
app.get("/allCategory", auth, adminController.allCategory) ;
app.get("/addingCategory", auth, adminController.addCategory) ;
app.get("/updatingCategory/:id", auth, adminController.updateCategory) ;
app.get("/allProducts", auth, adminController.allProducts) ;
app.get("/addProduct", auth, adminController.addProduct) ;
app.get("/updatingProduct/:id", auth, adminController.updatingProduct) ;
app.get("/allOrders", auth, adminController.allOrders) ;
app.post("/signUp", auth, upload.none(), adminController.signup) ;
app.post("/login", upload.none(), adminController.login, (req, res, next) => {
    var newUser = {id: req.body.login, password: req.body.password};
    req.session.user = newUser;
    res.redirect('/adminHome'); 
});
app.get('/logout', (req, res) => {
   req.session.destroy(function(err) {
       console.log('session destroyed') ;
});
   res.redirect('/displayLogin');
});



//Products Routes

//Poster un produit
const cpUpload = upload.fields([{ name: 'frame', maxCount: 1 }, { name: 'images', maxCount: 4 }])
app.post("/products", cpUpload, productsController.postProduct) ;

//Recuperer tous les produits
app.get("/products", productsController.getAllProducts, (req, res, next) => {
    console.log("get in test");
    res.status(200).json(req.data) ;
    console.log("Donnees  ===="+req.data);
});

//Recuperer un produit par Id
app.get("/products/:id", productsController.getProductById, (req, res, next) => {
    res.status(200).json(req.data) ;
   
});

//Recuperer les produits par Categorie
app.get("/productsCategory/:category", productsController.getProductsByCategory, (req, res, next) => {
    res.status(200).json(req.data) ;
});

//Modifier un produit
app.post("/products/:id", cpUpload, productsController.updateProduct);

//Supprimer un produit
app.get("/deleteProduct/:id", productsController.deleteProductById);


//Categorie Route

//Creer une categorie
app.post("/category", upload.single('frame'), categoryController.postCategory);

//Recuperer toutes les categories
app.get("/category", categoryController.getAllCategory, (req, res, next) => {
    res.status(200).json(req.data) ;
    console.log(req.data);
});

//Modifier une categorie
app.post("/category/:id", upload.single('frame'), categoryController.updateCategory);

//Supprimer une categorie
app.get("/deleteCategory/:id", categoryController.deleteCategory);

// Carts Routes

//Ajouter un panier
//ajouter un produit au panier d'un client
app.post("/customercart/:id", upload.none(), customersController.updateCustomerCart, (req, res, next) => {
    console.log("Produit ajouter au panier");
});

//Recuperer le panier d'un client
app.get("/getcustomercart/:id", customersController.getCustomerCart) ;

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
app.post("/customerInscription/", upload.none(), customersController.signup) ;
app.post("/customerConnexion/", upload.none(), customersController.login) ;

//Recuperer un client
app.get("/customer/:id", customersController.getCustomer, (req, res, next) => {
    res.status(200).json(req.data) ;
});

//Supprimer un client
app.delete("/customer/:id", customersController.deleteCustomer, (req, res, next) => {
    console.log("customer deleted"); 
});

app.listen(port, () => {
    console.log(`Express.js server started at: http://localhost:${port}`) ;
});    