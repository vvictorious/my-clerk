import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Carousel, {consts} from 'react-elastic-carousel';
import { Card } from './Card'


const App = () => {

  const [loading, setLoading] = useState(false) 
  const [users, setUsers] = useState(null) 
  
  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},

  ]

  console.log(users)

  useEffect( () => {
    setLoading(true)
    axios.get('https://randomuser.me/api/?results=6')
      .then( response => {
        setUsers(response.data.results)
      })
      .finally( () => {
        setLoading(false)
      })
  }, [])

  const fetchMoreUsers = () => {
    console.log('fetch more users ran')
    axios.get('https://randomuser.me/api/?results=6')
      .then( response => {
        response.data.results.forEach( user => {
          setUsers(users => [...users, user])
        })
      })
  }

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? '<' : '>'
      if(isEdge && type === consts.NEXT && users?.length >= 6 && users?.length <= 100) {
        fetchMoreUsers()
      }
    return (
      <button className='btn' onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    )
  }
  

  if (loading) {
    return (
      <h1>Loading...</h1>
    )
  } else {
    return (
      <div className="App">
        <h1>My Clerks</h1>
  
        <Carousel breakPoints={breakPoints} renderArrow={myArrow}>
          {users ? users.map(user => (<Card user={user} key={user.login.uuid} />)) :(<h1>No Users</h1>)}         
        </Carousel>
      </div>
    );
  }

}

export default App;

