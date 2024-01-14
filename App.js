import React from 'react';
import ReactDOM from 'react-dom/client';

const resObj = [
    {
            id: "18970",
            name: "Nandhana Palace",
            cloudinaryImageId: "195876a3181ef63f76e45e3a7b49b585",
            locality: "Rajajinagar",
            areaName: "Rajajinagar",
            costForTwo: "₹500 for two",
            cuisines: [ "Andhra", "South Indian"],
            avgRating: 4.3,
            parentId: "2120",
            avgRatingString: "4.3",
            totalRatingsString: "10K+"
    },
    {
        id: "18971",
        name: "Shanthi sagar",
        cloudinaryImageId: "6c4de7b481d3614370e5062b2f33e7d6",
        locality: "Rajajinagar",
        areaName: "Rajajinagar",
        costForTwo: "₹500 for two",
        cuisines: ["Biryani", "Andhra", "South Indian", "North Indian"],
        avgRating: 4,
        parentId: "2120",
        avgRatingString: "4",
        totalRatingsString: "10K+"
},
{
    id: "18972",
    name: "Meghana Briyani",
    cloudinaryImageId: "s8ghmqus49l3i6no2vwe",
    locality: "Rajajinagar",
    areaName: "Rajajinagar",
    costForTwo: "₹500 for two",
    cuisines: ["Biryani", "North Indian"],
    avgRating: 3,
    parentId: "2120",
    avgRatingString: "3",
    totalRatingsString: "10K+"
},
{
    id: "18973",
    name: "Halli thindis",
    cloudinaryImageId: "bb6049fae59b8a2413a9177eb0338b49",
    locality: "Rajajinagar",
    areaName: "Rajajinagar",
    costForTwo: "₹500 for two",
    cuisines: ["South BreakFast"],
    avgRating: 2,
    parentId: "2120",
    avgRatingString: "2",
    totalRatingsString: "10K+"
}
];

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo'
                    src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=1060&t=st=1705207007~exp=1705207607~hmac=6997a0c46a48e6c4285fc6608029b9112aa34f5a013ff6b9c6feaa0040ca489e"/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const RestaurantCard = (props) => {
    const {resData} = props;
    return (
        <div className='res-card'>
            <h3>{resData.name}</h3>
            <img className='res-logo'
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
             + resData.cloudinaryImageId}/>
            <h4>{resData.cuisines.join(',')}</h4>
            <h4>{resData.avgRatingString}</h4>
            <h4>{resData.costForTwo}</h4>
        </div>
    )
};

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                   {
                    resObj.map((data) => 
                    <RestaurantCard key={data.id} resData={data}/>)
                   }
                </div>
        </div>
    )
};


const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
};


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);