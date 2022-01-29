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
            <div class="bgi-slide bg-color1">
            <Carousel>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="assets/images/slider-image/Slide 1.png"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="assets/images/slider-image/Slide 2.png"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item  interval={500}>
                    <img
                    className="d-block w-100"
                    src="assets/images/slider-image/Slide 3.png"
                    alt="Third slide"
                    />
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