/** @format */

import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";
import Quotes from "./Quotes.jsx";
import Restaurants from "./assets/Restaurants.jsx";
import Food from "./Food.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Quotes' element={<Quotes></Quotes>}></Route>
          <Route path='/restaurants' element={<Restaurants></Restaurants>}></Route>
          <Route path="/Food" element={<Food></Food>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
