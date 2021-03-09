import React from 'react';

const Important = (props) => {
    const choosenCountry = props.choosenCountry;
    let totalPopulation = 0;
    for (let i = 0; i < choosenCountry.length; i++) {
        const element = choosenCountry[i];
        totalPopulation = totalPopulation + element.population;
    }
    return (
        <div>
            <h2>this countrys are most important: </h2>
            <p>Total population : {totalPopulation}</p>
        </div>
    );
};

export default Important;