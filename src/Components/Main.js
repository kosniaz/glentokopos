import React, {Component} from 'react'
import CreateEvent from './CreateEvent'
import Title from './Title'
import CreateButton from './CreateButton'
import {Route, Routes} from 'react-router-dom';
import SearchEvent from './SearchEvent';

class Main extends Component{
    
    // createEvent(eventSubmitted){

    //     // Add new entries to events' table
    //     this.setState((state) => ({
    //         posts: state.posts.concat([eventSubmitted])
    //     }))

    //     // Add new entries to artists' table
    //     // State doesn't update soon so search can't be completed maybe Navigation from other function is the problem 
    //     eventSubmitted.artists.map(obj => { 
    //         if(obj.__isNew__){
    //             console.log(obj.value);
    //             const eachnew = {
    //                 Artist: obj.value,
    //                 id: Number(new Date())}
    //             console.log(eachnew)
    //             this.setState((state) => ({
    //                 posts: ([eventSubmitted]),
    //                 artists: state.artists.concat([eachnew])
    //             }))
    //         }
    //     })
    // }

    // // createUser(userSubmitted){
    // //     console.log(userSubmitted)
    // //     this.setState((state) => ({
    // //         users: state.users.concat([userSubmitted])
    // //     }))
    // // }

    // searchEvent(criteria){

    // // Search by artist - return this values (criteria) to back end
    //     let artistlist = criteria.artists.map(obj => obj.value)
    //     let date = criteria.date
    //     let prefecture = criteria.prefecture

    //     console.log(artistlist, date, prefecture)        
        
    //     // Front end searching is bad idea due to big volume of fetching from database
    //     // var resultslist = this.state.posts.filter(
    //     //     obj=> obj.Artists.includes(
    //     //         criteria.artists.map(obj => obj.value)
    //     //     )
    //     // )
    //     // console.log(resultslist)

    // }
    componentDidMount(){
        this.props.startLoadingPost()
    }
    
     

    render(){
        return(
            <Routes>
                <Route path="/" element = {
                    <div>
                        <Title title = {['Γλεντοκόπος!']}/>
                        <SearchEvent {...this.props}  table = {this.props.posts}/>
                        <CreateButton/>
                    </div>
                }/>
                <Route path="/CreateEvent" element = {
                    <div>
                        <CreateEvent {...this.props} table = {this.props.posts}  />
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