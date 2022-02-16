import React, { Component, useEffect } from 'react'
import PropTypes from 'prop-types'
import {productService} from '../../service/productService'
import {loginAndRegisterService} from '../../service/loginAndRegisterService'

let i=0;
let token=''

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productsCategory:[],
            errorMessage:''
        }

    }

    componentDidMount() {
       token = sessionStorage.getItem("token");
    }

/* call of disconnect service function  */
    disconnect =()=>{
        loginAndRegisterService.disconnect();
    }

    /* show connect or disconnect in header component */
    connectOrdisconnect = () =>{
        console.log("test tokenn ",token)
        if(token){
            return(
                <div>
                    <li><button class="dropdown-item" onClick={this.disconnect}>disconnect</button></li>
                </div>
            )
        }else{
            return( 
                <div>         
                <li><a class="dropdown-item" href="/login">Sign in</a></li>
                </div>
            )
        }
        
    }

    listSubCategory = (items) =>{
        const i=0;
        return (
            <div>
                {items.map((item)=>(
                    <li><a href={"/category/"+item}>{item}</a></li>
                ))}
            </div>
        )
    }

    /* async getProductsByCategory (category) {
        await productService.getProductsByCategory(category)
        .then(res => {
            const products = res;
            console.log(products);
            this.setState({productsCategory:products})
        })
        .catch(error => {
            console.log("error get Products By Category",error);
            this.setState({errorMessage : "Error Get  Products By Category"})
        })
    } */

    render() {
        const {
            dataCategories,
        }=this.props;

        //console.log("donnees produit par categorie£££££££",this.state.productsCategory);
        return ( 
            
        <header>
        <div class="header-main sticky-nav ">
            <div class="container position-relative">
                <div class="row">
                    <div class="col-auto align-self-center">
                        <div class="header-logo">
                            <a href="/"><img src="assets/images/logo/logo.png" alt="Site Logo" /></a>
                        </div>
                    </div>
                    <div class="col align-self-center d-none d-lg-block">
                        <div class="main-menu">
                            <ul>
                                {/* <li class="dropdown"><a href="index.html">Home <i class="fa fa-angle-down"></i></a>
                                    <ul class="sub-menu">
                                        <li><a href="/">Home 1</a></li>
                                        <li><a href="index-2.html">Home 2</a></li>
                                    </ul>
                                </li> */}
                                <li class="dropdown position-static"><a href="/">Nos Categories <i class="fa fa-angle-down"></i></a>
                                    <ul class="mega-menu d-block">
                                        <li class="d-flex">
                                            {dataCategories.map((data,index)=>(
                                                <ul class="d-block" key={index}>
                                                    <li class="title"><a href={"/category/"+data._Name}>{data._Name}</a></li>
                                                    {this.listSubCategory(data._SubCategory)}                                                                                          
                                                </ul>
                                            ))}
                                           {/*  <ul class="d-flex align-items-center p-0 border-0 flex-column justify-content-center">
                                                <li>
                                                    <a class="p-0" href="shop-left-sidebar.html"><img class="img-responsive w-100" src="assets/images/banner/menu-banner-1.jpg" alt=""></img></a>
                                                </li>
                                            </ul> */}
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="/produits">Nos Produits</a></li>
                                <li><a href="/contact">Contact</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/cart">Mon Panier</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col col-lg-auto align-self-center pl-0">
                        <div class="header-actions">
                            {/* <a href="index.html" class="header-action-btn" data-bs-toggle="modal" data-bs-target="#searchActive">
                                <i class="pe-7s-search"></i>
                            </a> */}
                            <div class="header-bottom-set dropdown">
                                <button class="dropdown-toggle header-action-btn" data-bs-toggle="dropdown"><i
                                        class="pe-7s-users"></i></button>
                                <ul class="dropdown-menu dropdown-menu-right">
                                   {/*  <li><a class="dropdown-item" href="my-account.html">My account</a></li> */}
                                   {this.connectOrdisconnect()}
                                   
                                </ul>
                            </div>
                            {/* <a href="#offcanvas-wishlist" class="header-action-btn offcanvas-toggle">
                                <i class="pe-7s-like"></i>
                            </a> */}
                            <a href="#offcanvas-cart" class="header-action-btn header-action-btn-cart offcanvas-toggle pr-0">
                                <i class="pe-7s-shopbag"></i>
                                <span class="header-action-num">01</span>
                            </a>
                            {/* <a href="#offcanvas-mobile-menu" class="header-action-btn header-action-btn-menu offcanvas-toggle d-lg-none">
                                <i class="pe-7s-menu"></i>
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
        )
    }
}

Header.propTypes = {

}

export default Header