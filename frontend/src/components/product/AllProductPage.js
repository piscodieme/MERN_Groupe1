import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductsBanner from './ProductsBanner'
import ProductsLeftSideBar from './productsLeftSideBar'
import ProductsList from './ProductsList'

class AllProductPage extends Component {
    constructor(props) {
        super(props)

    }

    
    render() {
        return (
            <>
                <div class="shop-category-area pt-100px pb-100px">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-9 order-lg-last col-md-12 order-md-first">
                                <ProductsBanner/>
                                <ProductsList/>
                            </div>
                            {/*  Sidebar Area Start */}
                                <ProductsLeftSideBar/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

AllProductPage.propTypes = {

}

export default AllProductPage