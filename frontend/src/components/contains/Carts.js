import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Carts extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {

    }

    render() {
        return (
            <>
                <div id="offcanvas-cart" /* class="offcanvas offcanvas-cart" */>
        <div class="inner">
            <div class="head">
                <span class="title">Cart</span>
                <button class="offcanvas-close">×</button>
            </div>

            <div class="body customScroll">
                <ul class="minicart-product-list">
                    <li>
                        <a href="single-product.html" class="image"><img src="assets/images/product-image/1.jpg" alt="Cart product Image"></img></a>
                        <div class="content">
                            <a href="single-product.html" class="title">Hand-Made Garlic Mortar</a>
                            <span class="quantity-price">1 x <span class="amount">$18.86</span></span>
                            <a href="#" class="remove">×</a>
                        </div>
                    </li>
                    <li>
                        <a href="single-product.html" class="image"><img src="assets/images/product-image/2.jpg" alt="Cart product Image"></img></a>
                        <div class="content">
                            <a href="single-product.html" class="title">Handmade Ceramic Pottery</a>
                            <span class="quantity-price">1 x <span class="amount">$43.28</span></span>
                            <a href="#" class="remove">×</a>
                        </div>
                    </li>
                    <li>
                        <a href="single-product.html" class="image"><img src="assets/images/product-image/3.jpg" alt="Cart product Image"></img></a>
                        <div class="content">
                            <a href="single-product.html" class="title">Hand Painted Bowls</a>
                            <span class="quantity-price">1 x <span class="amount">$37.34</span></span>
                            <a href="#" class="remove">×</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="foot">
                <div class="buttons mt-30px">
                    <a href="cart.html" class="btn btn-dark btn-hover-primary mb-30px">view cart</a>
                    <a href="checkout.html" class="btn btn-outline-dark current-btn">checkout</a>
                </div>
            </div>
        </div>
    </div>
            </>
        )
    }
}

Carts.propTypes = {

}

export default Carts