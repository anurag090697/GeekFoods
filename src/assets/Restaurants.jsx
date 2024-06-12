/** @format */

import restaurantlist from "./restaurantlist.json";
import RestaurantsCard from "./RestaurantCard";
import { useState } from "react";

function Restaurants() {
  const [stars, setstars] = useState(0);
  const [inputname, setinputname] = useState("");
  const [data, setData] = useState([...restaurantlist]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  function getFiltereddata(str) {
    let tm = restaurantlist.filter((ele) => {
      return ele.name.toLowerCase().includes(str.toLowerCase());
    });
    setData(tm);
    setCurrentPage(1); // Reset to first page after filtering
  }

  function getStaredRestaurant(num) {
    setstars(num);
    let tm = [...restaurantlist];
    let ans = tm.filter((ele) => {
      return ele.stars >= num;
    });
    setData(ans);
    setCurrentPage(1); // Reset to first page after filtering
  }

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClickPage = (page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className='restaurantsList'>
      <div className='inputform'>
        <input
          type='text'
          id='nameinput'
          placeholder='Search Restaurants....'
          onChange={(e) => getFiltereddata(e.currentTarget.value)}
        />
        <div>
          <label htmlFor='starinput'>Minimum Rating:</label>{" "}
          <input
            type='number'
            min={0}
            max={5}
            value={stars}
            name='starinput'
            id='starinput'
            onChange={(e) => getStaredRestaurant(e.currentTarget.value)}
          />
        </div>
      </div>
      <div className='restaurantsListcards'>
        {currentData.map((ele, index) => {
          return <RestaurantsCard key={index} data={ele}></RestaurantsCard>;
        })}
      </div>
      <div className='pagination'>
        <button onClick={handlePrevPage} disabled={currentPage === 1} className="button-8">
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handleClickPage(index + 1)}
            className={currentPage === index + 1 ? "active" : "smolbtn"}
            
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}  className="button-8">
          Next
        </button>
      </div>
    </div>
  );
}

export default Restaurants;
