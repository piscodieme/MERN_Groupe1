import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ContactPage from '../../components/contact/Contact';
import BreadCrumb from '../../components/utilities/BreadCrumb';

class Contact extends Component {
    
    render() {
        return (
            <>
                <BreadCrumb
                     title1 = "Contact"
                     title2 ="Contact"
                />
                <ContactPage/>
            </>
        )
    }
}

Contact.propTypes = {

}

export default Contact