import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Partener extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <>
            <div class="brand-area pt-100px pb-100px">
                <div class="container">
                    <div class="brand-slider swiper-container">
                        <div class="swiper-wrapper align-items-center">
                            <div class="swiper-slide brand-slider-item text-center">
                                <a href="/about"><img class=" img-fluid" src="assets/images/brand-logo/1.png" alt="" /></a>
                            </div>
                            <div class="swiper-slide brand-slider-item text-center">
                                <a href="/about"><img class=" img-fluid" src="assets/images/brand-logo/2.png" alt="" /></a>
                            </div>
                            <div class="swiper-slide brand-slider-item text-center">
                                <a href="/about"><img class=" img-fluid" src="assets/images/brand-logo/3.png" alt="" /></a>
                            </div>
                            <div class="swiper-slide brand-slider-item text-center">
                                <a href="/about"><img class=" img-fluid" src="assets/images/brand-logo/4.png" alt="" /></a>
                            </div>
                            <div class="swiper-slide brand-slider-item text-center">
                                <a href="/about"><img class=" img-fluid" src="assets/images/brand-logo/5.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

Partener.propTypes = {

}

export default Partener