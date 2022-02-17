import Api from "./Api";
import { useNavigate } from "react-router-dom";

export const cartService = {
    getAllProductsCart,
    deleteOneProductCart,
    deleteAllProductsCart,
    AddToCart
}

/* ADD TO CART */

function AddToCart (product, userId){
    //console.log("debut service cart");
    const token = sessionStorage.getItem("token");
    //console.log("service token ==>>  ",token);
    //console.log("user id",JSON.parse(userId));
    const userID = JSON.parse(userId);
   
    if(token){
        Api.post('/customercart/'+userID ,product)
            .then(res =>
               /*  res.data */
                console.log(res.data)
            )
            .catch(error => {
                console.log("error add to cart",error)
            })
            //console.log("user id   ",userId," ====product Number====",productNumber);
    }
    else{
        console.log("connectez vous d'abord");
    }

}

/* Get All products cart service */
async function getAllProductsCart(userId){
    return await Api.get('/getcustomercart/'+userId)
        .then(res => res.data)
        .catch(error => (" ++++++Error Get All product cart service Service+++++++ "+error))

}

/* Delete One Product Cart */
function deleteOneProductCart(){

}

/* Delete All Products Cart */
function deleteAllProductsCart(){
    
}