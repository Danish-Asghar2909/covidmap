// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import './Navbar.css';

const Navbar = ({ loggedIn, handleLogout }) => {
    return (
        <nav className="navbar">
            <div className="navbar__left">
                <Link to="/" className="navbar__logo">Logo</Link>
            </div>
            {loggedIn ? (
                <div className="navbar__right">
                    <Link to="/" className="navbar__link">Dashboard</Link>
                    <Link to="/about" className="navbar__link">About</Link>
                    <Avatar>{/* Display user's avatar here */}</Avatar>
                    <Link to="/" onClick={handleLogout} className="navbar__link logout">Logout</Link>
                </div>
            ) : (
                <div className="navbar__right">
                    <Link to="/login" className="navbar__link">Login</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
