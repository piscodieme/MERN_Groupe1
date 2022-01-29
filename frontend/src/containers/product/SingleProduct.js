import React, { Component } from 'react'
import PropTypes from 'prop-types';
import SingleProductPage from '../../components/product/SingleProduct';
import {useNavigate, useParams } from 'react-router-dom';

function SingleProduct () {
    let navigate = useNavigate();
    let {productNumber} = useParams();
    console.log("product number ++ ",productNumber);
   
        return (
            <>
                <SingleProductPage
                    productNumber={productNumber}
                />
            </>
        )
    }

SingleProduct.propTypes = {

}

export default SingleProduct