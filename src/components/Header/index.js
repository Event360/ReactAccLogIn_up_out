import React from 'react';
import './styles.scss';
import Logo from './../../assets/logo.jpg';
import {Link} from 'react-router-dom';
import {auth} from './../../firebase/utils';

const Header =  props => {
   const {currentUser}=props;
   return (
      <header className="header">
        <div className="wrap">
           <div className="logo">
              <Link to="/">
                <img src={Logo}  alt="Simpletu LOGO" />
              </Link>
           </div>

           <div className="callToActions">

            {currentUser && (
                  <ul>
                  <li>
                     <span onClick={()=>auth.signOut()}> 
                     <Link to="/">
                     Logout
                     </Link>
                     </span>
                  </li>
                  </ul>
            )}

             {!currentUser && (
                <ul>
                <li>
                <Link to="/registration">
                   Register
                </Link>  
                </li>
                <li>
                <Link to="/login">
                   login
                </Link>  
                </li>
             </ul>
             )}
            
           </div>
         </div>
      </header>
   );
};
Header.defaultProps={
   currentUser:null
};

export default Header;
