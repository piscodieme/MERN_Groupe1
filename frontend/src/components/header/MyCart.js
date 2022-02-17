import React, { Component } from 'react';
import ListProductCartPage from './ListProductCartPage';
import PropTypes from 'prop-types'

class MyCart extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <>
                <div class="cart-main-area pt-100px pb-100px">
                    <div class="container">
                        <h3 class="cart-page-title">Your cart items</h3>
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                            <ListProductCartPage/>     
                           
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

MyCart.propTypes = {

}

export default MyCart