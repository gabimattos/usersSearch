import React from 'react';
import './Card.css';

const UserCard = ({user}) => (
    <div className="userCard">
        <h3 className="userName">{user.name}</h3>

        <div className="companyEmail">
            <p className="company">{user.company}</p>
            <p className="email">{user.email}</p>
        </div>
        
        <div className="locationBlog"> 
            <p className="location">{user.location}</p>
            <a className="blog" href={user.blog}> {user.blog}</a>
        </div> 

        <p className="bio" >{user.bio}</p>

    </div>

);

export default UserCard;

