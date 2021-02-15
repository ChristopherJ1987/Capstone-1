import React, {useState} from 'react';
import './App.css';
import Nav from './Components/Nav';
import Home from './Views/Home';
import Products from './Views/Products';
import ShoppingCart from './Views/ShoppingCart';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <Nav />
    <Route exact path="/" component={Home} />
    <Route exact path="/products" component={Products} />
    <Route exact path="/shoppingcart" component={ShoppingCart} />
    <Footer />
    </div>
    </Router>
    );
  }
  
  export default App;
  