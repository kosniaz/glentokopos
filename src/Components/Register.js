
import React from 'react';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs'





function Register(props){
    let navigate = useNavigate();
    function handleSubmit(event){
        event.preventDefault();
        // const Name = event.target.elements.Name.value
        const Email = event.target.elements.Email.value
        const Password = event.target.elements.Password.value
        const Password2 = event.target.elements.Password2.value
        // const Avatar = event.target.elements.Avatar.value
        if(Password === Password2){
            if(Password.length >= 6){
                if(Email && Password){
                    props.onCreateUser(Email, Password)              
                    navigate('/createvent')
                }
            }else{alert("Ο κωδικός πρέπει να είναι τουλάχιστον 6 χαρακτήρες")}
        }else{
            alert('Οι κωδικοί δεν ταιριάζουν')
        }
    }
    

return(
    <div className = "card form-container container">
        <h1>Δημιουργία Προφίλ</h1>
        <div className = "form">
            <form className="event-form" onSubmit = {handleSubmit}>
                {/* <div className = "form-group form-control form-control-lg"><input className="border-0 col-md-12" type = "text" placeholder = "Ονοματεπώνυμο" name = "Name"/></div> */}
                <div className = "form-group form-control form-control-lg"><input className="border-0 col-md-12" type = "email" placeholder = "Email" name = "Email"/></div>
                <div className = "form-group form-control form-control-lg"><input className="border-0 col-md-12" type = "password" placeholder = "Κωδικός" name = "Password"/></div>
                <div className = "form-group form-control form-control-lg"><input className="border-0 col-md-12" type = "password" placeholder = "Επαναλάβετε τον κωδικό" name = "Password2"/></div>
{/* Avatar needs file handling API maybe acce[t link to images instead of images */}
                {/* <div className = "form-group form-control form-control-lg"><label className="col col-md-4 fw-light" for="Avatar">Εικόνα Προφίλ</label><input className="border-0 col col-md-8" type = "file" accept=".png, .jpeg" defaultValue="" name = "Avatar"/></div> */}
                <div className = "form-group text-center"><button className='btn btn-lg btn-outline-dark mt-3'>Υποβολή</button></div>
            </form>
        </div>
    </div>
    )
}

export default Register