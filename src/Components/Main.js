import React, {Component} from 'react'
import CreateEvent from './CreateEvent'
import Title from './Title'
import CreateButton from './CreateButton'
import {Route, Routes} from 'react-router-dom';
import SearchEvent from './SearchEvent';
import Register from './Register';
import SignIn from './SignIn';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import SignButtons from './SignButtons';

class Main extends Component{
    
    componentDidMount(){
        this.props.startLoadingPost()
    }
    
    login(){

    }

    
    async onRegister(Email, Password){
        let auth = getAuth();
        try{
            const newUser = await createUserWithEmailAndPassword(auth, Email, Password)
            console.log(newUser)
        }catch(error){
            console.log(error.message);
        }
    }


    logout(){

    }

    render(){
        return(
            <Routes>
                <Route path="/" element = {
                    <div>
                        <Title title = {['Γλεντοκόπος!']}/>
                        <SearchEvent {...this.props}  table = {this.props.posts}/>
                        <CreateButton/><SignButtons/>
                    </div>
                }/>
                <Route path="/createvent" element = {
                    <div>
                        <CreateEvent {...this.props} table = {this.props.posts}  />
                    </div>
                }/>

                {/* Section for Sign In & Sign Up */}
                <Route path="/signin" element = {
                    <div>
                        <SignIn/>
                    </div>
                }/><Route path="/register" element = {
                    <div>
                        <Register onCreateUser = {(Email, Password) =>this.onRegister(Email, Password)}/>
                    </div>
                }/>
                
            </Routes>
        )
    }
}
export default Main