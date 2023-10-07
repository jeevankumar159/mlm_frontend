import React, { useState, useEffect } from 'react';
import './LoginSignup.css'
import { useLocation } from 'react-router-dom';



const LoginSignup = () => {
    const [action, setAction] = useState("Login");
    const [sponserId, setSponserId] = useState('');
    const location = useLocation();

    // Function to parse query parameters from the URL
    const getQueryParams = () => {
        const queryParams = new URLSearchParams(location.search);
        return queryParams.get("sponserId") || "";
    };

    // Update sponserId when the URL changes
    useEffect(() => {
        const newSponserId = getQueryParams();
        setSponserId(newSponserId);
    }, [location.search]);
  return (
    <div className='container'>
        <div className='header'>
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">

        {action=="Login"?<div></div>:<div className="input">
            <input
                type="text"
                placeholder='Sponser Id *'
                value={sponserId || ''} // Set the value of the input field to sponserId
                readOnly // Make the input field read-only if needed
            />
            </div>}
            {action=="Login"?<div></div>:<div className="input">
                <input type="sponser name" placeholder='Sponser Name' />    

            </div>}
            {action=="Login"?<div></div>:<div className="input">
                <input type="text" placeholder='Name *' />
            </div>}
            {action=="Login"?<div></div>:            <div className="input">
                <input type="mobile" placeholder='Mobile *' />
            </div>}


            <div className="input">
                <input type="email" placeholder='Email *' />
            </div>
            <div className="input">
                <input type="password" placeholder='Password' />
            </div>
        </div>
        {action=="Sign Up"?<div></div>:<div className="forgot-password">Lost password? <span>Click Here</span></div>}
        <div className="submit-container">
            <div className={action=="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action=="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
        </div>

    </div>
  )
}

export default LoginSignup