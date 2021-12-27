import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MyCartPage from '../../components/header/MyCart';
import BreadCrumb from '../../components/utilities/BreadCrumb';

class Mycart extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <>
                <BreadCrumb
                    title1 = "Mon Panier"
                    title2 ="Mon Panier"
                />
                <MyCartPage/>
            </>
        )
    }
}

Mycart.propTypes = {

}

export default Mycart