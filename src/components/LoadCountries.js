import React from 'react';
import { useEffect, useState } from 'react';
import Country from './Country';

const LoadCountries = () => {
    const [countries, setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])
  // console.log(countries)
    return (
        <div>
            <h1>Visiting Every Country of The World</h1>
            <h3>Available Countries: {countries.length}</h3>
            {/* {
              countries.map(country => <Country>)
            } */}
        </div>
    );
};

export default LoadCountries;