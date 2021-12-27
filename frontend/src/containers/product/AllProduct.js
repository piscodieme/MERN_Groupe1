import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AllProductPage from '../../components/product/AllProductPage';
import BreadCrumb from '../../components/utilities/BreadCrumb';

class AllProduct extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <>
                <BreadCrumb
                    title1 = "Nos Produits"
                    title2 ="Liste des Produits"
                />
                <AllProductPage/>
            </>
        )
    }
}

AllProduct.propTypes = {

}

export default AllProduct