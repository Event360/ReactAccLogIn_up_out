import React,{Component} from 'react';
import './styles.scss';
import {signInWithGoogle,auth} from './../../firebase/utils';
import FormInput from './../forms/Forminput';

//import Button from './../Botton';

const initialState={
    email:'',
    password:''
}


class SignIn extends Component{

    constructor(props){
        super(props);
        this.state={
            ...initialState
        };

        this.handleChange=this.handleChange.bind(this);

    }

    handleChange(e){
        const {name, value}=e.target;
        this.setState({
            [name]:value
        });
    }

    handleSubmit=async e =>{
        e.preventDefault();
        const {email, password}=this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
               ...initialState
            });

        }catch(err){
            //console.log(err);
        }
    }
       


    render(){
        const {email, password}=this.state;
        return(
            <div className="signin">
                <div>
                    <h2 className="Txt">
                       LogIn
                    </h2>
     
                    <div classNmae="formWrap">
                        <form onSubmit={this.handleSubmit}>

                           <FormInput
                             type="email"
                             name="email"
                             value={email}
                             placeholder="Email"
                             handleChange={this.handleChange}
                           />

                           <FormInput
                             type="password"
                             name="password"
                             value={password}
                             placeholder="Password"
                             handleChange={this.handleChange}
                           />

                            <button type="submit" className="btn">
                                Login
                            </button>

                            <div classNmae="socialSignIn">
                               <div classNmae="row">
                                  <button onClick={signInWithGoogle} className="btn" >
                                      Sign in with Google
                                   </button>
                                 </div>
                            </div>
                        </form>
                  </div>    
                </div>
            </div>
         );
    }
     
}

export default SignIn;

