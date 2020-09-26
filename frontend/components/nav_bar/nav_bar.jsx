import React from 'react';
import { Link, useLocation } from 'react-router-dom';


export default ({ currentUser, logout }) => {
  
  const location = useLocation();
  const display = (
    
    <nav className='innerbar'>
        <a href="/"> <img className='logo' src={window.logoURL} /></a>  

        {location.pathname === "/login" ? (
          <Link className="btn" to="/signup"><button className='navbutton-signup'> Sign Up </button></Link>) : (
          <Link className="btn" to="/login"><button className='navbutton'> Log In </button></Link>)}
        
          
    </nav>
  );

  const loggedIn = (
    <nav className='innerbar'>

      <a href="/"> <img className='logo' src={window.logoURL} /></a>  
      <button className='navbutton' onClick={logout}>Log Out</button>
    </nav>
  )

  return (
  
      <nav className='nav-bar'>
        {currentUser ? loggedIn : display}
      </nav>
  );
};
