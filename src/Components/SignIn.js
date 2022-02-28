import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function SignIn(){
    let navigate = useNavigate();
    function handleClick(){
        navigate('/CreateEvent')
    }
    return(
        <div>
            <button onClick = {handleClick} > Sign In </button>
        </div>
    )
}

export default SignIn