import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PaymentMode extends Component {
    constructor(props) {
        super(props)

    }

   

    componentDidMount() {

    }

    render() {
        return (
            <>
            <div class="feature-area pt-100px">
                <div class="container">
                    <div class="feature-wrapper">
                        <div class="single-feture-col">
                            {/* single item */}
                            <div class="single-feature">
                                <div class="feature-icon">
                                    <img src="assets/images/icons/1.png" alt=""></img>
                                </div>
                                <div class="feature-content">
                                    <h4 class="title">Livraison rapide</h4>
                                    <span class="sub-title">2000FCFA a Dakar</span>
                                </div>
                            </div>
                        </div>
                        {/* single item */}
                        <div class="single-feture-col ">
                            <div class="single-feature">
                                <div class="feature-icon">
                                    <img src="assets/images/icons/2.png" alt=""></img>
                                </div>
                                <div class="feature-content">
                                    <h4 class="title">Payer par carte </h4>
                                    <span class="sub-title">Reduction sur carte</span>
                                </div>
                            </div>
                        </div>
                        {/* single item */}
                        <div class="single-feture-col">
                            <div class="single-feature">
                                <div class="feature-icon">
                                    <img src="assets/images/icons/3.png" alt=""></img>
                                </div>
                                <div class="feature-content">
                                    <h4 class="title">Retour produit</h4>
                                    <span class="sub-title">Annuler les commandes</span>
                                </div>
                            </div>
                            {/* single item */}
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

PaymentMode.propTypes = {

}

export default PaymentMode