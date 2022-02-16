import Api from "./Api";
import { useNavigate } from "react-router-dom";

export const cartService = {
    getAllProductsCart,
    deleteOneProductCart,
    deleteAllProductsCart,
    AddToCart
}

/* ADD TO CART */

function AddToCart (productNumber, userId){
    console.log("debut service cart");
    const token = sessionStorage.getItem("token");
    console.log("service token ==>>  ",token);
    if(token){
        Api.get('/cart/'+userId+'/'+productNumber)
            .then(res =>
               /*  res.data */
                console.log(res.data)
            )
            .catch(error => {
                console.log("error add to cart",error)
            })
            //console.log("user id   ",userId," ====product Number====",productNumber);
    }

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