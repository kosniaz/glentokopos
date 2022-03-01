import React, {Component, useState} from 'react'
import CreateEvent from './CreateEvent'
import Title from './Title'
import SignIn from './SignIn'
import {Route, Routes} from 'react-router-dom';
import SearchEvent from './SearchEvent';

class Main extends Component{
    constructor(){
        super()
        this.state = {
            posts:[{
                id: 0,
                Artists: "Μαρούλης, Κατσουλιέρης",
                Title: "Χοροεσπερίδα Μαργαρίτες",
                Location: "μαργαρίτες",
                Date: "2022-08-15",
                Prefecture: "Ρέθυμνο",
            },
            {
                id: 0,
                Artists: "Λεοντίδης, Φιλιππάκης",
                Title: "Βραδιά εν πλω στο Αρκάδι",
                Location: "Πλοίο Αρκάδι",
                Date: "2022-09-06",
                Prefecture: "Ηράκλειο",
            },
            {
                id: 0,
                Artists: "Tumani Diabate",
                Title: "African harp evening",
                Location: "Mπali",
                Date: "2022-12-12",
                Prefecture: "Ρέθυμνο",
            },
            {
                id: 0,
                Artists: "Πεπε",
                Title: "καντο καντο",
                Location: "Καστέλι",
                Date: "2022-01-11",
                Prefecture: "Χανιά",
            }]
        }
    }
    createEvent(eventSubmitted){
        console.log(eventSubmitted)
        this.setState((state) => ({
            posts: state.posts.concat([eventSubmitted])
        }))
    }

    searchEvent(criteria){
        console.log(criteria)
    }

    render(){
        console.log(this.state.posts)
        return(
            <Routes>
                <Route path="/" element = {
                    <div>
                        <Title title = {['Γλεντοκόπος!']}/>
                        <SearchEvent onSearchEvent = {(searchCriteria) =>this.searchEvent(searchCriteria)} posts={this.state.posts}/>
                        <SignIn/>
                    </div>
                }/>
                <Route path="/CreateEvent" element = {
                    <div>
                        <CreateEvent onCreateEvent = {(addedPost) =>this.createEvent(addedPost)}/>
                    </div>
                }/>
            </Routes>
        )
    }
}

export default Main