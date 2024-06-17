/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";

function Food() {
  const [foods, setFoods] = useState([]);
  const [foodSearch, setFoodSearch] = useState("recipes-new");
  const [dishes, setDishes] = useState("");
  const [inputValue, setInputValue] = useState("");

  async function getData() {
    const options = {
      method: "GET",
      url: `https://recipe-book2.p.rapidapi.com/${foodSearch}`,
      params: {
        query: dishes,
        page: "1",
      },
      headers: {
        "x-rapidapi-key": "a09def0f2emshdcc7e36f69fdb60p1b1885jsnd064a990f9c8",
        "x-rapidapi-host": "recipe-book2.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setFoods(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, [foodSearch, dishes]);

  function searchFood() {
    setFoodSearch("search-recipes");
    setDishes(inputValue);
    setInputValue("");
  }

  return (
    <>
      <div className='foodSearch'>
        <button onClick={() => setFoodSearch("recipes-new")}>New Foods</button>
        <button onClick={() => setFoodSearch("recipes-popular")}>
          Popular Foods
        </button>
        <div>
          {/* <label htmlFor='dishinput'>Search Dishes </label> */}
          <input
            placeholder='eg.pizza,pasta...'
            type='text'
            name='dishinput'
            id='dishinput'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={searchFood}>Search</button>
        </div>
      </div>
      <div className='foods'>
        {foods.length > 0 ? (
          foods.map((ele, idx) => (
            <div key={idx} className='onefood'>
              <img src={ele.image} alt='' />
              <h2>{ele.title}</h2>
            </div>
          ))
        ) : (
          <h1>Please Wait.......</h1>
        )}
      </div>
    </>
  );
}

export default Food;
