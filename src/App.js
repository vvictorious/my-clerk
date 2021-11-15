import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Carousel from 'react-elastic-carousel';
import { Card } from './Card'


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

      <Carousel>
        {users ? users.map(user => (<Card user={user} key={user.login.uuid} />)) :(<h1>No Users</h1>)}         
      </Carousel>
    </div>
  );
}

export default App;

