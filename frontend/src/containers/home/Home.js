import React, { Component } from 'react';
import IntroSlide from '../../components/slide/IntroSlide';
import Banner from '../../components/contains/Banner';
import PaymentMode from '../../components/contains/PaymentMode';
import Categories from '../../components/contains/Categories';
import Testimonial from '../../components/contains/Testimonial';
import BestSellerPage from '../../components/contains/BestSellerPage';
import PropTypes from 'prop-types'

class Home extends Component {

    render() {
        return (
            <>
                <section>
                    <IntroSlide/>
                </section>
                <BestSellerPage/>
                <Categories/>
                <Banner/>
                <PaymentMode/>
                <Testimonial/>
                <br/>
                
            </>
        )
    }
}

Home.propTypes = {

}

export default Home