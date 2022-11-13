import React from 'react';
import { Route,Routes } from 'react-router';
import Home from './Home';
import AboutUs from './Aboutus';
import Login from './Login';
import SignUp from './signup';
import Shop from './Shop';
import Cart from './Cart';

const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/category" element={<Home/>}/>
        <Route path="/contact" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/cart" element={<Cart/>}/>
    </Routes>
  )
}

export default Allroutes