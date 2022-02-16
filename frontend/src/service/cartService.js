import Api from "./Api";
import { useNavigate } from "react-router-dom";

export const cartService = {
    createCart,
    getAllProductsCart,
    deleteOneProductCart,
    deleteAllProductsCart,
    AddToCart
}

/* ADD TO CART */

function AddToCart (){
    console.log("debut service cart");
   // const Navigate = useNavigate();
    const token = sessionStorage.getItem("token");
    console.log("service token ==>>  ",token);
    if(token){
        console.log("okk il est connecter");
       // Navigate("/");
    }else{
        console.log("NOT OKK il n'est pas Connecter");
    }

}

/* create Cart service */
function createCart(){
    
}

/* Get All products cart service */
function getAllProductsCart(){

}

/* Delete One Product Cart */
function deleteOneProductCart(){

}

/* Delete All Products Cart */
function deleteAllProductsCart(){
    
}