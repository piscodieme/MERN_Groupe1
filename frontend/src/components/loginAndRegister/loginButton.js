import React from 'react';
import {useNavigate} from 'react-router-dom'


function Loginbutton  (props)  {
    let Navigate = useNavigate();
    const handleSubmit = ()=>{
        props.handleSubmitTest();
        Navigate(-1)
    }
    console.log(props);
    return (
        <>
            <button type="button" onClick={handleSubmit}><span>Login</span></button> 
        </>
    );
}

export default Loginbutton;
