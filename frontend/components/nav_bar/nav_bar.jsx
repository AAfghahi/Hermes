import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <nav>
      <h2>
        <p>Hello, {currentUser.username}</p>
        <button onClick= {logout}>Logout</button>
      </h2>
    </nav>
  ) : (
    <nav className='innerbar'>
        <img className='logo' src={window.logoURL} />
        <button className='navbutton'><Link className="btn" to="/login">Log In</Link></button>
    </nav>
  );

  return (
      <nav className='nav-bar'>
        {display}
      </nav>
  );
};
