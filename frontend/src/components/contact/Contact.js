import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Contact extends Component {
   
    render() {
        return (
            <>
                 {/*  Contact Area Start */}
                <div class="contact-area pt-100px pb-100px">
                    <div class="container">
                        <div class="contact-wrapper">
                            <div class="row">
                                <div class="col-lg-5">
                                    <div class="contact-info">
                                        <span class="sub-title">Prise de contact</span>
                                        <h4 class="heading">Visitez nos boutiques à Saint-Louis</h4>
                                        <div class="single-contact">
                                            <div class="icon-box">
                                                <i class="pe-7s-call"></i>
                                            </div>
                                            <div class="info-box">
                                                <h5 class="title">Telephone:</h5>
                                                <p><a href="tel:0123456789">+221 77 123 45 67</a></p>
                                            </div>
                                        </div>
                                        <div class="single-contact">
                                            <div class="icon-box">
                                                <i class="pe-7s-mail"></i>
                                            </div>
                                            <div class="info-box">
                                                <h5 class="title">Email:</h5>
                                                <p><a href="mailto:demo@example.com">benito@ugb.sn</a></p>
                                            </div>
                                        </div>
                                        <div class="single-contact">
                                            <div class="icon-box">
                                                <i class="pe-7s-map-marker"></i>
                                            </div>
                                            <div class="info-box">
                                                <h5 class="title">Adress:</h5>
                                                <p>Saint-Louis Sanar UGB</p>
                                            </div>
                                        </div>
                                        <ul class="social">
                                            <li class="m-0">
                                                <a href="#"><i class="fa fa-facebook"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="fa fa-twitter"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="fa fa-pinterest"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="fa fa-dribbble"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-7">
                                    <div class="contact-form">
                                        <div class="contact-title mb-30">
                                            <h2 class="title" data-aos="fade-up" data-aos-delay="200">Laissez un message</h2>
                                            <p>Remplir le formulaire pour nous informer de vos impression sur la plateforme</p>
                                        </div>
                                        <form class="contact-form-style" id="contact-form"
                                            action="assets/php/mail.php" method="post">
                                            <div class="row">
                                                <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                                                    <input name="name" placeholder="Nom complet*" type="text" />
                                                </div>
                                                <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                                                    <input name="email" placeholder="Email*" type="email" />
                                                </div>
                                                <div class="col-lg-12" data-aos="fade-up" data-aos-delay="200">
                                                    <input name="subject" placeholder="Sujet*" type="text" />
                                                </div>
                                                <div class="col-lg-12" data-aos="fade-up" data-aos-delay="200">
                                                    <textarea name="message" placeholder="Votre Message*"></textarea>
                                                    <button class="btn btn-primary mt-4" data-aos="fade-up" data-aos-delay="200"
                                                        type="submit">Envoyer</button>
                                                </div>
                                            </div>
                                        </form>
                                        <p class="form-messege"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  Contact Area End */}
            </>
        )
    }
}

Contact.propTypes = {

}

export default Contact