/** @format */

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <img src='src\assets\gsdr.svg' alt='' className='logop' />
        <h2>GeekFoods</h2>
      </div>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/Quotes'>Quote</Link>
        <Link to='/restaurants'>Restaurants</Link>
        <Link to=''>Foods</Link>
        <Link to=''>Contact</Link>
      </div>
      <div>
        <button className='btnGS'>Get Started</button>
      </div>
    </nav>
  );
}
export default Navbar;
