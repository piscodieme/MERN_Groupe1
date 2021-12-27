import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShippingPage extends Component {
    constructor(props) {
        super(props)

    }

   
    render() {
        return (
            <>
                 <div class="row">
                                    <div class="col-lg-4 col-md-6 mb-lm-30px">
                                        <div class="cart-tax">
                                            <div class="title-wrap">
                                                <h4 class="cart-bottom-title section-bg-gray">Estimate Shipping And Tax</h4>
                                            </div>
                                            <div class="tax-wrapper">
                                                <p>Enter your destination to get a shipping estimate.</p>
                                                <div class="tax-select-wrapper">
                                                    <div class="tax-select">
                                                        <label>
                                                            * Country
                                                        </label>
                                                        <select class="email s-email s-wid">
                                                            <option>Bangladesh</option>
                                                            <option>Albania</option>
                                                            <option>Åland Islands</option>
                                                            <option>Afghanistan</option>
                                                            <option>Belgium</option>
                                                        </select>
                                                    </div>
                                                    <div class="tax-select">
                                                        <label>
                                                            * Region / State
                                                        </label>
                                                        <select class="email s-email s-wid">
                                                            <option>Bangladesh</option>
                                                            <option>Albania</option>
                                                            <option>Åland Islands</option>
                                                            <option>Afghanistan</option>
                                                            <option>Belgium</option>
                                                        </select>
                                                    </div>
                                                    <div class="tax-select mb-25px">
                                                        <label>
                                                            * Zip/Postal Code
                                                        </label>
                                                        <input type="text" />
                                                    </div>
                                                    <button class="cart-btn-2" type="submit">Get A Quote</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 mb-lm-30px">
                                        <div class="discount-code-wrapper">
                                            <div class="title-wrap">
                                                <h4 class="cart-bottom-title section-bg-gray">Use Coupon Code</h4>
                                            </div>
                                            <div class="discount-code">
                                                <p>Enter your coupon code if you have one.</p>
                                                <form>
                                                    <input type="text" required="" name="name" />
                                                    <button class="cart-btn-2" type="submit">Apply Coupon</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-12 mt-md-30px">
                                        <div class="grand-totall">
                                            <div class="title-wrap">
                                                <h4 class="cart-bottom-title section-bg-gary-cart">Cart Total</h4>
                                            </div>
                                            <h5>Total products <span>$260.00</span></h5>
                                            <div class="total-shipping">
                                                <h5>Total shipping</h5>
                                                <ul>
                                                    <li><input type="checkbox" /> Standard <span>$20.00</span></li>
                                                    <li><input type="checkbox" /> Express <span>$30.00</span></li>
                                                </ul>
                                            </div>
                                            <h4 class="grand-totall-title">Grand Total <span>$260.00</span></h4>
                                            <a href="checkout.html">Proceed to Checkout</a>
                                        </div>
                                    </div>
                                </div>
            </>
        )
    }
}

ShippingPage.propTypes = {

}

export default ShippingPage