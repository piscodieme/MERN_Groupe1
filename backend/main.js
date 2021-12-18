const port = 1337 ;
const express = require("express") ;
const app = express();
const productsController = require("./Controllers/ProductsController");
const mongoose = require("mongoose");
const cors = require("cors");


app.use(express.json());
app.use(cors()) ;


mongoose.connect("mongodb://localhost:27017/shop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) ;

const db = mongoose.connection ;

db.once("open", () => {
    console.log("Successfully connected to database");
}) ;

app.get("/", (req, res) => {
    res.send("Hello, universe !") ;
});


app.get("/products", productsController.getAllProducts, (req, res, next) => {
    res.status(200).json(req.data) ;
});



app.listen(port, () => {
    console.log(`Express.js server started at: http://localhost:${port}`) ;
});    