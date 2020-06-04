import React, {Component} from 'react';
import {OBJModel} from 'react-3d-viewer';
import Image from './../../assets/motor.obj';
import './styles.scss';

class Dashboard extends Component{

    render(){
        return(
           <div>
            <div>
               <h2>
                  Dashboard
               </h2>    
            </div>
            <div>
              <OBJModel src={Image} texpath=""/>  
            </div>
          </div>
        );
    }  
}

export default Dashboard;
