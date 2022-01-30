import React, { Component } from 'react'
import LoginForm from '../../components/loginAndRegister/LoginForm'
import PropTypes from 'prop-types';
import BreadCrumb from '../../components/utilities/BreadCrumb';
import RegisterForm from '../../components/loginAndRegister/RegisterForm';
import { loginAndRegisterService } from '../../service/loginAndRegisterService';

class Login extends Component {

    constructor(props){
        super(props)
    }
    
    handleSubmit=(username, password)=>{
        //console.log("user name AAAAAAAAA ", username,"pass word BBBBBBBBB", password);
        loginAndRegisterService.login(username, password);
        
    }

    handleSubmitRegister = (firstname,lastname,login,adresse,telephone,password) => {
        console.log("container register")
        loginAndRegisterService.register(firstname,lastname,login,adresse,telephone,password);
    }
    render() {
        return (
            <>
                <BreadCrumb
                    title1 = "Login & Register"
                    title2 = "Login"
                />
                 <div class="login-register-area pt-100px pb-100px">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 col-md-12 ml-auto mr-auto">
                            <div class="login-register-wrapper">
                                <div class="login-register-tab-list nav">
                                    <a class="active" data-bs-toggle="tab" href="#lg1">
                                        <h4>login</h4>
                                    </a>
                                    <a data-bs-toggle="tab" href="#lg2">
                                        <h4>register</h4>
                                    </a>
                                </div>
                                <div class="tab-content">
                                    <LoginForm
                                        handleSubmit={this.handleSubmit}
                                    />
                                    <RegisterForm
                                        handleSubmitRegister={this.handleSubmitRegister}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

                
            </>
        )
    }
}

Login.propTypes = {

}

export default Login