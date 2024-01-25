import { CDN_URL } from "../utils/urls/url";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <h3>{resData?.info?.name}</h3>
      <img className="res-logo" src={CDN_URL + resData?.info?.cloudinaryImageId} />
      <h4>{resData?.info?.cuisines.join(",")}</h4>
      <h4>{resData?.info?.avgRatingString}</h4>
      <h4>{resData?.info?.costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
