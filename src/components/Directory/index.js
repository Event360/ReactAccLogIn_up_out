
import React from 'react';
import Cover from  './../../assets/eng.jpg';
import './styles.scss'

const Directory = props => {
    return (
      <div className="directory">
          <div className="wrap">
            <div
              classNmae="item"
              >
              <img src={Cover} id="bg" alt="cver" />
                <div className="centered">Ai thena</div>  
              </div>
          </div>  
        </div>
    );
};


export default Directory;

/*
 <div className="directory">
          <div className="wrap">
            <div
              classNmae="item"
                style={{
                 backgroundImage : `url(${Cover})`
                 }}
              >
              <p>hfthfdjdfjhghd   DHIS2 has released a digital data package to accelerate case detection, situation reporting, active surveillance and response for COVID-19. The package is inspired by the Ministry of Health Sri Lanka’s pioneering design of DHIS2 tracker for COVID-19 case detection and draws on years of collaboration with the World Health Organisation (WHO) to develop information system standards for case-based disease surveillance. The COVID-19 digital data package includes standard metadata aligned with the WHO’s technical guidance on COVID-19 surveillance and case definitions and implementation guidance to enable rapid deployment in countries.  fh</p>
             </div>
          </div>  
        </div>
*/