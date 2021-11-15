import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Carousel from 'react-elastic-carousel';
import './App.css';

const App = () => {

  const [users, setUsers] = useState(null)  

  console.log(users)

  useEffect( () => {
    axios.get('https://randomuser.me/api/?results=3')
      .then( response => {
        setUsers(response.data.results)
      })
  }, [])

  return (
    <div className="App">
      <h1>My Clerks</h1>
    </div>
  );
}

export default App;

