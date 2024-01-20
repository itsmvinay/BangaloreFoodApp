import RestaurantCard from './RestaurantCard';
import resObj from '../utils/mocks/mock-data';
import { useState } from 'react';

const Body = () => {
    const [listOfRes, setListOfRes] = useState(resObj);
    return (
        <div className='body'>
            <div className='search'>
                <button className='top-res-btn'
                onClick = {() => {
                        const filteredRes = listOfRes.filter(
                            (res) => res.avgRating > 4
                        );
                        setListOfRes(filteredRes)
                    }}
                
                >Top Rated Restaurant</button>
            </div>
            <div className='res-container'>
                   {
                    listOfRes.map((data) => 
                    <RestaurantCard key={data.id} resData={data}/>)
                   }
                </div>
        </div>
    )
};

export default Body;
