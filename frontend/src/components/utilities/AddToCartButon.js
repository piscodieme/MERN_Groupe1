import React, {useEffect, useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {cartService} from '../../service/cartService'
let token ='';
let userID ='';

function AddToCartButton (props) {

    const [notifMessage, setNotifMessage] = useState("");
    const [notif, setNotif] = useState(false);
    console.log(props.product);
    let Navigate = useNavigate();
    let location = useLocation();
    console.log(location.pathname);
    useEffect(() => {
        token = sessionStorage.getItem("token");
        userID = sessionStorage.getItem("userId");
    });
   
    const AddToCart = () =>{
        console.log(props.product);
        console.log(userID);
        console.log("tokenn ===>>  ",token);
        if(token){
            cartService.AddToCart(props.product,userID);
            setNotifMessage("produit ajouté avec success");
            console.log(notifMessage);
            setNotif(true);
            console.log(notif);
            //Navigate(location.pathname)
        }else{
            Navigate("/login")
        }

    }
  return (
    <>
        <button 
            title="Add To Cart" 
            class=" add-to-cart"
            onClick={AddToCart}
            >
              Add To Cart
        </button>
    </>
  )
}

export default AddToCartButton
