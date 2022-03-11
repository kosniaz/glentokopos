import React from 'react';
import { useNavigate } from 'react-router-dom';

function CreateButton(){
    let navigate = useNavigate();
    function handleClick(){
        navigate('/CreateEvent')
    }
    return(
        <div className ="container text-center mt-3">
            <button className='btn btn-lg btn-outline-dark mt-3' onClick = {handleClick} > Δημιουργία </button>
         </div>
    )
}

export default CreateButton