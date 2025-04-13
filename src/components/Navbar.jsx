import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.scss';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Fantasy Miniatures</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li> 
        
        
          
         {user ? (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li>
              <button onClick={logout} className="logout-btn">Logout</button>
            </li>
          </>
        ) : (  
          <li><Link to="/login">Login</Link></li> 
         
        )}
      </ul>
    </nav>
  );
}
