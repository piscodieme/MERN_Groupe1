import React, { Component } from 'react'
import PropTypes from 'prop-types'

class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state ={
            login:'',
            password:'',
            telephone:'',
            firstname:'',
            lastname:'',
            adresse:''
        }

    }

    
    componentDidMount() {

    }
    handleFirstNameChange = (event) =>{
        this.setState({
            firstname : event.target.value
        })
        console.log("FIRSTNAME++++++++",this.state.firstname);
    }

    handleLastNameChange = (event) =>{
        this.setState({
            lastname : event.target.value
        })
        console.log("LASTNAME++++++++",this.state.lastname);
    }

    handleTelephoneChange = (event) =>{
        this.setState({
            telephone : event.target.value
        })
        console.log("TELEPHONE++++++++",this.state.telephone);
    }

    handleAdresseChange = (event) =>{
        this.setState({
            adresse : event.target.value
        })
        console.log("ADRESSE++++++++",this.state.adresse);
    }

    handleLoginChange = (event) =>{
        this.setState({
            login : event.target.value
        })
        console.log("LOGIN++++++++",this.state.login);
    }

    handlePasswordChange = (event) =>{
        this.setState({
            password : event.target.value
        })
        console.log("PASSWORD++++++++",this.state.password);
    }

    handleSubmit = () =>{
        this.props.handleSubmitRegister(this.state.firstname,this.state.lastname, this.state.login,this.state.adresse,this.state.telephone,this.state.password);
        console.log("ok register");
    }
    
    render() {
        const {
            handleSubmitRegister
        } = this.props;
        return (
            <>
                <div id="lg2" class="tab-pane">
                     <div class="login-form-container">
                        <div class="login-register-form">
                            <form action="#" method="post">
                                <input 
                                    type="text" 
                                    name="firstname" 
                                    placeholder="FirstName"  
                                    value={this.state.firstname}
                                    onChange={this.handleFirstNameChange}
                                    />
                                <input 
                                    type="text" 
                                    name="lastname" 
                                    placeholder="LastName"  
                                    value={this.state.lastname}
                                    onChange={this.handleLastNameChange}
                                    />
                                <input
                                    type="text" 
                                    name="login" 
                                    placeholder="Username"  
                                    value={this.state.login}
                                    onChange={this.handleLoginChange}
                                    />
                                <input 
                                    type="password" 
                                    name="user-password" 
                                    placeholder="Password"  
                                    value={this.state.password}
                                    onChange={this.handlePasswordChange}
                                    />
                                <input 
                                    name="telephone" 
                                    placeholder="Telephone" 
                                    type="number"  
                                    value={this.state.telephone}
                                    onChange={this.handleTelephoneChange}
                                    />
                                <input 
                                    name="adresse" 
                                    placeholder="Adresse" 
                                    type="text"  
                                    value={this.state.adresse}
                                    onChange={this.handleAdresseChange}
                                    />
                                <div class="button-box">
                                    <button type="button" onClick={this.handleSubmit}><span>Register</span></button>
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