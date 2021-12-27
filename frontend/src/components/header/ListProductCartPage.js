import React, { Component } from 'react'
import PropTypes from 'prop-types'

class listProductCartPage extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <>
                 <form action="#">
                                    <div class="table-content table-responsive cart-table-content">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Image</th>
                                                    <th>Product Name</th>
                                                    <th>Until Price</th>
                                                    <th>Qty</th>
                                                    <th>Subtotal</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="product-thumbnail">
                                                        <a href="/"><img class="img-responsive ml-15px"
                                                                src="assets/images/product-image/1.jpg" alt="" /></a>
                                                    </td>
                                                    <td class="product-name"><a href="/">Product Name</a></td>
                                                    <td class="product-price-cart"><span class="amount">$60.00</span></td>
                                                    <td class="product-quantity">
                                                        <div class="cart-plus-minus">
                                                            <input class="cart-plus-minus-box" type="text" name="qtybutton"
                                                                value="1" />
                                                        </div>
                                                    </td>
                                                    <td class="product-subtotal">$70.00</td>
                                                    <td class="product-remove">
                                                        <a href="/"><i class="fa fa-pencil"></i></a>
                                                        <a href="/"><i class="fa fa-times"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="product-thumbnail">
                                                        <a href="/"><img class="img-responsive ml-15px"
                                                                src="assets/images/product-image/2.jpg" alt="" /></a>
                                                    </td>
                                                    <td class="product-name"><a href="/">Product Name</a></td>
                                                    <td class="product-price-cart"><span class="amount">$50.00</span></td>
                                                    <td class="product-quantity">
                                                        <div class="cart-plus-minus">
                                                            <input class="cart-plus-minus-box" type="text" name="qtybutton"
                                                                value="1" />
                                                        </div>
                                                    </td>
                                                    <td class="product-subtotal">$80.00</td>
                                                    <td class="product-remove">
                                                        <a href="/"><i class="fa fa-pencil"></i></a>
                                                        <a href="/"><i class="fa fa-times"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="product-thumbnail">
                                                        <a href="/"><img class="img-responsive ml-15px"
                                                                src="assets/images/product-image/3.jpg" alt="" /></a>
                                                    </td>
                                                    <td class="product-name"><a href="/">Product Name</a></td>
                                                    <td class="product-price-cart"><span class="amount">$70.00</span></td>
                                                    <td class="product-quantity">
                                                        <div class="cart-plus-minus">
                                                            <input class="cart-plus-minus-box" type="text" name="qtybutton"
                                                                value="1" />
                                                        </div>
                                                    </td>
                                                    <td class="product-subtotal">$90.00</td>
                                                    <td class="product-remove">
                                                        <a href="/"><i class="fa fa-pencil"></i></a>
                                                        <a href="/"><i class="fa fa-times"></i></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="cart-shiping-update-wrapper">
                                                <div class="cart-shiping-update">
                                                    <a href="/">Continue Shopping</a>
                                                </div>
                                                <div class="cart-clear">
                                                    <button>Update Shopping Cart</button>
                                                    <a href="/">Clear Shopping Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
            </>
        )
    }
}

listProductCartPage.propTypes = {

}

export default listProductCartPage