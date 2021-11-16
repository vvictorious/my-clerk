import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Carousel, {consts} from 'react-elastic-carousel';
import { Card } from './Card'
import Select from 'react-select'


const App = () => {

  const [loading, setLoading] = useState(false) 
  const [users, setUsers] = useState(null) 
  const [cardColor, setCardColor] = useState('lightblue') 
  
  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
  ]

  const options = [
    { value: 'lightblue', label: 'Light Blue' },
    { value: 'lightgreen', label: 'Light Green' },
    { value: 'lightgrey', label: 'Light Grey' }
  ]

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

  useEffect( () => {
    const data = localStorage.getItem('card-color')
    if (data) {
      setCardColor(data)
    }
  }, [])

  useEffect( () => {
    localStorage.setItem('card-color', cardColor)
  })

  const fetchMoreUsers = () => {
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

  const defaultValue = () => {
    const defaultColor = options.filter(color => color.value === cardColor) 
    console.log(defaultColor)
    return defaultColor
  }

  if (loading) {
    return (
      <h1>Loading...</h1>
    )
  } else {
    return (
      <div className="App">
        <h1>My Clerks</h1>
        
        <div className='select-container'>
          <Select onChange={e => setCardColor(e.value) } defaultValue={defaultValue}  className='select' options={options}  />
        </div>
  
        <Carousel breakPoints={breakPoints} renderArrow={myArrow}>
          {users ? users.map(user => (<Card cardColor={cardColor} user={user} key={user.login.uuid} />)) :(<h1>No Users</h1>)}         
        </Carousel>
      </div>
    );
  }

}

export default App;