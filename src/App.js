import React, { useState } from 'react';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './Screens/Home';
import './components/NavBar.css';
import Who from './Screens/Who';
import Products from './Screens/Products';
import User from './Screens/User';
import Cart from './Screens/Cart';
import ProductList from './Screens/Products.jsx';



function App(){


  return (
    <div>
      
      <Router>
          <NavBar />
          <Routes>
              <Route path="/" exact component={<Home/>} />
              <Route path="/Home" element={<Home/>}/>              
              <Route path="/Who" element={<Who/>}/>
              <Route path="/Products" element={<Products/>}/>
              <Route path="/Products" element={<ProductList/>}/>
              <Route path="/User" element={<User/>}/>
              <Route path="/Cart" element={<Cart/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
