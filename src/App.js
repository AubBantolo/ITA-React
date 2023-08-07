import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const cars = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Audi'}
  ];

  const inputName = (event) => {
    setName(event.target.value);
  }

  const handleNameSubmit = (event) => {
    event.preventDefault();
    setSubmittedName(name);
  };

  return (
    <div className="App">
     <p>Enter your name: {submittedName} </p>
     <form onSubmit={handleNameSubmit}>
        <input id="name" type="text" value={name} onChange={inputName}/>
        <input className="submit" type="submit" value="Login"/>
      </form>

    <h2>Who lives in my garage?</h2>
            <ul>
            {cars.map((car) => (
              <li key={car.id}>
                I am a {car.brand}
              </li>
            ))}
          </ul>
    </div>
  );
}

export default App;
