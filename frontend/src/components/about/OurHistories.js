import React, { Component } from 'react'
import PropTypes from 'prop-types'

class OurHistories extends Component {

    render() {
        return (
            <>
            {/*  Service Area Start */}

            <div class="service-area pt-100px">
                <div class="container">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col-md-12 col-lg-5">
                            <div class="service-left">
                                <img src="assets/images/about-image/srevice-left-img.png" alt="" class="service-left-image"/>
                                <img src="assets/images/about-image/srevice-left-shape.png" alt="" class="service-left-image-2"/>
                                <div class="promo-video">
                                    <a href="https://youtu.be/7rmQIzbgpoA" class="venobox overlay-box" data-vbtype="video"><span
                                            class="fa fa-play"><i class="ripple"></i></span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-7">
                            <div class="service-right-content">
                                <h2 class="title">Our Stories</h2>
                                <p class="para-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo templ
                                    incididunt ut labore et dolore magna aliqua.</p>
                                <p class="para-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitat ullamco labori nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    repreh in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                <div class="mision-vision">
                                    <div class="mision">
                                        <span class="heading">Our Mission</span>
                                        <p class="mision-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elitkill sed
                                            do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                            quislkl .</p>
                                    </div>
                                    <div class="vision">
                                        <span class="heading">Our Mission</span>
                                        <p class="vision-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elitkill sed
                                            do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                            quislkl .</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Service Area End */}
            </>
        )
    }
}

OurHistories.propTypes = {

}

export default OurHistories