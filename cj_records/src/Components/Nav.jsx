import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import logo from './logo.png';

function Nav() {
    return (
        <nav className="nav-bar">
            <img className="logo" src={logo} />
            <ul className="nav-links">
                <Link to="/"><li>Home</li></Link>
                <Link to="/products"><li>Products</li></Link>
                <Link to="/shoppingcart"><li>Shopping Cart</li></Link>
            </ul>
        </nav>
    )
}

export default Nav