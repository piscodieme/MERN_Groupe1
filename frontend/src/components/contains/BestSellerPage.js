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
                                            & Pot</span>
                                    </div>
                                </div>
                            </div>
                            <div class="single-col col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-30px">
                                <div class="single-banner">
                                    <img src="assets/images/banner/2.jpg" alt=""/>
                                    <div class="banner-content">
                                        <span class="category">Meilleures ventes</span>
                                        <span class="title">Materiels pour coudre <br/>
                                            & pelot de fils</span>
                                    </div>
                                </div>
                            </div>
                            <div class="single-col col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-30px">
                                <div class="single-banner">
                                    <img src="assets/images/banner/3.jpg" alt=""/>
                                    <div class="banner-content">
                                        <span class="category">Meilleures ventes</span>
                                        <span class="title">Vase noir blanc<br/>
                                            </span>
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