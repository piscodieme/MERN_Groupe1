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
   
    const closeButon = ()=>{
        setNotif(false);
    }

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
        {notif &&
            <div class="card border-success bg-light"/*  style="max-width: 18rem;" */>
            <div class="card-body">
                <span class="text-success">{notifMessage}</span>
                <button type="button" class="close text-success" aria-label="Close" onClick={closeButon}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
        }
        <button 
            title="Add To Cart" 
            class="add-to-cart addcart"
            onClick={AddToCart}
            >
                <span>Ajouter au Panier</span>
             
        </button>
    </>
  )
}

export default AddToCartButton
