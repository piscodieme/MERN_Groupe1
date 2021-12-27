import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ProductsLeftSideBar extends Component {
    constructor(props) {
        super(props)

    }

   

    render() {
        return (
            <>
                <div class="col-lg-3 order-lg-first col-md-12 order-md-last">
                                <div class="shop-sidebar-wrap">
                                    {/*  Sidebar single item */}
                                    <div class="sidebar-widget">
                                        <h4 class="sidebar-title">Categories</h4>
                                        <div class="sidebar-widget-category">
                                            <ul>
                                                <li><a href="/" class="selected m-0"><i class="fa fa-angle-right"></i> All
                                                        <span>(65)</span> </a></li>
                                                <li><a href="/" class=""><i class="fa fa-angle-right"></i> Computer
                                                        <span>(12)</span> </a></li>
                                                <li><a href="/" class=""><i class="fa fa-angle-right"></i> Covid-19
                                                        <span>(22)</span> </a></li>
                                                <li><a href="/" class=""><i class="fa fa-angle-right"></i> Electronics
                                                        <span>(19)</span> </a></li>
                                                <li><a href="/" class=""><i class="fa fa-angle-right"></i> Frame Sunglasses
                                                        <span>(17)</span> </a></li>
                                                <li><a href="/" class=""><i class="fa fa-angle-right"></i> Furniture
                                                        <span>(7)</span> </a></li>
                                                <li><a href="/" class=""><i class="fa fa-angle-right"></i> Genuine Leather
                                                        <span>(9)</span> </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*  Sidebar single item */}
                                    <div class="sidebar-widget">
                                        <h4 class="sidebar-title">Color</h4>
                                        <div class="sidebar-widget-color">
                                            <ul>
                                                <li><a href="/" class="selected m-0"><i class="fa fa-angle-right"></i> All
                                                        <span>(65)</span> </a></li>
                                                <li><a href="/" class=""><i class="fa fa-angle-right"></i> Gold <span>(14)</span>
                                                    </a></li>
                                                <li><a href="/" class=""><i class="fa fa-angle-right"></i> Golden <span>(21)</span>
                                                    </a></li>
                                                <li><a href="/" class=""><i class="fa fa-angle-right"></i> White <span>(16)</span>
                                                    </a></li>
                                                <li><a href="/" class=""><i class="fa fa-angle-right"></i> Black <span>(12)</span>
                                                    </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*  Sidebar single item */}
                                    <div class="sidebar-widget">
                                        <h4 class="sidebar-title">Size</h4>
                                        <div class="sidebar-widget-size">
                                            <ul>
                                                <li><a href="/" class="selected m-0"><i class="fa fa-angle-right"></i> All
                                                        <span>(6)</span> </a></li>
                                                <li><a href="/" class=""><i class="fa fa-angle-right"></i> S <span>(12)</span> </a>
                                                </li>
                                                <li><a href="/" class=""><i class="fa fa-angle-right"></i> M <span>(21)</span> </a>
                                                </li>
                                                <li><a href="/" class=""><i class="fa fa-angle-right"></i> L <span>(16)</span> </a>
                                                </li>
                                                <li><a href="/" class=""><i class="fa fa-angle-right"></i> XL <span>(22)</span> </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*  Sidebar single item */}
                                    {/*  Sidebar single item */}
                                    <div class="sidebar-widget mt-8">
                                        <h4 class="sidebar-title">Price Filter</h4>
                                        <div class="price-filter">
                                            <div class="price-slider-amount">
                                                <input type="text" id="amount" class="p-0 h-auto lh-1" name="price"
                                                    placeholder="Add Your Price" />
                                            </div>
                                            <div id="slider-range"></div>
                                        </div>
                                    </div>
                                    {/*  Sidebar single item */}
                                    <div class="sidebar-widget-image ">
                                        <a href="/" class="single-banner">
                                            <img src="assets/images/banner/11.jpg" alt=""/>
                                        </a>
                                    </div>
                                    {/*  Sidebar single item */}
                                    <div class="sidebar-widget tag m-0">
                                        <h4 class="sidebar-title">Tags</h4>
                                        <div class="sidebar-widget-tag">
                                            <ul>
                                                <li><a href="/">Fashion</a></li>
                                                <li><a href="/">Organic</a></li>
                                                <li><a href="/">Old Fashion</a></li>
                                                <li><a href="/">Men</a></li>
                                                <li><a href="/">Fashion</a></li>
                                                <li><a href="/">Dress</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*  Sidebar single item */}
                                </div>
                            </div>
            </>
        )
    }
}

ProductsLeftSideBar.propTypes = {

}

export default ProductsLeftSideBar