import React, { Component } from 'react'

class BestSellerPage extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <>
                <div class="banner-area pt-100px pb-100px">
                    <div class="container">
                        <div class="row">
                            <div class="single-col col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-30px">
                                <div class="single-banner">
                                    <img src="assets/images/banner/1.jpg" alt=""/>
                                    <div class="banner-content">
                                        <span class="category">Meilleures ventes</span>
                                        <span class="title">Vase incassable <br/>
                                            & Poot</span>
                                        <button><a href="shop-left-sidebar.html" class="shop-link btn btn-primary text-uppercase">Shop Now</a></button>
                                    </div>
                                </div>
                            </div>
                            <div class="single-col col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-30px">
                                <div class="single-banner">
                                    <img src="assets/images/banner/2.jpg" alt=""/>
                                    <div class="banner-content">
                                        <span class="category">Meilleures ventes</span>
                                        <span class="title">Matoss pour niaw <br/>
                                            & Offer 2021</span>
                                        <button><a href="shop-left-sidebar.html" class="shop-link btn btn-primary text-uppercase">Shop
                                            Now</a></button>
                                    </div>
                                </div>
                            </div>
                            <div class="single-col col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-30px">
                                <div class="single-banner">
                                    <img src="assets/images/banner/3.jpg" alt=""/>
                                    <div class="banner-content">
                                        <span class="category">Meilleures ventes</span>
                                        <span class="title">Pen Holder<br/>
                                            & Poot</span>
                                            <button><a href="shop-left-sidebar.html" class="shop-link btn btn-primary text-uppercase">Shop
                                            Now</a></button>
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

BestSellerPage.propTypes = {

}

export default BestSellerPage