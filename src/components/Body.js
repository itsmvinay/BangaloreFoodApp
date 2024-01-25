import RestaurantCard from "./RestaurantCard";
// import resObj from '../utils/mocks/mock-data';
import Shimmer from "../components/Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import offlineOnlineStatus from '../utils/offlineOnlineStatus';

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredR, setFilteredR] = useState([]);

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);
  console.log("Body rendered");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9464492&lng=77.5597925&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // console.log('data',data);
    const json = await data.json();
    // console.log('json',json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredR(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };


  const internetStatus = offlineOnlineStatus();

  if(internetStatus === false) return (
      <div>
      <h1>Looks you are offline!</h1>
      </div>
  )

  // if(listOfRes.length === 0) {
  //     return <Shimmer />;
  // }

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <div className="filter">
          <input
            type="text"
            className="search-input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const searchedText = listOfRes.filter((val) =>
                val?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredR(searchedText);
            }}
          >
            search
          </button>
        </div>
        {/* <button className='top-res-btn'
                onClick = {() => {
                        const filteredRes = listOfRes.filter(
                            (res) => res?.info?.avgRating > 4.5
                        );
                        setListOfRes(filteredRes)
                    }}
                
                >Top Rated Restaurant</button> */}
      </div>
      <div className="res-container">
        {filteredR?.map((data) => (
          <Link key={data?.info?.id} to={"/restaurants/" + data?.info?.id}>
            <RestaurantCard resData={data} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
