import React from 'react';
import Directory from './../../components/Directory';
import Services from './../../components/Services';
import './styles.scss';

const Homepage = props => {
    return (
        <section className="homepage">
            <Directory/>
            <Services/>

        </section>
    );
};

export default Homepage;
