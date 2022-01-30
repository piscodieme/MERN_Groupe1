import React, {useEffect} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {cartService} from '../../service/cartService'
let token =''

function AddToCartButton (props) {

    console.log(props.productNumber);
    let Navigate = useNavigate();
    let location = useLocation();
    console.log(location.pathname);
    useEffect(() => {
        token = sessionStorage.getItem("token");
    });
    const AddToCart = () =>{
        console.log("tokenn ===>>  ",token);
        if(token){
            cartService.AddToCart();
            Navigate(location.pathname)
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
