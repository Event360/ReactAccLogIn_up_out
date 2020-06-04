import React, {Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import './default.scss';
import {auth, handleUserProfile} from './firebase/utils';
import Header from './components/Header';
import Footer from './components/Footer';

import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Dashboard from './pages/dashboard';
import Login from './pages/Login';

const initialState={
  currentUser:null
};


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      ...initialState
    };
  }

  authListener=null;

  componentDidMount() {
     this.authListener=auth.onAuthStateChanged(async userAuth=>{
       if(userAuth){
         const userRef=await handleUserProfile(userAuth)
         userRef.onSnapshot(snapshot=>{
           this.setState({
             currentUser:{
               id:snapshot.id,
               ...snapshot.data()
             }
           })
         })
       }

       this.setState({
         ...initialState
       });
       /*if(!userAuth){
          this.setState({
            ...initialState
          });
       };

       this.setState({
         currentUser:userAuth
       });*/

     });
  }

  componentWillUnmount(){
     this.authListener();
  }

  render(){

    const {currentUser}=this.state;

    return (
      <div className="Ap">
        <Header currentUser={currentUser}/> 
        <div className= "main">
          <Switch>
           <Route exact path="/" component={Homepage} />
           <Route path="/registration"
           render={()=>currentUser?<Redirect to ="/dashboard"/>:(
             <Registration/>
           )}
           />
           <Route path="/login" 
            render={()=> currentUser?<Redirect to="/dashboard"/>:(
                  <Login/>
            )}/>
            <Route path="/dashboard" component={Dashboard} />
           </Switch>
         </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
