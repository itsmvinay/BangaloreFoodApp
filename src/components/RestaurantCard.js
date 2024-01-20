import { CDN_URL } from "../utils/urls/url";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <h3>{resData.name}</h3>
      <img className="res-logo" src={CDN_URL + resData.cloudinaryImageId} />
      <h4>{resData.cuisines.join(",")}</h4>
      <h4>{resData.avgRatingString}</h4>
      <h4>{resData.costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
