import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function CreateEvent(props){
    let navigate = useNavigate();
    function handleSubmit(event){
        event.preventDefault();
        const artists = event.target.elements.artists.value
        const title = event.target.elements.title.value
        const location = event.target.elements.location.value
        const date = event.target.elements.date.value
        const prefecture = event.target.elements.prefecture.value
        const post = {
            id: Number(new Date()),
            artists: artists,
            title: title,
            location: location,
            date: date,
            prefecture: prefecture,
        }
        if(artists && title && location && date && prefecture){
            props.onCreateEvent(post)
            navigate('/')
        }
    }

    return(
        <div className = "card form-container container">
            <h1>Νέα Συναυλία</h1>
            <div className = "form">
                <form className="event-form" onSubmit = {handleSubmit}>
                    <div className = "form-group form-control form-control-lg"><input className="border-0" type = "text" placeholder = "Καλλιτέχνες" name = "artists"/></div>
                    <div className = "form-group form-control form-control-lg"><input className="border-0" type = "text" placeholder = "Τίτλος" name = "title"/></div>
                    <div className = "form-group form-control form-control-lg"><input className="border-0" type = "text" placeholder = "Τοποθεσία" name = "location"/></div>
                    <div className = "form-group form-control form-control-lg"><input className="fw-light border-0 col-md-12" type = "date" placeholder = "Ημερομηνία" name = "date"/></div>
                    <div className = "form-group"><select className="form-control form-control-lg fw-light" name = "prefecture">
                        <option selected disabled >Νομός</option>
                        <option value="Χανιά">Χανιά</option>
                        <option value="Ρέθυμνο">Ρέθυμνο</option>
                        <option value="Ηράκλειο">Ηράκλειο</option>
                        <option value="Λασίθι">Λασίθι</option>
                    </select></div>
                    <div className = "form-group text-center"><button className='btn btn-lg btn-outline-dark mt-3'>Υποβολή</button></div>
                </form>
            </div>
        </div>
    )
}

CreateEvent.propTypes = {
    onCreateEvent: PropTypes.func.isRequired
}
export default CreateEvent