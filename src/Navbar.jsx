/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

function NavBar() {
  return (
    <nav>
      <div>
        <img src='src\assets\gsdr.svg' alt='' className='logop' />
        <h2>GeekFoods</h2>
      </div>
      <div>
        <NavLink exact to='/' activeClassName='active'>
          Home
        </NavLink>
        <NavLink to='/Quotes' activeClassName='active'>
          Quote
        </NavLink>
        <NavLink to='/restaurants' activeClassName='active'>
          Restaurants
        </NavLink>
        <NavLink to='/Food' activeClassName='active'>
          Foods
        </NavLink>
        <NavLink to='/contact' activeClassName='active'>
          Contact
        </NavLink>
      </div>
      <div>
        <button className='btnGS'>Get Started</button>
      </div>
    </nav>
  );
}

export default NavBar;
