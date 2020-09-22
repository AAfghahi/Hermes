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
    <nav>
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Log In</Link>
    </nav>
  );

  return (
      <div className='nav-bar'>
        {display}
      </div>
  );
};
