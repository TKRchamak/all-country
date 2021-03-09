import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './component/Country/Country';
import Important from './component/Important/Important';

function App() {
  const [countries, setCountry] = useState([]);
  const [choosenCountry, setChoosenCountry] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountry(data))
  },[]);

  const addCountry = (country) => {
    const addCountry = [...choosenCountry , country];
    setChoosenCountry(addCountry);
  }

  return (
    <div className="App">
      <h2>Total Country in the World : {countries.length}</h2>
      <h4>Need Country Detail: {choosenCountry.length}</h4>
      <Important choosenCountry={choosenCountry}></Important>
      <div>
        {
          countries.map(country => <Country country={country} addCountry={addCountry}></Country> )
        }
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
