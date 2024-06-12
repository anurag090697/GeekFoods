/** @format */

import restaurantlist from "./restaurantlist.json";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
function RestaurantsCard(props) {
  let stars = props.data.stars;
  let address = [
    "1234 Elm Street, California, Los Angeles",
    "5678 Oak Avenue, Texas, Houston",
    "9101 Pine Boulevard, Florida, Miami",
    "2345 Maple Lane, New York, New York City",
    "6789 Birch Road, Illinois, Chicago",
    "3456 Cedar Drive, Nevada, Las Vegas",
    "7890 Spruce Court, Arizona, Phoenix",
    "4567 Redwood Way, Washington, Seattle",
    "8901 Aspen Street, Colorado, Denver",
    "5670 Willow Place, Georgia, Atlanta",
    "7410 Hickory Circle, Oregon, Portland",
    "8521 Sycamore Avenue, Virginia, Richmond",
    "9632 Poplar Drive, Ohio, Columbus",
    "1743 Chestnut Street, Pennsylvania, Philadelphia",
    "2854 Cypress Lane, Michigan, Detroit",
    "3965 Magnolia Road, Massachusetts, Boston",
    "5076 Palm Avenue, North Carolina, Charlotte",
    "6187 Elmwood Street, Tennessee, Nashville",
    "7298 Ash Drive, Missouri, St. Louis",
    "8309 Walnut Circle, Minnesota, Minneapolis",
    "9410 Juniper Lane, Indiana, Indianapolis",
    "1052 Fir Street, Louisiana, New Orleans",
    "2163 Olive Avenue, Alabama, Birmingham",
    "3274 Pinecone Drive, Wisconsin, Milwaukee",
    "4385 Alder Road, Kansas, Wichita",
    "5496 Maplewood Street, Nevada, Reno",
    "6507 Redwood Circle, Kentucky, Louisville",
    "7618 Dogwood Lane, Oklahoma, Oklahoma City",
    "8729 Beechwood Street, Iowa, Des Moines",
    "9840 Sequoia Avenue, Arkansas, Little Rock",
    "1061 Cedar Court, Utah, Salt Lake City",
    "2172 Linden Street, New Mexico, Albuquerque",
    "3283 Willow Lane, Nebraska, Omaha",
    "4394 Birchwood Avenue, West Virginia, Charleston",
    "5505 Hawthorn Drive, South Dakota, Sioux Falls",
    "6616 Ironwood Circle, North Dakota, Fargo",
    "7727 Hemlock Street, Maine, Portland",
    "8838 Chestnut Lane, Vermont, Burlington",
    "9949 Locust Avenue, Montana, Billings",
    "1101 Birch Drive, Idaho, Boise",
  ];
  return (
    <div className='cafeCard'>
      <div className='cardtop'>
        <h2>{props.data.name}</h2>
        <span>
          {" "}
          {[1, 2, 3, 4, 5].map((ele, index) => {
            return (
              <FaStar
                className={index < stars ? "goldstar" : "whitestar"}
                key={index}
              />
            );
          })}
        </span>
        <p>
          <FaLocationDot />
          {address[Math.floor(Math.random() * 40)]}
        </p>
        <p>{props.data._id.$oid.substr(-6, 6)}</p>
      </div>
      <div className='cardbtm'>
        <p>
          <ImSpoonKnife />
          {props.data.categories[0]}
        </p>
        <a href=''>Visit Menu</a>
      </div>
    </div>
  );
}
export default RestaurantsCard;
