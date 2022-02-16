import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Registerbutton = (props) => {
    let Navigate = useNavigate();
    const handleSubmit = () => {
        props.handleSubmit();
        Navigate(-1);
    }
    return (
        <div>
           <button type="button" onClick={handleSubmit}><span>Register</span></button>

        </div>
    );
}

export default Registerbutton;
