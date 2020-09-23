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
        <a href="/"> <img className='logo' src={window.logoURL} /></a>
        <Link className="btn" to="/login"><button className='navbutton'>Log In</button></Link>
    </nav>
  );

  return (
      <nav className='nav-bar'>
        {display}
      </nav>
  );
};
