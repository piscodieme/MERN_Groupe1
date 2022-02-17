import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {useNavigate, useParams } from 'react-router-dom';
import {productService} from '../../service/productService';
import {cartService} from '../../service/cartService';
import AddToCartButton from '../utilities/AddToCartButon';
//import {withRouter} from 'react-router-dom'

class SingleProduct extends Component {
   
       constructor(props){
           super(props)
           this.state = {
               dataProducts : [],
           }
       } 
       async componentDidMount(){
            await productService.getOneProduct(this.props.productNumber)
                .then(res => {
                    const data = res;
                    this.setState({dataProducts : data});
                })
                .catch(error => {
                    console.log("errorr",error);
                })
       }
    AddToCart=()=>{
        const product = this.state.dataProducts;
        const userId = sessionStorage.getItem("userId");
        cartService.AddToCart(product,userId); 
    }

    AfficheTitle(items){
        return(
            <h2>
                {items._Title}
               {/*  {items._Category[0]} */}
            </h2>
        )
    }

    AfficheOthers(items){
        const data1 = {...items};
       
        const data2 = {...data1._Others};
       
        const data = Object.values(data2);
       
        return(
            <div>
                {data.map((item,index)=>{ 
                    <div key={index} >
                    <img class="img-responsive m-auto" src={item}
                        alt="testttttttt"/>
                    </div>
                })
                }
            </div>  
        )
    }

    AffichePrices (items) {
        const data = {...items};
        console.log(data._Promo);
        return(
            <div class="pricing-meta">
              
                <ul class="d-flex">
                    <li class="new-price"> {data._Promo}</li>
                    <li class="old-price"><del>{data._Price}</del></li>
                </ul>
            
            </div>
        )
    }

    AfficheImage (items){
        const data = {...items}
        
        return (
            <div>
                
                <img 
                    class="img-responsive m-auto"
                    src={data._Frame}
                    alt="Image Produit"
               />
              
            </div>
        )
    }

    AfficheDesc (items){
        const data = {...items}
        console.log(data._Long)
        return(
            <div>
                {data._Long}
            </div>
        )
    }
        render(){
            const {
                productNumber
            }=this.props;
            const products = this.state.dataProducts;

            console.log("data produit  ====",products);
        return (
            <>
            <div class="product-details-area pt-100px pb-100px">
                <div class="container">
                
                    <div class="row">
                        <div class="col-lg-6 col-sm-12 col-xs-12 mb-lm-30px mb-md-30px mb-sm-30px">
                            {/*  Swiper */}
                            <div class="swiper-container zoom-top">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide zoom-image-hover">
                                       {this.AfficheImage(products._Images)}
                                    </div>
                                   
                                </div>
                            </div>
                            <div class="swiper-container mt-20px zoom-thumbs ">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                    {this.AfficheOthers(products._Images)}
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-12 col-xs-12" data-aos="fade-up" data-aos-delay="200">
                            <div class="product-details-content quickview-content ml-25px">
                                {this.AfficheTitle(products)}
                                {this.AffichePrices(products._Princing)}
                                <div class="pro-details-rating-wrap">
                                    <div class="rating-product">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                    <span class="read-review"><a class="reviews" href="/">( 2 Review )</a></span>
                                </div>
                                <div class="stock mt-30px">
                                    <span class="avallabillty">Availability: <span class="in-stock"><i
                                                class="fa fa-check"></i>In Stock</span></span>
                                </div>
                                <p class="mt-30px mb-0">{this.AfficheDesc(products._Descriptions)}</p>
                                <div class="pro-details-quality">
                                    <div class="cart-plus-minus">
                                        <input class="cart-plus-minus-box" type="text" name="qtybutton" value="1" />
                                    </div>
                                    <div class="pro-details-cart">
                                        <button class="add-cart" onClick={this.AddToCart}> Add To
                                            Cart
                                        </button>
                                        
                                    </div>
                                    <div class="pro-details-cart">
                                        <button class="add-cart buy-button"> Buy It Now</button>
                                    </div>
                                    <div class="pro-details-compare-wishlist pro-details-wishlist ">
                                        <a href="wishlist.html"><i class="pe-7s-like"></i></a>
                                    </div>
                                </div>
                                <div class="pro-details-categories-info pro-details-same-style d-flex">
                                    <span>Categories: </span>
                                    <ul class="d-flex">
                                        <li>
                                            <a href="/">Handmade, </a>
                                        </li>
                                        <li>
                                            <a href="/">Furniture, </a>
                                        </li>
                                        <li>
                                            <a href="/">Decore</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="pro-details-social-info pro-details-same-style d-flex">
                                    <span>Share: </span>
                                    <ul class="d-flex">
                                        <li>
                                            <a href="/"><i class="fa fa-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="/"><i class="fa fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="/"><i class="fa fa-google"></i></a>
                                        </li>
                                        <li>
                                            <a href="/"><i class="fa fa-youtube"></i></a>
                                        </li>
                                        <li>
                                            <a href="/"><i class="fa fa-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="payment-img">
                                    <a href="/"><img src="assets/images//icons/payment.png" alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
            </>
        )
    }
}

export default SingleProduct