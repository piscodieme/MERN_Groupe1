import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductsBanner from '../product/ProductsBanner';
import ProductsCategoryList from './productsCategoryList';

class SingleCategoryPage extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <>
                <div class="shop-category-area pt-100px pb-100px">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                
                                <ProductsBanner/>
                                {/*  Shop Top Area Start */}
                                <ProductsCategoryList/>
                                {/*  Shop Bottom Area End */}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

SingleCategoryPage.propTypes = {

}

export default SingleCategoryPage