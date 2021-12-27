import React, { Component } from 'react'
import LoginForm from '../../components/loginAndRegister/LoginForm'
import PropTypes from 'prop-types';
import BreadCrumb from '../../components/utilities/BreadCrumb';

class Login extends Component {

    render() {
        return (
            <>
                <BreadCrumb
                    title1 = "Login & Register"
                    title2 = "Login"
                />
                <LoginForm/>
            </>
        )
    }
}

Login.propTypes = {

}

export default Login