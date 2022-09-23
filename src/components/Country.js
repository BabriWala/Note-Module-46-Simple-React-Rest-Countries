import React from 'react';
import './country.css';

const Country = (props) => {
    // console.log(props.country);
    const {name, area, flags} = props.country;
    return (
        <div className='container'>
            <img className='flags' src={flags.png} alt="" />
            <h2>Name: {name.common}</h2>
            <p>Area: {area}</p>
            <p>Population: {props.population}</p>
        </div>
    );
};

export default Country;