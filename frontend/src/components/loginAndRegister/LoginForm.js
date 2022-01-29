import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";


class LoginForm extends Component {

    constructor(props){
        super(props)
        this.state={
            username:'',
            userPassword:'',
        }
    }



    /* recuperaion du champ username */
    handleUsernameChange = (event) =>{
        this.setState({
            username : event.target.value
        })
        console.log("USERNAME++++++++",this.state.username);
    }
    /* recuperation du champ password */
    handlePasswordChange = (event) =>{
        this.setState({
            userPassword : event.target.value
        })
        console.log("PASSWORD =======",this.state.userPassword);
    }
    handleSubmitTest = () => {
        //console.log("usernamme == ",this.state.username,"  ++ passWord =====",this.state.userPassword);
        this.props.handleSubmit(this.state.username,this.state.userPassword);
    }
    render() {
        const {
            handleSubmit,
        }= this.props;
        return (
            <>
            {/* login area start  */}
           
            <div id="lg1" class="tab-pane active">
                <div class="login-form-container">
                    <div class="login-register-form">
                        <form onSubmit={this.handleSubmitTest}>
                            <input 
                                type="text" 
                                name="username" 
                                placeholder="Username" 
                                value={this.state.username}
                                onChange={this.handleUsernameChange} 
                            />
                            <input 
                                type="password" 
                                name="userPassword" 
                                placeholder="Password" 
                                value={this.state.userPassword}
                                onChange={this.handlePasswordChange}    
                            />
                            <div class="button-box">
                            <div class="login-toggle-btn">
                                <input type="checkbox" />
                                <Link class="flote-none" to="javascript:void(0)">Remember me</Link>
                                <a href="/">Forgot Password?</a>
                            </div>
                                <button type="button" onClick={this.handleSubmitTest}><span>Login</span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
                                   
                                
            {/* login area end  */}

            </>
        )
    }
}

LoginForm.propTypes = {

}

export default LoginForm