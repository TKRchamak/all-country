import React from 'react';
import './country.css'

const Country = (props) => {
    const country = props.country;
    // const flag = country.flag;
    const { flag, population} = country;
    const addCountry = props.addCountry;

    return (
        <div className='countyStyle'>
            <img src= {flag} alt="images"/>
            <h3>population: {population}</h3>
            <br/>
            <button className='countryButton' onClick={() => addCountry(props.country)}>{country.name}</button>

        </div>
    );
};

export default Country;