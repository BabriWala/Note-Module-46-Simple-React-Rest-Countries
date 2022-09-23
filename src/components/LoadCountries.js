import React from 'react';
import { useEffect, useState } from 'react';
import Country from './Country';
import './country.css';

const LoadCountries = () => {
    const [countries, setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])
  // console.log(countries[0])
    return (
        <div>
            <h1>Visiting Every Country of The World</h1>
            <h3>Available Countries: {countries.length}</h3>
            <div className='main-container'>
            {
              countries.map(country => <Country key={country.flag} population={country.population
              } country = {country}></Country>)
            }
            {/* {
              countries.map(country => <Country name={country.name.common} key={country.ccn4} area={country.area} population={country.population
              } country = {country}></Country>)
            } */}
            </div>
        </div>
    );
};

export default LoadCountries;