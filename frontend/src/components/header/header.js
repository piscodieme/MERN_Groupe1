import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
    constructor(props) {
        super(props)

    }


    componentDidMount() {

    }

    render() {
        const {
            dataCategories
        }=this.props;
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
                                            <ul class="d-block">
                                                <li class="title"><a href="/">{data._Name}</a></li>
                                                <li><a href="/category">404 Page</a></li>
                                                <li><a href="/category">Privacy Policy</a></li>
                                                <li><a href="/category">Faq Page</a></li>
                                                <li><a href="/category">Coming Soon Page</a></li>
                                            </ul>
                                            ))};
                                            <ul class="d-flex align-items-center p-0 border-0 flex-column justify-content-center">
                                                <li>
                                                    <a class="p-0" href="shop-left-sidebar.html"><img class="img-responsive w-100" src="assets/images/banner/menu-banner-1.jpg" alt=""></img></a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li /* class="dropdown position-static" */><a href="/produits">Nos Produits {/* <i
                                    class="fa fa-angle-down"></i> */}</a>
                                   {/*  <ul class="mega-menu d-block">
                                        <li class="d-flex">
                                            <ul class="d-block">

                                                <li class="title"><a href="index.html">Shop Page</a></li>
                                                <li><a href="shop-3-column.html">Shop 3 Column</a></li>
                                                <li><a href="shop-4-column.html">Shop 4 Column</a></li>
                                                <li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
                                                <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                                <li><a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a>
                                                </li>
                                                <li><a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a>
                                                </li>
                                                <li><a href="cart.html">Cart Page</a></li>
                                                <li><a href="checkout.html">Checkout Page</a></li>
                                            </ul>
                                            <ul class="d-block">
                                                <li class="title"><a href="index.html">product Details Page</a></li>
                                                <li><a href="single-product.html">Product Single</a></li>
                                                <li><a href="single-product-variable.html">Product Variable</a></li>
                                                <li><a href="single-product-affiliate.html">Product Affiliate</a></li>
                                                <li><a href="single-product-group.html">Product Group</a></li>
                                                <li><a href="single-product-tabstyle-2.html">Product Tab 2</a></li>
                                                <li><a href="single-product-tabstyle-3.html">Product Tab 3</a></li>
                                                <li><a href="single-product-slider.html">Product Slider</a></li>
                                                <li><a href="single-product-gallery-left.html">Product Gallery Left</a>
                                                </li>
                                            </ul>
                                            <ul class="d-block">
                                                <li class="title"><a href="index.html">Single Product Page</a></li>
                                                <li><a href="single-product-gallery-right.html">Product Gallery Right</a> </li>
                                                <li><a href="single-product-sticky-left.html">Product Sticky Left</a>
                                                </li>
                                                <li><a href="single-product-sticky-right.html">Product Sticky Right</a>
                                                </li>
                                                <li><a href="compare.html">Compare Page</a></li>
                                                <li><a href="wishlist.html">Wishlist Page</a></li>
                                                <li><a href="my-account.html">Account Page</a></li>
                                                <li><a href="login.html">Login & Register Page</a></li>
                                                <li><a href="empty-cart.html">Empty Cart Page</a></li>
                                            </ul>
                                            <ul class="d-flex align-items-center p-0 border-0 flex-column justify-content-center">
                                                <li>
                                                    <a class="p-0" href="shop-left-sidebar.html"><img class="img-responsive w-100" src="assets/images/banner/menu-banner-2.png" alt=""></img></a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul> */}
                                </li>
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
                                    <li><a class="dropdown-item" href="my-account.html">My account</a></li>
                                    <li><a class="dropdown-item" href="checkout.html">Checkout</a></li>
                                    <li><a class="dropdown-item" href="/login">Sign in</a></li>
                                </ul>
                            </div>
                            <a href="#offcanvas-wishlist" class="header-action-btn offcanvas-toggle">
                                <i class="pe-7s-like"></i>
                            </a>
                            <a href="#offcanvas-cart" class="header-action-btn header-action-btn-cart offcanvas-toggle pr-0">
                                <i class="pe-7s-shopbag"></i>
                                <span class="header-action-num">01</span>
                            </a>
                            <a href="#offcanvas-mobile-menu" class="header-action-btn header-action-btn-menu offcanvas-toggle d-lg-none">
                                <i class="pe-7s-menu"></i>
                            </a>
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