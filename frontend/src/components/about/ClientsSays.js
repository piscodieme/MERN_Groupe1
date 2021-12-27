import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ClientsSays extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <>
                <div class="testimonial-area pt-100px">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="section-title text-center">
                                    <h2 class="title line-height-1">What Client Says</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore
                                        et dolore magna aliqua. </p>
                                </div>
                            </div>
                        </div>
                        {/*  Slider Start */}
                        <div class="testimonial-wrapper swiper-container">
                            <div class="swiper-wrapper">
                                {/*  Slider Single Item */}
                                <div class="swiper-slide">
                                    <div class="testi-inner">
                                        <div class="author-img">
                                            <img src="assets/images/testimonial-image/1.png" alt=""/>
                                        </div>
                                        <div class="testi-content">
                                            <p>Lorem ipsum dolor sit ametju consectadipisicing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            </p>
                                        </div>
                                        <div class="testi-author text-center">
                                            <div class="author-name">
                                                <h4 class="name">Britney Cooper</h4>
                                                <span class="title">Client-HRO</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  Slider Single Item */}
                            </div>
                            {/*  Add Arrows */}
                            <div class="swiper-buttons">
                                <div class="swiper-button-next"></div>
                                <div class="swiper-button-prev"></div>
                            </div>
                        </div>
                        {/*  Slider Start */}
                    </div>
                </div>
            </>
        )
    }
}

ClientsSays.propTypes = {

}

export default ClientsSays