import React from 'react';
import './Navbar.css';

const Navbar = () => {

  return (
    <>
    <div className='Navbar'>
      <ul className='navbar-list'>
        <li><a href="/">Home</a></li>
        <li><a href="/store">Store</a></li>
        <li><a href="/about">About</a></li>
        <a href="#cart" class="cart-holder">cart<span class='cart-number'>0</span></a>
      </ul>
      <h1>The Generics</h1>
    </div>
    </>
  );
};

export default Navbar;
