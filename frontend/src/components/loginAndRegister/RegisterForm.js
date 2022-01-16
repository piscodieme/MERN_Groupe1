import React, { Component } from 'react'
import PropTypes from 'prop-types'

class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state ={
            registerUsername:'',
            registerPassword:'',
            userEmail:''
        }

    }

    
    componentDidMount() {

    }

    
    render() {
        return (
            <>
                <div id="lg2" class="tab-pane">
                     <div class="login-form-container">
                        <div class="login-register-form">
                            <form action="#" method="post">
                                <input type="text" name="user-name" placeholder="Username"  value={this.state.registerUsername}/>
                                <input type="password" name="user-password" placeholder="Password"  value={this.state.registerPassword} />
                                <input name="user-email" placeholder="Email" type="email"  value={this.state.userEmail} />
                                <div class="button-box">
                                    <button type="submit"><span>Register</span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

RegisterForm.propTypes = {

}

export default RegisterForm