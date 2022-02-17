import React, { Component } from 'react'
import ProductsBanner from './ProductsBanner'
import ProductsList from './ProductsList'

class AllProductPage extends Component {
    constructor(props) {
        super(props)

    }

    
    render() {
        const {
            dataProduct,
        }=this.props;
        return (
            <>
                <div class="shop-category-area pt-100px pb-100px">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 order-lg-last col-md-12 order-md-first">
                                <ProductsBanner/>
                                <ProductsList
                                    dataProduct = {dataProduct}
                                />
                            </div>
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