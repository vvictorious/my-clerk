import React from 'react'
import './Card.css';

export const Card = ({user, cardColor}) => {
    return (
        <div className={`card ${cardColor}`} key={user.login.uuid}>
            <img className='picture' src={user.picture.large} alt='profile-picture' />
            <p className='name'>{user.name.first} {user.name.last}</p>
            <p className='email'>{user.email}</p>
            <p className='cell'>{user.cell}</p>
            <p className='location'>{user.location.city}, {user.location.state}</p>
        </div>            
    )
}

