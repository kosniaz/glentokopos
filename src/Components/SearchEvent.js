import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

function SearchEvent(props){
    function handleSearch(event){
        event.preventDefault();
        const artists = event.target.elements.artists.value
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

    // let selections = props.state.map(name => )
    var selectionList = [];
    var selections = (props.posts.map(obj => obj.Artists))
    selections.forEach(function(element) {
        selectionList.push({ label:element, value: element })
    });

    console.log(selectionList)

    return(
        <div className = "card form-container container">
            <h1>Βρες αυτό που ψάχνεις</h1>
            <div className = "form">
                <form className="event-form" onSubmit = {handleSearch}>
                    <div className = "form-group form-control form-control-lg"><Select options={selectionList} className="border-0 col-md-12" placeholder = "Καλλιτέχνες" name = "artists" type=""/></div>
                    <div className = "form-group form-control form-control-lg">
                        <input className="fw-light border-0 col-md-12" type = "date" placeholder = "Ημερομηνία" name = "date" min={disablePastDate()}/>
                    </div>
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

// CreateEvent.propTypes = {
//     onSearchEvent: PropTypes.func.isRequired
// }
export default SearchEvent