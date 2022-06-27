import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className='page-logo'>
        <Link to='/'>
        <img className="PageLogo-img" src="https://cdn.corporate.walmart.com/12/9d/06ecf3584e91acccc37162f09714/logowhite.svg" alt="Walmart Homepage" height="28" />
        </Link>
        </div>
    </nav>
  )
}
