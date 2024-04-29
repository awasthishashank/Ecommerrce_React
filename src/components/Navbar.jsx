import React ,{ useContext } from 'react';
import './Navbar.css';
import { CartContext } from '../cartContext/cartContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // const { cartItems } = useContext(CartContext);

  return (
    <>
    <div className='Navbar'>
      <ul className='navbar-list'>
        <li><Link to= {"/home"}>Home</Link></li>
        <li><Link to= {"/store"}>Store</Link></li>
        <li><Link to= {"/about"}>About</Link></li>
        <Link to ={"/cart"} className="cart-holder"> Cart <span className='cart-number'>0</span></Link>
      </ul>
      <h1>The Generics</h1>
    </div>
    </>
  );
};

export default Navbar;
