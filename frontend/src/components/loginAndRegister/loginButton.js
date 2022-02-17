import React ,{useState}from 'react';
import {useNavigate} from 'react-router-dom'


function Loginbutton  (props)  {
    let Navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [msg, setMsg] = useState(false);
    const handleSubmit = ()=>{
       const log = props.handleSubmitTest();

    }
    console.log(props);
    return (
        <>
            {msg &&
            <div>
                <h5 Style = "color:red">{message}</h5>
            </div>
            }
            <button type="button" onClick={handleSubmit}><span>Login</span></button> 
        </>
    );
}

export default Loginbutton;
