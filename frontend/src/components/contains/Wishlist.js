import React, { Component } from 'react'


class Wishlist extends Component {
   /*  constructor(props) {
        super(props)

    } */



    render() {
        return (
            <>
            <div id="offcanvas-wishlist" /* class="offcanvas offcanvas-wishlist" */>
                <div class="inner">
            <div class="head">
                <span class="title">Wishlist</span>
                <button class="offcanvas-close">×</button>
            </div>
            <div class="body customScroll">
                <ul class="minicart-product-list">
                    <li>
                        <a href="single-product.html" class="image"><img src="assets/images/product-image/1.jpg" alt="Cart product"></img></a>
                        <div class="content">
                            <a href="single-product.html" class="title">Hand-Made Garlic Mortar</a>
                            <span class="quantity-price">1 x <span class="amount">$21.86</span></span>
                            <a href="my-account.html" class="remove">×</a>
                        </div>
                    </li>
                    <li>
                        <a href="single-product.html" class="image"><img src="assets/images/product-image/2.jpg" alt="Cart product "></img></a>
                        <div class="content">
                            <a href="single-product.html" class="title">Handmade Ceramic Pottery</a>
                            <span class="quantity-price">1 x <span class="amount">$13.28</span></span>
                            <a href="my-account.html" class="remove">×</a>
                        </div>
                    </li>
                    <li>
                        <a href="single-product.html" class="image"><img src="assets/images/product-image/3.jpg" alt="Cart product "></img></a>
                        <div class="content">
                            <a href="single-product.html" class="title">Hand Painted Bowls</a>
                            <span class="quantity-price">1 x <span class="amount">$17.34</span></span>
                            <a href="my-account.html" class="remove">×</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="foot">
                <div class="buttons">
                    <a href="wishlist.html" class="btn btn-dark btn-hover-primary mt-30px">view wishlist</a>
                </div>
            </div>
        </div>
    </div>
    </>
        )
    }
}

export default Wishlist