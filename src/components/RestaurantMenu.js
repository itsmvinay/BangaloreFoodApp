// import { useState, useEffect } from "react";
import Shimmer from "../components/Shimmer";
import useRestaurantMenu from '../utils/useRestaurantMenu';
// import { MENU_API } from "../utils/urls/url";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

// const [resInfo, setResInfo] = useState(null);
const { resId } = useParams();

//     useEffect(() => {
//         fetchMenu();
//     }, []);


// const fetchMenu = async () => {
//     const data = await fetch(MENU_API + resId);
//     const json = await data.json();
//     console.log(json);
//     setResInfo(json);
// };

const resInfo = useRestaurantMenu(resId);

if(resInfo === null) {
    return <Shimmer />
} 

const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.info;
  return (
    <div>
      <h3>{name }</h3>
      <p>{cuisines.join(",")} - {costForTwoMessage}</p>
    </div>
  );
};

export default RestaurantMenu;
