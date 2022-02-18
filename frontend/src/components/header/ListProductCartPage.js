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

    sendOrder= async () =>{
        const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
        console.log(userInfo);
        const dataCart = this.state.dataCart;
        const dataOrder = {
            "firstname" : userInfo.firstname,
            "lastname" : userInfo.lastname,
            "numero" : userInfo.numero,
            "adresse" : userInfo.adresse,
            "products" : dataCart,
        }

        const order = await cartService.sendOrder(dataOrder);
        if(order){
            console.log(order);
        }
    }

    addImage =(cart)=>{
        console.log(cart);
        if(cart){
            const newUrl = cart.substring(20);
            console.log("url image cart",cart);
            return(
                <img class="img-responsive ml-15px" src={newUrl} alt="" />
            )
        }
    }

    render() {
        console.log("data carts ",this.state.dataCart);
        const carts = this.state.dataCart;
        return (
            <>
                 
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
                                                <tr key={index}>
                                                    <td class="product-thumbnail">
                                                        {this.addImage(cart._Images._Frame) }
                                                    </td>
                                                    <td class="product-name">{cart._Title}</td>
                                                    <td class="product-price-cart"><span class="amount">{cart._Princing._Price}FCFA</span></td>
                                                    <td class="product-quantity">
                                                            <button>-</button>
                                                        <div class="cart-plus-minus">
                                                            {/* <input class="cart-plus-minus-box" type="text" name="qtybutton"
                                                                value={1} /> */}
                                                        </div>
                                                             <button>+</button>
                                                    </td>
                                                    <td class="product-subtotal">{cart._Princing._Price}</td>
                                                    <td class="product-remove">
                                                        <button ><i class="fa fa-pencil"></i></button>
                                                        <button ><i class="fa fa-times"></i></button>
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
                                                    <button>Consulter Facture</button>
                                                    <button onClick={this.sendOrder}>Valider Mon Panier</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                           
            </>
        )
    }
}

listProductCartPage.propTypes = {

}

export default listProductCartPage