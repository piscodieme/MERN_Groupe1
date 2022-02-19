import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {cartService} from '../../service/cartService';


class listProductCartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataCart : [],
            errorMessage : '',
            error:false,
            order:false,
            messageOrder : '',
           
        }

    }

    async componentDidMount(){
        const userId = JSON.parse(sessionStorage.getItem("userId"));
        if(userId){
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
        else{
            this.setState({error : true})
            this.setState({errorMessage:"votre devez d'abord vous connecter pour voir votre panier"});
        }
       
    }

    sendOrder= async () =>{
        const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
        console.log(userInfo);
        this.setState({order:true});
        this.setState({messageOrder : "Votre commande a était bien prise en compte. Merci"})
        
    }

    closeButon = () =>{
        this.setState({error:false})
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
            {this.state.error &&  
                <div>
                    <div class="card border-danger mb-3 bg-light"/*  style="max-width: 18rem;" */>
                        <div class="card-body">
                            <h6 class="text-danger text-center">{this.state.errorMessage}</h6>
                        </div>
                    </div>
                    <a href='/login' className='breadcrumb-item'> Aller à la page de connexion !!</a>
                </div>
                }
                 
                {!this.state.error &&
                <div>
                <h3 class="cart-page-title">Votre Panier</h3>
                <div class="table-content table-responsive cart-table-content">
                <table>
                    <thead>
                        <tr>
                            <th>Image produit</th>
                            <th>Nom produit</th>
                            <th>Prix Produit</th>
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
                            <button onClick={this.sendOrder}>Valider Mon Panier</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            }  
            {this.state.order &&  
                <div class="card border-success mb-3 bg-light"/*  style="max-width: 18rem;" */>
                    <div class="card-body">
                        <h6 class="text-success text-center">{this.state.messageOrder}</h6>
                    </div>
                </div>
            }                  
                           
            </>
        )
    }
}

listProductCartPage.propTypes = {

}

export default listProductCartPage