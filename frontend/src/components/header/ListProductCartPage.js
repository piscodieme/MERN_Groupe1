import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {cartService} from '../../service/cartService';


class listProductCartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataCart : [],
            errorMessage : '',
        }

    }

    async componentDidMount(){
        const userId = JSON.parse(sessionStorage.getItem("userId"));
        await cartService.getAllProductsCart(userId)
            .then(res =>{
                const carts = res;
                this.setState({dataCart : carts});
                console.log("daata carts ????? ",carts);
            })
            .catch(error =>{
                this.setState({errorMessage:"Get All products Cart Error"});
                console.log("error Message ====",this.state.errorMessage);
            });
    }

    render() {
        console.log("data carts ",this.state.dataCart);
        const carts = this.state.dataCart;
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
                                                {carts.map((cart,index)=>(
                                                <tr>
                                                    <td class="product-thumbnail">
                                                        <a href="/"><img class="img-responsive ml-15px"
                                                                src={cart._Images._Frame} alt="" /></a>
                                                    </td>
                                                    <td class="product-name"><a href="/">{cart._Title}</a></td>
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
                                                ))}
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