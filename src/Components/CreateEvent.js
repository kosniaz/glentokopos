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
        <div>
            <h1> Νέα Συναυλία</h1>
            <div className = "form">
                <form onSubmit = {handleSubmit}>
                    <input type = "text" placeholder = "Καλλιτέχνες" name = "artists"/>
                    <input type = "text" placeholder = "Τίτλος" name = "title"/>
                    <input type = "text" placeholder = "Τοποθεσία" name = "location"/>
                    <input type = "date" placeholder = "Ημερομηνία" name = "date"/>
                    <input type = "text" placeholder = "Νομός" name = "prefecture"/>
                    {/* <input type = "radio" placeholder = "Νομός" name = "prefecture">
                        <label>Χανιά</label>
                        <label>Ρέθυμνο</label>
                        <label>Ηράκλειο</label>
                        <label>Λασίθι</label>
                    </input> */}
                    <button>Υποβολή</button>
                </form>
            </div>
        </div>
    )
}

CreateEvent.propTypes = {
    onCreateEvent: PropTypes.func.isRequired
}
export default CreateEvent