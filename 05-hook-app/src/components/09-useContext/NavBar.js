import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link to="/" className="navbar-brand" href="#">useContext</Link>
        
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink exact activeClassName="active" to="/" className="nav-link" href="#">Home </NavLink>
                    <NavLink exact activeClassName="active" to="/about" className="nav-link" href="#">About</NavLink>
                    <NavLink exact activeClassName="active" to="/login"  className="nav-link" href="#">Login</NavLink>
                </div>
            </div>
        </nav>
    )
}
