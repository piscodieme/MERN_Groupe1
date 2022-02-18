import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Registerbutton = (props) => {
    let Navigate = useNavigate();
    const handleSubmit = () => {
        props.handleSubmit();
        /* Navigate("/login"); */
    }
    return (
        <div>
           <button type="button" onClick={handleSubmit}><span>Register</span></button>

        </div>
    );
}

export default Registerbutton;
