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

      <div className='navbar-dropdown'>
        <div className='dashboard'>
        <label> Dashboard </label>
        <select className='activity-dropdown'></select>
        </div>
        
          <div className='navbar-content'>
            <p className='navbar-links'><Link className='navbar-linkname'>Activity Feed</Link></p>
            <p className='navbar-links'><Link className='navbar-linkname'>My Workouts</Link></p>
            <p className='navbar-links'><Link className='navbar-linkname' to='/routes'> My Routes</Link></p>
          </div>
      </div>  

        
          <div className='logout-create-dropdown'>
        <button className='add-dropdown-button'> +</button>
          <div className='add-content'>
            <button className='add-button'><Link className='droplink' to='/routes/create'>Create a Route</Link></button>
              
            <button className='add-button' onClick={logout}>Log Out</button>
          </div>

          
      </div>
      
    </nav>
  )

  return (
  
      <nav className='nav-bar'>
        {currentUser ? loggedIn : display}
      </nav>
  );
};
