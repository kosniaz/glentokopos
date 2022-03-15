import React, {Component} from 'react'
import CreateEvent from './CreateEvent'
import Title from './Title'
import CreateButton from './CreateButton'
import {Route, Routes} from 'react-router-dom';
import SearchEvent from './SearchEvent';

class Main extends Component{
    constructor(){
        super()
        this.state = {
            posts:[{
                id: 0,
                Artists: "Λεοντίδης, Φιλιππάκης",
                Title: "Χοροεσπερίδα Μαργαρίτες",
                Location: "μαργαρίτες",
                Date: "2022-08-15",
                Prefecture: "Ρέθυμνο",
            },
            {
                id: 0,
                Artists: "Μαρούλης, Κατσουλιέρης",
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
            }],

            artists:[{
                Artist:"Λεοντίδης",
                id:"1"
            },
            {
                Artist: "Φιλιππάκης",
                id:"2"   
            },
            {
                Artist:"Μαρούλης",
                id:"3"
            },
            {
                Artist:"Κατσουλιέρης",
                id:"4"
            },
            {
                Artist: "Tumani Diabate",
                id:"5"   
            },
            {
                Artist:"Πεπε",
                id:"6"
            }]
        }
    }
    
    createEvent(eventSubmitted){

        // Add new entries to events' table
        this.setState((state) => ({
            posts: state.posts.concat([eventSubmitted])
        }))

        // Add new entries to artists' table
        eventSubmitted.artists.map(obj => { 
            if(obj.__isNew__){
                console.log(obj.value);
                const eachnew = {
                    Artist: obj.value,
                    id: Number(new Date())}
                console.log(eachnew)
                this.setState((state) => ({
                    posts: ([eventSubmitted]),
                    artists: state.artists.concat([eachnew])
                }))
            }
        })
    }

    // createUser(userSubmitted){
    //     console.log(userSubmitted)
    //     this.setState((state) => ({
    //         users: state.users.concat([userSubmitted])
    //     }))
    // }

    searchEvent(criteria){
    // Search by artist - can search only by one artist, needs map() 
        var resultslist = this.state.posts.filter(
            obj=> obj.Artists.includes(
                criteria.artists.map(
                    obj => obj.value)
            )
        )
        console.log(resultslist)
    }

    render(){
        return(
            <Routes>
                <Route path="/" element = {
                    <div>
                        <Title title = {['Γλεντοκόπος!']}/>
                        <SearchEvent onSearchEvent = {(searchCriteria) =>this.searchEvent(searchCriteria)} artists={this.state.artists}/>
                        <CreateButton/>
                    </div>
                }/>
                <Route path="/CreateEvent" element = {
                    <div>
                        <CreateEvent onCreateEvent = {(addedPost) =>this.createEvent(addedPost)} artists={this.state.artists} />
                    </div>
                }/>

                {/* Section for Sign In & Sign Up */}
                {/* <Route path="/SignIn" element = {
                    <div>
                        <SignIn/>
                    </div>
                }/><Route path="/SignUp" element = {
                    <div>
                        <SignUp onCreateUser = {(addedUser) =>this.createUser(addedUser)}/>
                    </div>
                }/> */}
                
            </Routes>
        )
    }
}
export default Main