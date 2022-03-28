import React from 'react';
import Creatable from 'react-select/creatable';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
// import Select from 'react-select/dist/declarations/src/Select';

function CreateEvent(props){
    var artistsState = [];
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
        
        if(title && location && date && prefecture){
            props.addingPost(post)
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
    
    //Capitalize first letter of each name and make others lowercase
    function fixCase(str){
        let lowercasename = str.toString().toLowerCase()
        return lowercasename.charAt(0).toUpperCase() + lowercasename.slice(1);
    }

    // Define artists' dropdown content & remove duplicates
    //          ***
    //          ***     NEEDS REMOVAL OF DOUBLETYPES
    //          ***
    var selections =[]
    Object.entries(props.posts).forEach(([key, value]) => selections.push(Object.entries(value.artists).map(element => element.pop())))
    let selectionList = (selections.reduce((a, b) => [...a, ...b], [])).sort((a, b) => a.value > b.value ? 1 : -1).filter((v,i,a)=>a.findIndex(t=>(t.value===v.value))===i)
    console.log('List items:', selectionList)

    // Set artist selection for event creation and fixcase of entries
    function handleChange(selectedArtists){
        selectedArtists.map(obj => {obj.label = fixCase(obj.label); obj.value = fixCase(obj.value)})
        artistsState = selectedArtists
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


export default CreateEvent