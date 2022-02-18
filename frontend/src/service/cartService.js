import Api from "./Api";
import { useNavigate } from "react-router-dom";

export const cartService = {
    getAllProductsCart,
    deleteOneProductCart,
    deleteAllProductsCart,
    AddToCart,
    sendOrder
}

/* ADD TO CART */

function AddToCart (product, userId){
    const token = sessionStorage.getItem("token");
    const userID = JSON.parse(userId);
   
    if(token){
        Api.post('/customercart/'+userID ,product)
            .then(res =>
                console.log(res.data)
            )
            .catch(error => {
                console.log("error add to cart",error)
            })
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

/* send order */

async function sendOrder(dataOrder) {
    return await Api.post('/postOrder/'+dataOrder)
        .then(res =>res.data)
        .catch(error =>{
            console.log(error);
        })
}

/* Delete One Product Cart */
function deleteOneProductCart(){

}

/* Delete All Products Cart */
function deleteAllProductsCart(){
    
}