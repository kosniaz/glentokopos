import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

function SearchEvent(props){
    var artistsState = [];
    function handleSearch(event){
        event.preventDefault();
        const artists = artistsState
        const date = event.target.elements.date.value
        const prefecture = event.target.elements.prefecture.value
        if(artists && date && prefecture){
            const criteria = {
                artists: artists,
                date: date,
                prefecture: prefecture
            }
            props.onSearchEvent(criteria)
        }
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
    }

    return(
        <div className = "card form-container container">
            <h1>Βρες μια συναυλία</h1>
            <div className = "form">
                <form className="event-form" onSubmit = {handleSearch}>
                    {/* Artist search */}
                    <div className = "form-group form-control form-control-lg"><Select isMulti options={selectionList} className="border-0 col-md-12" placeholder = "Καλλιτέχνες" name = "artists" type="" onChange={handleChange}/></div>
                    {/* Date Search */}
                    <div className = "form-group form-control form-control-lg">
                        <input className="fw-light border-0 col-md-12" type = "date" placeholder = "Ημερομηνία" name = "date" min={disablePastDate()}/>
                    </div>
                    {/* prefecture search */}
                    <div className = "form-group"><select defaultValue="Νομός" className="form-control form-control-lg fw-light" name = "prefecture">
                        <option value="null">Νομός</option>
                        <option value="Χανιά">Χανιά</option>
                        <option value="Ρέθυμνο">Ρέθυμνο</option>
                        <option value="Ηράκλειο">Ηράκλειο</option>
                        <option value="Λασίθι">Λασίθι</option>
                    </select></div>
                    <div className = "form-group text-center"><button className='btn btn-lg btn-outline-dark mt-3'>Αναζήτηση</button></div>
                </form>
            </div>
        </div>
    )
}

SearchEvent.propTypes = {
    artists: PropTypes.array.isRequired,
    onSearchEvent: PropTypes.func.isRequired
}
export default SearchEvent