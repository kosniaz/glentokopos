
import React from 'react';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs'

function SignUp(props){
    let navigate = useNavigate();
    function handleSubmit(event){
        event.preventDefault();
        const Name = event.target.elements.Name.value
        const Email = event.target.elements.Email.value
        const salt = bcrypt.genSaltSync(10)
        const Password = bcrypt.hashSync(event.target.elements.Password.value, salt)
        const Avatar = event.target.elements.Avatar.value
        const user = {
            id: Number(new Date()),
            Name: Name,
            Email: Email,
            Password: Password,
            Avatar: Avatar
        }

        if(Name && Email && Password){
            props.onCreateUser(user)              
            navigate('/CreateEvent')
        }
    }
    



return(
    <div className = "card form-container container">
        <h1>Δημιουργία Προφίλ</h1>
        <div className = "form">
            <form className="event-form" onSubmit = {handleSubmit}>
                <div className = "form-group form-control form-control-lg"><input className="border-0 col-md-12" type = "text" placeholder = "Ονοματεπώνυμο" name = "Name"/></div>
                <div className = "form-group form-control form-control-lg"><input className="border-0 col-md-12" type = "email" placeholder = "Email" name = "Email"/></div>
{/* Passwrod gets encrypted with Bcrypt -> What about Decrypt? Also need Lost Password Feature */}
                <div className = "form-group form-control form-control-lg"><input className="border-0 col-md-12" type = "text" placeholder = "Κωδικός" name = "Password"/></div>
{/* Avatar needs file handling API maybe acce[t link to images instead of images */}
                <div className = "form-group form-control form-control-lg"><label className="col col-md-4 fw-light" for="Avatar">Εικόνα Προφίλ</label><input className="border-0 col col-md-8" type = "file" accept=".png, .jpeg" defaultValue="" name = "Avatar"/></div>
                <div className = "form-group text-center"><button className='btn btn-lg btn-outline-dark mt-3'>Υποβολή</button></div>
            </form>
        </div>
    </div>
    )
}

export default SignUp