import React from 'react';
import Mover from  './../../assets/cover.jpg';
import Civil from  './../../assets/civil.jpg';
import Elec from  './../../assets/Elec.jpg';

import './styles.scss'

const Services = props => {
    return (
      <div className="Services">
          <h1>Services</h1>
          <div className="row">
          
            <div id="column">
            <img src={Civil} id="sbg" alt="cver"/>
            <p>Civil structural engineering services</p>
      
            </div>
              
            <div id="column">
            <img src={Elec} id="sbg" alt="cver" />
            <p>Electrical wiring and installation services</p>
            </div>

            <div id="column">
            <img src={Mover} id="sbg" alt="cver" />
            <p>Automobile Engineering</p>
            </div>

          </div>  
        </div>
    );
};

/*<img src={Cover} id="sbg" alt="cver" />*/
export default Services;
