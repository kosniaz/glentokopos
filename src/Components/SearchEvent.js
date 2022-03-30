import React from 'react';
import Select from 'react-select';

function SearchEvent(props){
    var artistsState = [];
    function handleSearch(event){
        event.preventDefault();
        const artists = artistsState
        const date = event.target.elements.date.value
        const prefecture = event.target.elements.prefecture.value
        if(artists.length || date != "" || prefecture != ""){
            const criteria = {
                artists: artists,
                date: date,
                prefecture: prefecture
            }
            PerformSearch(criteria)
        }
    }


    //Perform Search
    function PerformSearch(criteria){
        console.log(criteria)
        let eventList = props.posts
        var resultslist = []
        if(criteria.artists.length > 0){
console.log('Search By Artist')
            let searchedArtists = criteria.artists.map(obj => obj.value)
           
            
            //Search by artist
            eventList.map(event => {event.artists.map(artist=>{
                if (artist.value.includes(searchedArtists.map(artist => artist))){
                    
                    //If artist found search by date             
                    if (criteria.date != ""){
                        if (event.date == criteria.date){
                            //If date found search by prefecture
                            if (criteria.prefecture != ""){
                                if(event.prefecture == criteria.prefecture){
                                    resultslist.push(event)
                                }
                            }
                            else{resultslist.push(event)}
                        }
                    }

                    //If no date, search by artist and prefecture
                    else if (criteria.prefecture != ""){
                        if(event.prefecture == criteria.prefecture){
                            resultslist.push(event)
                        }
                    }
                    //If no date and no prefecture, search by artist
                    else{resultslist.push(event)}
                }
            })})
        }

        //Search by date
        else if(criteria.date != ""){
console.log('Search By Date')
            eventList.map(event => {
                if (event.date == criteria.date){
                    //If date found search by date and prefecture
                    if (criteria.prefecture != ""){
                        if(event.prefecture == criteria.prefecture){
                            resultslist.push(event)
                        }
                    }
                    //if no prefecture, search by date
                    else{resultslist.push(event)}
                }
            })

        }        
        //Search by prefecture
        else{
console.log('Search By Prefecture')
            eventList.map(event => {            
                if(event.prefecture == criteria.prefecture){
                    resultslist.push(event)
                }
            })
        }
        console.log('Search Results',resultslist)
    }

    // Disable calendar past dates
    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };



    // Set array for options in Select, sort alphabeticaly and remove dublicates
    //          ***
    //          ***    
    //          ***
    var selections =[]
    Object.entries(props.posts).forEach(([key, value]) => selections.push(Object.entries(value.artists).map(element => element.pop())))
    let selectionList = (selections.reduce((a, b) => [...a, ...b], [])).sort((a, b) => a.value > b.value ? 1 : -1).filter((v,i,a)=>a.findIndex(t=>(t.value===v.value))===i)
    console.log('List items:', selectionList)


    // Set artist selection to search for
    function handleChange(selectedArtists){
        artistsState = selectedArtists
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
                        <option value="">Νομός</option>
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

export default SearchEvent