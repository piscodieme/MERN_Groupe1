import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ProductsBanner extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <div class="sidebar-widget-image">
                    <a href="#" class="single-banner">
                        <img src="assets/images/slider-image/Slide 1.png" alt=""/>
                    </a>
                </div>
            </>
        )
    }
}

ProductsBanner.propTypes = {

}

export default ProductsBanner