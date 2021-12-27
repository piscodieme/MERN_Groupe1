import React, { Component } from 'react'
import PropTypes from 'prop-types';
import SingleProductPage from '../../components/product/SingleProduct';

class SingleProduct extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <>
                <SingleProductPage/>
            </>
        )
    }
}

SingleProduct.propTypes = {

}

export default SingleProduct