const port = 1337 ;
const express = require("express") ;
const app = express();
const productsController = require("./Controllers/ProductsController");
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

app.post("/products", productsController.postProduct, (req, res, next) => {
    console.log("Post Successful");
});

app.get("/products", productsController.getAllProducts, (req, res, next) => {
    res.status(200).json(req.data) ;
});

app.get("/products/:id", productsController.getProductById, (req, res, next) => {
    res.status(200).json(req.data) ;
});

app.delete("/products/:id", productsController.deleteProductById, (req, res, next) => {
    console.log("products deleted");
});





app.listen(port, () => {
    console.log(`Express.js server started at: http://localhost:${port}`) ;
});    