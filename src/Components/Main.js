import React, {Component, useState} from 'react'
import CreateEvent from './CreateEvent'
import Title from './Title'
import SignIn from './SignIn'
import {Route, Routes} from 'react-router-dom';

class Main extends Component{
    constructor(){
        super()
        this.state = {
            posts:[{
                id: 0,
                Artists: "",
                Title: "",
                Location: "",
                Date: "",
                Prefecture: "",
            }]
        }
    }
    createEvent(eventSubmitted){
        console.log(eventSubmitted.title)
        this.setState((state) => ({
            posts: state.posts.concat([eventSubmitted])
        }))
    }
    
    render(){
        console.log(this.state.posts)
        return(
            <Routes>
                <Route path="/" element = {
                    <div>
                        <Title title = {['Γλεντοκόπος!']}/>
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