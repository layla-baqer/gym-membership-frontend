import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  const homePage = (user) => {
    axios.post('http://localhost:8000')
    .then (res => {
      console.log(res.json)
    })
    .catch(err => {
      console.log(err)
    })
  }


  return (
    <div className="App">
      {homePage()}
    </div>
  );
}

export default App;
