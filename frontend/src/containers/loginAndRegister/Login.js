import React, { Component, useState } from 'react'
import LoginForm from '../../components/loginAndRegister/LoginForm'
import PropTypes from 'prop-types';
import BreadCrumb from '../../components/utilities/BreadCrumb';
import RegisterForm from '../../components/loginAndRegister/RegisterForm';
import { loginAndRegisterService } from '../../service/loginAndRegisterService';
import {useNavigate} from 'react-router-dom';

function Login (props){
    const [error, setError] = useState(false);
    const [errorRegister, setErrorRegister] = useState(false);
    const[messageError, setMessageError] = useState("");
   const Navigate = useNavigate(); 
    const handleSubmit = async (username, password)=>{
        const log = await loginAndRegisterService.login(username, password);
        console.log("return login ==== ",log)
        if(log){
            console.log("return login ==== ",log);
            Navigate("/");
        }else{
            setError(true);
            setMessageError("Email or Password Not Match");
        }
        
    }

    const closeButon = ()=>{
        setError(false);
    }

    const closeButtonRegister =()=>{
        setErrorRegister(false);
    }

   const handleSubmitRegister = async (firstname,lastname,login,adresse,telephone,password) => {
        console.log("container register")
        const register = await loginAndRegisterService.register(firstname,lastname,login,adresse,telephone,password);
        if(register){
            console.log("return login ==== ",register);
            setErrorRegister(true);
            setMessageError("Création de compte réussi. Vous maintenant vous connectez")
           
        }else{
            setError(true);
            setMessageError("Erreur d'inscription essayez à nouveau");
        }
    }
        return (
            <>
                <BreadCrumb
                    title1 = "Login & Register"
                    title2 = "Login"
                />
                {/* notification messsgae */}
                
                {/* notification end */}
                 <div class="login-register-area pt-100px pb-100px">
                 {error &&  
                    <div class="card border-danger mb-3 bg-danger"/*  style="max-width: 18rem;" */>
                        <div class="card-body">
                            <span class="text-white">{messageError}</span>
                        <button type="button" class="close text-white" aria-label="Close" onClick={closeButon}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                    </div>
                }
                {errorRegister &&  
                    <div class="card border-danger mb-3 bg-success"/*  style="max-width: 18rem;" */>
                        <div class="card-body">
                            <span class="text-white">{messageError}</span>
                        <button type="button" class="close text-white" aria-label="Close" onClick={closeButtonRegister}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                    </div>
                }
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
                                        handleSubmit={handleSubmit}
                                    />
                                    <RegisterForm
                                        handleSubmitRegister={handleSubmitRegister}
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

Login.propTypes = {

}

export default Login