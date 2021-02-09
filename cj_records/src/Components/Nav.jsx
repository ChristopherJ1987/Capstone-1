import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to="/"><li>Home</li></Link>
                <Link to="/products"><li>Products</li></Link>
                <Link to="/shoppingcart"><li>Shopping Cart</li></Link>
            </ul>
        </nav>
    )
}

export default Nav