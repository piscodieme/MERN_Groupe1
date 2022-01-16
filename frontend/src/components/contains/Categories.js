import React, { Component } from 'react'
import PropTypes from 'prop-types'
import{ Tab, TabList, TabPanel, Box, TabContext, Tabs} from 'react-tabs'

class Categories extends Component {
    constructor(props) {
        super(props)

    }
    componentDidMount() {

    }

    handleChange (){
        console.log("test tabs");
    }
    render() {
        const {
            value,
            dataCategories
        }=this.props;
        console.log("data Categories =====",dataCategories);
        return (
            <>
            <div class="product-area">
                <div class="container">
                   
                    {/* Section Title & Tab Start */}
                    <div class="row">
                        {/* Section Title Start */}
                        <div class="col-12">
                            <div class="section-title text-center mb-60px">
                                <h2 class="title">Popular Categories</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                            {/* Tab Start */}
                            <div class="swiper-container slider-nav-style-1 small-nav">
                                <ul class="product-tab-nav nav swiper-wrapper affCategories">
                                    {dataCategories.map((data,index)=>(
                                        <li class="nav-item swiper-slide-active ">
                                            <a class={index==1 ?"nav-link active":"nav-link"} data-bs-toggle="tab"  id="nav-home-tab" role="tab" href="#tab-jewelry"> <img src={data._Image} alt=""></img><span>{data._Name}</span></a>
                                        </li> 
                                    ))}
                                    {/* <li class="nav-item  swiper-slide-active ">
                                        <a class="nav-link active" data-bs-toggle="tab"  id="nav-home-tab" role="tab" href="#tab-jewelry"> <img src="assets/images/icons/jewelry-icon.png" alt=""></img><span>Jewelry</span></a>
                                    </li>

                                    <li class="nav-item swiper-slide-active">
                                        <a class="nav-link" data-bs-toggle="tab" id="nav-2-tab" role="tab" href="#tab-pottery"> <img src="assets/images/icons/pottery-icon.png" alt=""></img><span>Pottery</span></a>
                                    </li>
                                    <li class="nav-item swiper-slide-active">
                                        <a class="nav-link" data-bs-toggle="tab" href="#tab-fabric"> <img src="assets/images/icons/fabric-icon.png" alt=""></img><span>Fabric</span></a>
                                    </li>
                                    <li class="nav-item swiper-slide-active">
                                        <a class="nav-link" data-bs-toggle="tab" href="#tab-paintings"> <img src="assets/images/icons/paintings-icon.png" alt=""></img><span>Paintings</span></a>
                                    </li>
                                    <li class="nav-item swiper-slide-active">
                                        <a class="nav-link" data-bs-toggle="tab" href="#tab-sculptures"> <img src="assets/images/icons/sculptures-icon.png" alt=""></img><span>Sculptures</span></a>
                                    </li>
                                    <li class="nav-item swiper-slide-active">
                                        <a class="nav-link" data-bs-toggle="tab" href="#tab-wooden"> <img src="assets/images/icons/wooden-icon.png" alt=""></img><span>Wooden</span></a>
                                    </li>
                                    <li class="nav-item swiper-slide-active">
                                        <a class="nav-link" data-bs-toggle="tab" href="#tab-pottery"> <img src="assets/images/icons/pottery-icon.png" alt=""></img><span>Pottery</span></a>
                                    </li> */}
                                </ul>
                                {/* Add Arrows */}
                                <div class="swiper-buttons">
                                    <div class="swiper-button-next"></div>
                                    <div class="swiper-button-prev"></div>
                                </div>
                            </div>
                            {/* Tab End */}
                        </div>
                        {/* Section Title End */}

                    </div>
                    {/* Section Title & Tab End */}

                    <div class="row">
                        <div class="col">
                            <div class="tab-content mt-60px">
                                {/* 1st tab start */}
                                <div class="tab-pane fade show active" id="tab-jewelry" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <div class="row">
                                        <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div class="product">
                                                <div class="thumb">
                                                    <a href="single-product.html" class="image">
                                                        <img src="assets/images/product-image/1.jpg" alt="Product" ></img>
                                                        <img class="hover-image" src="assets/images/product-image/1.jpg" alt="Product" ></img>
                                                    </a>
                                                    <span class="badges">
                                                        <span class="new">New</span>
                                                    </span>
                                                    <div class="actions">
                                                        <a href="wishlist.html" class="action wishlist" title="Wishlist"><i
                                                                class="pe-7s-like"></i></a>
                                                        <a href="single-product.html" class="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="pe-7s-look"></i></a>
                                                        <a href="compare.html" class="action compare" title="Compare"><i
                                                                class="pe-7s-refresh-2"></i></a>
                                                    </div>
                                                </div>
                                                <div class="content">
                                                    <span class="ratings">
                                                        <span class="rating-wrap">
                                                            <span class="star" Style="width: 100%"></span>
                                                    </span>
                                                    <span class="rating-num">( 5 Review )</span>
                                                    </span>
                                                    <h5 class="title"><a href="single-product.html">Hand-Made Garlic Mortar
                                                        </a>
                                                    </h5>
                                                    <span class="price">
                                                        <span class="new">$38.50</span>
                                                    </span>
                                                </div>
                                                <button title="Add To Cart" class=" add-to-cart">Add
                                                    To Cart</button>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div class="product">
                                                <div class="thumb">
                                                    <a href="single-product.html" class="image">
                                                        <img src="assets/images/product-image/2.jpg" alt="Product" ></img>
                                                        <img class="hover-image" src="assets/images/product-image/2.jpg" alt="Product" ></img>
                                                    </a>
                                                    <span class="badges">
                                                        <span class="sale">-10%</span>
                                                    <span class="new">New</span>
                                                    </span>
                                                    <div class="actions">
                                                        <a href="wishlist.html" class="action wishlist" title="Wishlist"><i
                                                                class="pe-7s-like"></i></a>
                                                        <a href="single-product.html" class="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="pe-7s-look"></i></a>
                                                        <a href="compare.html" class="action compare" title="Compare"><i
                                                                class="pe-7s-refresh-2"></i></a>
                                                    </div>
                                                </div>
                                                <div class="content">
                                                    <span class="ratings">
                                                        <span class="rating-wrap">
                                                            <span class="star" Style="width: 100%"></span>
                                                    </span>
                                                    <span class="rating-num">( 5 Review )</span>
                                                    </span>
                                                    <h5 class="title"><a href="single-product.html">Handmade Ceramic Pottery
                                                        </a>
                                                    </h5>
                                                    <span class="price">
                                                        <span class="new">$38.50</span>
                                                    <span class="old">$45.50</span>
                                                    </span>
                                                </div>
                                                <button title="Add To Cart" class=" add-to-cart">Add
                                                    To Cart</button>
                                            </div>
                                            {/* Single Prodect */}
                                        </div>
                                        <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div class="product">
                                                <div class="thumb">
                                                    <a href="single-product.html" class="image">
                                                        <img src="assets/images/product-image/3.jpg" alt="Product" ></img>
                                                        <img class="hover-image" src="assets/images/product-image/3.jpg" alt="Product" ></img>
                                                    </a>
                                                    <span class="badges">
                                                        <span class="new">Sale</span>
                                                    </span>
                                                    <div class="actions">
                                                        <a href="wishlist.html" class="action wishlist" title="Wishlist"><i
                                                                class="pe-7s-like"></i></a>
                                                        <a href="single-product.html" class="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="pe-7s-look"></i></a>
                                                        <a href="compare.html" class="action compare" title="Compare"><i
                                                                class="pe-7s-refresh-2"></i></a>
                                                    </div>
                                                </div>
                                                <div class="content">
                                                    <span class="ratings">
                                                        <span class="rating-wrap">
                                                            <span class="star" Style="width: 100%"></span>
                                                    </span>
                                                    <span class="rating-num">( 5 Review )</span>
                                                    </span>
                                                    <h5 class="title"><a href="single-product.html">Hand Painted Bowls
                                                        </a>
                                                    </h5>
                                                    <span class="price">
                                                        <span class="new">$38.50</span>
                                                    </span>
                                                </div>
                                                <button title="Add To Cart" class=" add-to-cart">Add
                                                    To Cart</button>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div class="product">
                                                <div class="thumb">
                                                    <a href="single-product.html" class="image">
                                                        <img src="assets/images/product-image/4.jpg" alt="Product" ></img>
                                                        <img class="hover-image" src="assets/images/product-image/5.jpg" alt="Product" ></img>
                                                    </a>
                                                    <span class="badges">
                                                        <span class="sale">-5%</span>
                                                    </span>
                                                    <div class="actions">
                                                        <a href="wishlist.html" class="action wishlist" title="Wishlist"><i
                                                                class="pe-7s-like"></i></a>
                                                        <a href="single-product.html" class="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="pe-7s-look"></i></a>
                                                        <a href="compare.html" class="action compare" title="Compare"><i
                                                                class="pe-7s-refresh-2"></i></a>
                                                    </div>
                                                </div>
                                                <div class="content">
                                                    <span class="ratings">
                                                        <span class="rating-wrap">
                                                            <span class="star" Style="width: 100%"></span>
                                                    </span>
                                                    <span class="rating-num">( 5 Review )</span>
                                                    </span>
                                                    <h5 class="title"><a href="single-product.html">Antique Wooden Farm Large
                                                        </a>
                                                    </h5>
                                                    <span class="price">
                                                        <span class="new">$38.50</span>
                                                    <span class="old">$40.50</span>
                                                    </span>
                                                </div>
                                                <button title="Add To Cart" class=" add-to-cart">Add
                                                    To Cart</button>
                                            </div>
                                            {/* Single Prodect */}
                                        </div>
                                        <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-md-30px mb-lm-30px">
                                            {/* Single Prodect */}
                                            <div class="product">
                                                <div class="thumb">
                                                    <a href="single-product.html" class="image">
                                                        <img src="assets/images/product-image/6.jpg" alt="Product" ></img>
                                                        <img class="hover-image" src="assets/images/product-image/6.jpg" alt="Product" ></img>
                                                    </a>
                                                    <span class="badges">
                                                    </span>
                                                    <div class="actions">
                                                        <a href="wishlist.html" class="action wishlist" title="Wishlist"><i
                                                                class="pe-7s-like"></i></a>
                                                        <a href="single-product.html" class="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="pe-7s-look"></i></a>
                                                        <a href="compare.html" class="action compare" title="Compare"><i
                                                                class="pe-7s-refresh-2"></i></a>
                                                    </div>
                                                </div>
                                                <div class="content">
                                                    <span class="ratings">
                                                        <span class="rating-wrap">
                                                            <span class="star" Style="width: 100%"></span>
                                                    </span>
                                                    <span class="rating-num">( 5 Review )</span>
                                                    </span>
                                                    <h5 class="title"><a href="single-product.html">Handmade Jute Basket
                                                        </a>
                                                    </h5>
                                                    <span class="price">
                                                        <span class="new">$38.50</span>
                                                    </span>
                                                </div>
                                                <button title="Add To Cart" class=" add-to-cart">Add
                                                    To Cart</button>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6  mb-md-30px mb-lm-30px">
                                            {/* Single Prodect */}
                                            <div class="product">
                                                <div class="thumb">
                                                    <a href="single-product.html" class="image">
                                                        <img src="assets/images/product-image/7.jpg" alt="Product" ></img>
                                                        <img class="hover-image" src="assets/images/product-image/7.jpg" alt="Product" ></img>
                                                    </a>
                                                    <span class="badges">
                                                        <span class="new">New</span>
                                                    </span>
                                                    <div class="actions">
                                                        <a href="wishlist.html" class="action wishlist" title="Wishlist"><i
                                                                class="pe-7s-like"></i></a>
                                                        <a href="single-product.html" class="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="pe-7s-look"></i></a>
                                                        <a href="compare.html" class="action compare" title="Compare"><i
                                                                class="pe-7s-refresh-2"></i></a>
                                                    </div>
                                                </div>
                                                <div class="content">
                                                    <span class="ratings">
                                                        <span class="rating-wrap">
                                                            <span class="star" Style="width: 100%"></span>
                                                    </span>
                                                    <span class="rating-num">( 5 Review )</span>
                                                    </span>
                                                    <h5 class="title"><a href="single-product.html">Knitting yarn & crochet hook
                                                        </a>
                                                    </h5>
                                                    <span class="price">
                                                        <span class="new">$38.50</span>
                                                    </span>
                                                </div>
                                                <button title="Add To Cart" class=" add-to-cart">Add
                                                    To Cart</button>
                                            </div>
                                            {/* Single Prodect */}
                                        </div>
                                        <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-es-30px">
                                            {/* Single Prodect */}
                                            <div class="product">
                                                <div class="thumb">
                                                    <a href="single-product.html" class="image">
                                                        <img src="assets/images/product-image/8.jpg" alt="Product" ></img>
                                                        <img class="hover-image" src="assets/images/product-image/8.jpg" alt="Product" ></img>
                                                    </a>
                                                    <span class="badges">
                                                        <span class="sale">-8%</span>
                                                    <span class="new">New</span>
                                                    </span>
                                                    <div class="actions">
                                                        <a href="wishlist.html" class="action wishlist" title="Wishlist"><i
                                                                class="pe-7s-like"></i></a>
                                                        <a href="single-product.html" class="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="pe-7s-look"></i></a>
                                                        <a href="compare.html" class="action compare" title="Compare"><i
                                                                class="pe-7s-refresh-2"></i></a>
                                                    </div>
                                                </div>
                                                <div class="content">
                                                    <span class="ratings">
                                                        <span class="rating-wrap">
                                                            <span class="star" Style="width: 100%"></span>
                                                    </span>
                                                    <span class="rating-num">( 5 Review )</span>
                                                    </span>
                                                    <h5 class="title"><a href="single-product.html">David Head Portraits
                                                        </a>
                                                    </h5>
                                                    <span class="price">
                                                        <span class="new">$38.50</span>
                                                    <span class="old">$44.50</span>
                                                    </span>
                                                </div>
                                                <button title="Add To Cart" class=" add-to-cart">Add
                                                    To Cart</button>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6">
                                            {/* Single Prodect */}
                                            <div class="product">
                                                <div class="thumb">
                                                    <a href="single-product.html" class="image">
                                                        <img src="assets/images/product-image/9.jpg" alt="Product" ></img>
                                                        <img class="hover-image" src="assets/images/product-image/10.jpg" alt="Product" ></img>
                                                    </a>
                                                    <span class="badges">
                                                        <span class="new">Sale</span>
                                                    </span>
                                                    <div class="actions">
                                                        <a href="wishlist.html" class="action wishlist" title="Wishlist"><i
                                                                class="pe-7s-like"></i></a>
                                                        <a href="single-product.html" class="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="pe-7s-look"></i></a>
                                                        <a href="compare.html" class="action compare" title="Compare"><i
                                                                class="pe-7s-refresh-2"></i></a>
                                                    </div>
                                                </div>
                                                <div class="content">
                                                    <span class="ratings">
                                                        <span class="rating-wrap">
                                                            <span class="star" Style="width: 100%"></span>
                                                    </span>
                                                    <span class="rating-num">( 5 Review )</span>
                                                    </span>
                                                    <h5 class="title"><a href="single-product.html">solid wood cherry paddle
                                                        </a>
                                                    </h5>
                                                    <span class="price">
                                                        <span class="new">$38.50</span>
                                                    </span>
                                                </div>
                                                <button title="Add To Cart" class=" add-to-cart">Add
                                                    To Cart</button>
                                            </div>
                                            {/* Single Prodect */}
                                        </div>
                                    </div>
                                </div>
                                {/* 1st tab end */}
                                {/* 2nd tab start */}
                                <div class="tab-pane fade" role="tabpanel" aria-labelledby="nav-2-tab" id="tab-pottery">
                                    <div class="row">
                                        <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div class="product">
                                                <div class="thumb">
                                                    <a href="single-product.html" class="image">
                                                        <img src="assets/images/product-image/1.jpg" alt="Product" />
                                                        <img class="hover-image" src="assets/images/product-image/1.jpg" alt="Product" />
                                                    </a>
                                                    <span class="badges">
                                                        <span class="new">New</span>
                                                    </span>
                                                    <div class="actions">
                                                        <a href="wishlist.html" class="action wishlist" title="Wishlist"><i
                                                                class="pe-7s-like"></i></a>
                                                        <a href="single-product.html" class="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="pe-7s-look"></i></a>
                                                        <a href="compare.html" class="action compare" title="Compare"><i
                                                                class="pe-7s-refresh-2"></i></a>
                                                    </div>
                                                </div>
                                                <div class="content">
                                                    <span class="ratings">
                                                        <span class="rating-wrap">
                                                            <span class="star" Style="width: 100%"></span>
                                                    </span>
                                                    <span class="rating-num">( 5 Review )</span>
                                                    </span>
                                                    <h5 class="title"><a href="single-product.html">Hand-Made Garlic Mortar
                                                        </a>
                                                    </h5>
                                                    <span class="price">
                                                        <span class="new">$38.50</span>
                                                    </span>
                                                </div>
                                                <button title="Add To Cart" class=" add-to-cart">Add
                                                    To Cart</button>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div class="product">
                                                <div class="thumb">
                                                    <a href="single-product.html" class="image">
                                                        <img src="assets/images/product-image/2.jpg" alt="Product" />
                                                        <img class="hover-image" src="assets/images/product-image/2.jpg" alt="Product" />
                                                    </a>
                                                    <span class="badges">
                                                        <span class="sale">-10%</span>
                                                    <span class="new">New</span>
                                                    </span>
                                                    <div class="actions">
                                                        <a href="wishlist.html" class="action wishlist" title="Wishlist"><i
                                                                class="pe-7s-like"></i></a>
                                                        <a href="single-product.html" class="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="pe-7s-look"></i></a>
                                                        <a href="compare.html" class="action compare" title="Compare"><i
                                                                class="pe-7s-refresh-2"></i></a>
                                                    </div>
                                                </div>
                                                <div class="content">
                                                    <span class="ratings">
                                                        <span class="rating-wrap">
                                                            <span class="star" Style="width: 100%"></span>
                                                    </span>
                                                    <span class="rating-num">( 5 Review )</span>
                                                    </span>
                                                    <h5 class="title"><a href="single-product.html">Handmade Ceramic Pottery
                                                        </a>
                                                    </h5>
                                                    <span class="price">
                                                        <span class="new">$38.50</span>
                                                    <span class="old">$45.50</span>
                                                    </span>
                                                </div>
                                                <button title="Add To Cart" class=" add-to-cart">Add
                                                    To Cart</button>
                                            </div>
                                            {/* Single Prodect */}
                                        </div>
                                        <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div class="product">
                                                <div class="thumb">
                                                    <a href="single-product.html" class="image">
                                                        <img src="assets/images/product-image/3.jpg" alt="Product" />
                                                        <img class="hover-image" src="assets/images/product-image/3.jpg" alt="Product" />
                                                    </a>
                                                    <span class="badges">
                                                        <span class="new">Sale</span>
                                                    </span>
                                                    <div class="actions">
                                                        <a href="wishlist.html" class="action wishlist" title="Wishlist"><i
                                                                class="pe-7s-like"></i></a>
                                                        <a href="single-product.html" class="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="pe-7s-look"></i></a>
                                                        <a href="compare.html" class="action compare" title="Compare"><i
                                                                class="pe-7s-refresh-2"></i></a>
                                                    </div>
                                                </div>
                                                <div class="content">
                                                    <span class="ratings">
                                                        <span class="rating-wrap">
                                                            <span class="star" Style="width: 100%"></span>
                                                    </span>
                                                    <span class="rating-num">( 5 Review )</span>
                                                    </span>
                                                    <h5 class="title"><a href="single-product.html">Hand Painted Bowls
                                                        </a>
                                                    </h5>
                                                    <span class="price">
                                                        <span class="new">$38.50</span>
                                                    </span>
                                                </div>
                                                <button title="Add To Cart" class=" add-to-cart">Add
                                                    To Cart</button>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div class="product">
                                                <div class="thumb">
                                                    <a href="single-product.html" class="image">
                                                        <img src="assets/images/product-image/4.jpg" alt="Product" />
                                                        <img class="hover-image" src="assets/images/product-image/5.jpg" alt="Product" />
                                                    </a>
                                                    <span class="badges">
                                                        <span class="sale">-5%</span>
                                                    </span>
                                                    <div class="actions">
                                                        <a href="wishlist.html" class="action wishlist" title="Wishlist"><i
                                                                class="pe-7s-like"></i></a>
                                                        <a href="single-product.html" class="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="pe-7s-look"></i></a>
                                                        <a href="compare.html" class="action compare" title="Compare"><i
                                                                class="pe-7s-refresh-2"></i></a>
                                                    </div>
                                                </div>
                                                <div class="content">
                                                    <span class="ratings">
                                                        <span class="rating-wrap">
                                                            <span class="star" Style="width: 100%"></span>
                                                    </span>
                                                    <span class="rating-num">( 5 Review )</span>
                                                    </span>
                                                    <h5 class="title"><a href="single-product.html">Antique Wooden Farm Large
                                                        </a>
                                                    </h5>
                                                    <span class="price">
                                                        <span class="new">$38.50</span>
                                                    <span class="old">$40.50</span>
                                                    </span>
                                                </div>
                                                <button title="Add To Cart" class=" add-to-cart">Add
                                                    To Cart</button>
                                            </div>
                                            {/* Single Prodect */}
                                        </div>
                                        <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-md-30px mb-lm-30px">
                                            {/* Single Prodect */}
                                            <div class="product">
                                                <div class="thumb">
                                                    <a href="single-product.html" class="image">
                                                        <img src="assets/images/product-image/6.jpg" alt="Product" />
                                                        <img class="hover-image" src="assets/images/product-image/6.jpg" alt="Product" />
                                                    </a>
                                                    <span class="badges">
                                                    </span>
                                                    <div class="actions">
                                                        <a href="wishlist.html" class="action wishlist" title="Wishlist"><i
                                                                class="pe-7s-like"></i></a>
                                                        <a href="single-product.html" class="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="pe-7s-look"></i></a>
                                                        <a href="compare.html" class="action compare" title="Compare"><i
                                                                class="pe-7s-refresh-2"></i></a>
                                                    </div>
                                                </div>
                                                <div class="content">
                                                    <span class="ratings">
                                                        <span class="rating-wrap">
                                                            <span class="star" Style="width: 100%"></span>
                                                    </span>
                                                    <span class="rating-num">( 5 Review )</span>
                                                    </span>
                                                    <h5 class="title"><a href="single-product.html">Handmade Jute Basket
                                                        </a>
                                                    </h5>
                                                    <span class="price">
                                                        <span class="new">$38.50</span>
                                                    </span>
                                                </div>
                                                <button title="Add To Cart" class=" add-to-cart">Add
                                                    To Cart</button>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6  mb-md-30px mb-lm-30px">
                                            {/* Single Prodect */}
                                            <div class="product">
                                                <div class="thumb">
                                                    <a href="single-product.html" class="image">
                                                        <img src="assets/images/product-image/7.jpg" alt="Product" />
                                                        <img class="hover-image" src="assets/images/product-image/7.jpg" alt="Product" />
                                                    </a>
                                                    <span class="badges">
                                                        <span class="new">New</span>
                                                    </span>
                                                    <div class="actions">
                                                        <a href="wishlist.html" class="action wishlist" title="Wishlist"><i
                                                                class="pe-7s-like"></i></a>
                                                        <a href="single-product.html" class="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="pe-7s-look"></i></a>
                                                        <a href="compare.html" class="action compare" title="Compare"><i
                                                                class="pe-7s-refresh-2"></i></a>
                                                    </div>
                                                </div>
                                                <div class="content">
                                                    <span class="ratings">
                                                        <span class="rating-wrap">
                                                            <span class="star" Style="width: 100%"></span>
                                                    </span>
                                                    <span class="rating-num">( 5 Review )</span>
                                                    </span>
                                                    <h5 class="title"><a href="single-product.html">Knitting yarn & crochet hook
                                                        </a>
                                                    </h5>
                                                    <span class="price">
                                                        <span class="new">$38.50</span>
                                                    </span>
                                                </div>
                                                <button title="Add To Cart" class=" add-to-cart">Add
                                                    To Cart</button>
                                            </div>
                                            {/* Single Prodect */}
                                        </div>
                                        <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-es-30px">
                                            {/* Single Prodect */}
                                            <div class="product">
                                                <div class="thumb">
                                                    <a href="single-product.html" class="image">
                                                        <img src="assets/images/product-image/8.jpg" alt="Product" />
                                                        <img class="hover-image" src="assets/images/product-image/8.jpg" alt="Product" />
                                                    </a>
                                                    <span class="badges">
                                                        <span class="sale">-8%</span>
                                                    <span class="new">New</span>
                                                    </span>
                                                    <div class="actions">
                                                        <a href="wishlist.html" class="action wishlist" title="Wishlist"><i
                                                                class="pe-7s-like"></i></a>
                                                        <a href="single-product.html" class="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="pe-7s-look"></i></a>
                                                        <a href="compare.html" class="action compare" title="Compare"><i
                                                                class="pe-7s-refresh-2"></i></a>
                                                    </div>
                                                </div>
                                                <div class="content">
                                                    <span class="ratings">
                                                        <span class="rating-wrap">
                                                            <span class="star" Style="width: 100%"></span>
                                                    </span>
                                                    <span class="rating-num">( 5 Review )</span>
                                                    </span>
                                                    <h5 class="title"><a href="single-product.html">David Head Portraits
                                                        </a>
                                                    </h5>
                                                    <span class="price">
                                                        <span class="new">$38.50</span>
                                                    <span class="old">$44.50</span>
                                                    </span>
                                                </div>
                                                <button title="Add To Cart" class=" add-to-cart">Add
                                                    To Cart</button>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6">
                                            {/* Single Prodect */}
                                            <div class="product">
                                                <div class="thumb">
                                                    <a href="single-product.html" class="image">
                                                        <img src="assets/images/product-image/9.jpg" alt="Product" />
                                                        <img class="hover-image" src="assets/images/product-image/10.jpg" alt="Product" />
                                                    </a>
                                                    <span class="badges">
                                                        <span class="new">Sale</span>
                                                    </span>
                                                    <div class="actions">
                                                        <a href="wishlist.html" class="action wishlist" title="Wishlist"><i
                                                                class="pe-7s-like"></i></a>
                                                        <a href="single-product.html" class="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="pe-7s-look"></i></a>
                                                        <a href="compare.html" class="action compare" title="Compare"><i
                                                                class="pe-7s-refresh-2"></i></a>
                                                    </div>
                                                </div>
                                                <div class="content">
                                                    <span class="ratings">
                                                        <span class="rating-wrap">
                                                            <span class="star" Style="width: 100%"></span>
                                                    </span>
                                                    <span class="rating-num">( 5 Review )</span>
                                                    </span>
                                                    <h5 class="title"><a href="single-product.html">solid wood cherry paddle
                                                        </a>
                                                    </h5>
                                                    <span class="price">
                                                        <span class="new">$38.50</span>
                                                    </span>
                                                </div>
                                                <button title="Add To Cart" class=" add-to-cart">Add
                                                    To Cart</button>
                                            </div>
                                            {/* Single Prodect */}
                                        </div>
                                    </div>
                                </div>
                                {/* 2nd tab end */}
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

Categories.propTypes = {

}

export default Categories