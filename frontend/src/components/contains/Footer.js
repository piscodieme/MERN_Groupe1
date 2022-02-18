import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Footer extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {

    }

    render() {
        return (
            <>
                <div class="newsletter-area ">
        <div class="container line-shape-bottom">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="newsletter-content mb-lm-30px">
                        <i class="pe-7s-mail-open-file"></i>
                        <div class="newsletter-text">
                            <h3 class="title">Newsletter & Mise a jours</h3>
                            <p>Rester connectei avec le Groupe 1 de MERN</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="news-letter-form">
                        <div id="mc_embed_signup" class="subscribe-form">
                            <form id="mc-embedded-subscribe-form" class="validate" novalidate="" target="_blank" name="mc-embedded-subscribe-form" method="post" action="#">
                                <div id="mc_embed_signup_scroll" class="mc-form">
                                    <input class="email" type="email" required="" placeholder="Entrer votre mail ici......." name="EMAIL" value=""/>
                                    <div class="mc-news d-none" aria-hidden="true">
                                        <input type="text" value="" tabindex="-1" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"/>
                                    </div>
                                    <div class="clear">
                                        <button id="mc-embedded-subscribe" class="button" type="submit" name="subscribe" value=""> Envoyer</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Footer Area Start */}
    <div class="footer-area">
        <div class="footer-container">
            
            <div class="footer-bottom">
                <div class="container">
                    <div class="line-shape-top">
                        <div class="row flex-md-row-reverse align-items-center">
                            <div class="col-md-6 text-center text-md-end">
                                <div class="payment-mth">
                                    <a href="index.html"><img class="img img-fluid" src="assets/images/icons/payment.png" alt="payment-imag"/></a>
                                </div>
                            </div>
                            <div class="col-md-6 text-center text-md-start">
                                <p class="copy-text"> © 2022 <strong>Groupe 1.</strong> Pour le projet de MERN avec
                                    <a class="company-name" href="#">
                                        <strong> Dr TOURE</strong>
                                    </a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Footer Area End */}

            </>
        )
    }
}

Footer.propTypes = {

}

export default Footer