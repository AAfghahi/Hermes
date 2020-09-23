import React from 'react';
import { Link, useLocation } from 'react-router-dom';


export default ({ currentUser, logout }) => {
  const location = useLocation();
  
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
        {location.pathname === "/login" ? (
          <Link className="btn" to="/sign"><button className='navbutton'> Sign Up </button></Link>) : (
          <Link className="btn" to="/login"><button className='navbutton'> Log In </button></Link>)
          }
    </nav>
  );

  return (
      <nav className='nav-bar'>
        {console.log(location.pathname)}
        {display}
      </nav>
  );
};
