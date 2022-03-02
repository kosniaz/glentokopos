import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignButtons(){
    let navigate = useNavigate();
    function handleSignIn(){
        navigate('/SignIn')
    }
    function handleSignUp(){
        navigate('/SignUp')
    }
    return(
        <div className ="container text-center mt-3">
            <button className='btn btn-outline-dark m-2' onClick = {handleSignIn} > Σύνδεση </button>
            <button className='btn btn-outline-dark m-2' onClick = {handleSignUp} > Εγγραφή </button>
         </div>
    )
}

export default SignButtons