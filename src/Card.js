import React from 'react'
import './Card.css';

export const Card = ({user}) => {
    return (
        <div className='card' key={user.login.uuid}>
            <img className='picture' src={user.picture.large} alt='profile-picture' />
            <p className='name'>{user.name.first} {user.name.last}</p>
            <p className='email'>{user.email}</p>
            <p className='cell'>{user.cell}</p>
            <p className='location'>{user.location.city}, {user.location.state}</p>
        </div>            
    )
}

