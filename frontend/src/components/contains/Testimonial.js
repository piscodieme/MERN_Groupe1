import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Testimonial extends Component {
    constructor(props) {
        super(props)

    }
    componentDidMount() {

    }

    render() {
        return (
            <>
            <div class="banner-area-2">
                <div class="container">
                    <div class="row m-0">
                        <div class="col-md-6 p-0">
                            <div class="single-banner nth-child-1">
                                <img src="assets/images/banner/4.jpg" alt=""></img>
                                <div class="banner-content nth-child-1">
                                    <span class="category">Best Seller</span>
                                    <span class="title">Handmade Pot <br/>
                                        & Pen Holder</span>
                                    <a href="shop-left-sidebar.html" class="shop-link btn btn-primary text-uppercase">Shop
                                        Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 p-0 ">
                            <div class="single-banner nth-child-2 mb-lm-30px mt-lm-30px">
                                <img src="assets/images/banner/5.jpg" alt=""></img>
                                <div class="banner-content nth-child-2">
                                    <span class="category">Best Seller</span>
                                    <span class="title">Wool Silk Pod <br/>
                                        -20% Off</span>
                                    <a href="shop-left-sidebar.html" class="shop-link btn btn-primary text-uppercase">Shop
                                        Now</a>
                                </div>
                            </div>
                            <div class="single-banner nth-child-3">
                                <img src="assets/images/banner/6.jpg" alt=""></img>
                                <div class="banner-content nth-child-3">
                                    <span class="category">Best Seller</span>
                                    <span class="title">Handmade Plate <br/>
                                        -40 Off</span>
                                    <a href="shop-left-sidebar.html" class="shop-link btn btn-primary text-uppercase">Shop
                                        Now</a>
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

Testimonial.propTypes = {

}

export default Testimonial