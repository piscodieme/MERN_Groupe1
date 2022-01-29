import React, { Component } from 'react';
//import BGI-slide from '../../../public/assets/images/slider-image/slider-bg-1.jpg'
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel'

class IntroSlide extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {

    }

    render() {
        return (
            <>
           {/*  <div class="section ">
                <div class="hero-slider swiper-container slider-nav-style-1 slider-dot-style-1">
               
                    <div class="swiper-wrapper">
                      
                        <div class="hero-slide-item slider-height swiper-slide d-flex bg-color1 bgi-slide">
                            <div class="container align-self-center">
                                <div class="row">
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 align-self-center sm-center-view">
                                        <div class="hero-slide-content slider-animated-1">
                                            <h2 class="title-1">Best Handmade <br class="d-sm-none"/> Goods</h2>
                                            <span class="price">
                                                <span class="old"> <del>$25.00</del></span>
                                            <span class="new">- $18.00</span>
                                            </span>
                                            <a href="shop-left-sidebar.html" class="btn btn-primary m-auto text-uppercase">View
                                                Collection</a>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center position-relative">
                                        <div class="show-case">
                                            <div class="hero-slide-image">
                                                <img src="assets/images/slider-image/slider-1.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div class="hero-slide-item slider-height swiper-slide d-flex bg-color1 bgi-slide">
                            <div class="container align-self-center">
                                <div class="row">
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 align-self-center sm-center-view">
                                        <div class="hero-slide-content slider-animated-1">
                                            <h2 class="title-1">Best Handmade <br class="d-sm-none"/> Goods</h2>
                                            <span class="price">
                                                <span class="old"> <del>$25.00</del></span>
                                            <span class="new">- $18.00</span>
                                            </span>
                                            <a href="shop-left-sidebar.html" class="btn btn-primary m-auto text-uppercase">View
                                                Collection</a>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center position-relative">
                                        <div class="show-case">
                                            <div class="hero-slide-image">
                                                <img src="assets/images/slider-image/slider-2.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    <div class="swiper-pagination swiper-pagination-white"></div>
                 
                    <div class="swiper-buttons">
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                </div>
            </div> */}
            <div class="bgi-slide bg-color1">
            <Carousel>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="assets/images/product-image/3.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="assets/images/product-image/2.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  interval={500}>
                    <img
                    className="d-block w-100"
                    src="assets/images/product-image/5.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
            </>
        )
    }
}

IntroSlide.propTypes = {

}

export default IntroSlide