import React from 'react';
import Creatable from 'react-select/creatable';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function CreateEvent(props){
    var artistsState = [{
            name:"",
            id:""
        }];
    let navigate = useNavigate();
    function handleSubmit(event){
        event.preventDefault();
        //Add artists to the event & update artist table
        const artists = artistsState
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
        
       // console.log(post)
        if(title && location && date && prefecture){
            props.onCreateEvent(post)
            navigate('/')
        }
    }
    function handleReturn(){
        navigate('/')
    }

    // Disable calendar past dates
    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

    // Set array for options in Select and sort alphabeticaly
    var selectionList = [];
    var selections = (props.artists.map(obj => obj.Artist)).sort();
    selections.forEach(function(element) {
        selectionList.push({ label:element, value: element })
    });

    // Set artist selection to search for
    function handleChange(selectedArtists){
        artistsState = selectedArtists;
        console.log(selectedArtists)
    }

    return(
        <div className = "card form-container container">
            <h1>Νέα Συναυλία</h1>
            <div className = "form">
                <form className="event-form" id="form1" onSubmit = {handleSubmit}>
                    <div className = "form-group form-control form-control-lg"><Creatable isMulti options={selectionList} className="border-0 col-md-12" placeholder = "Καλλιτέχνες" name = "artists" type="" onChange={handleChange}/></div>
                    <div className = "form-group form-control form-control-lg"><input className="border-0" type = "text" placeholder = "Τίτλος" name = "title"/></div>
                    <div className = "form-group form-control form-control-lg"><input className="border-0" type = "text" placeholder = "Τοποθεσία" name = "location"/></div>
                    <div className = "form-group form-control form-control-lg"><input className="fw-light border-0 col-md-12" type = "date" placeholder = "Ημερομηνία" name = "date" min={disablePastDate()}/></div>
                    <div className = "form-group"><select defaultValue="Νομός" className="form-control form-control-lg fw-light" name = "prefecture">
                        <option disabled >Νομός</option>
                        <option value="Χανιά">Χανιά</option>
                        <option value="Ρέθυμνο">Ρέθυμνο</option>
                        <option value="Ηράκλειο">Ηράκλειο</option>
                        <option value="Λασίθι">Λασίθι</option>
                    </select></div>
                </form>
            </div>
            <div className = "col-md-6 gap-3 row d-md-block mt-5 text-center">
                <button className='btn btn-lg btn-outline-dark col-md-4' type="submit" form="form1" value="Submit">Υποβολή</button>
                <button className='btn btn-lg btn-outline-dark offset-md-1 col-md-4' onClick = {handleReturn}>Επιστροφή</button>
            </div>
        </div>
    )
}

CreateEvent.propTypes = {
    onCreateEvent: PropTypes.func.isRequired
}
export default CreateEvent