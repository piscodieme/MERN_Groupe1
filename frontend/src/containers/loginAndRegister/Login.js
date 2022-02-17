import React, { Component, useState } from 'react'
import LoginForm from '../../components/loginAndRegister/LoginForm'
import PropTypes from 'prop-types';
import BreadCrumb from '../../components/utilities/BreadCrumb';
import RegisterForm from '../../components/loginAndRegister/RegisterForm';
import { loginAndRegisterService } from '../../service/loginAndRegisterService';
import {useNavigate} from 'react-router-dom';

function Login (props){
    const [error, setError] = useState(false);
    const[messageError, setMessgeError] = useState("");
   const Navigate = useNavigate(); 
    const handleSubmit = async (username, password)=>{
        const log = await loginAndRegisterService.login(username, password);
        console.log("return login ==== ",log)
        if(log){
            console.log("return login ==== ",log);
            Navigate("/");
        }else{
            setError(true);
            setMessgeError("Email or Password Not Match");
        }
        //console.log("user name AAAAAAAAA ", username,"pass word BBBBBBBBB", password);
       /*  return */ /* new Promise((resolve, reject)=>{ *//* await loginAndRegisterService.login(username, password) */
           /*  .then(res => {
                const log =res;
                console.log("retour login container  ===",log);
               
            })
            .catch(error => {
                console.log("error login",error)
               
            }) */
        /* }) */
            
        
    }

    const closeButon = ()=>{
        setError(false);
    }

   const handleSubmitRegister = (firstname,lastname,login,adresse,telephone,password) => {
        console.log("container register")
        loginAndRegisterService.register(firstname,lastname,login,adresse,telephone,password);
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
                            <h5 class="card-title text-white">{messageError}</h5>
                        <button type="button" class="close text-white" aria-label="Close" onClick={closeButon}>
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