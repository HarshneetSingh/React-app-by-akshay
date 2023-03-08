import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer';

const Outlett = () => {
    // bringing param dynamically 
    const {stringResid} =useParams();
    let resid=stringResid.split("-");
    resid=resid[resid.length-1];
    // setting restaurant state
    const [restaurant,setRestaurant]=useState(null);

    useEffect(() =>{
        getRestaurant();
    },[])
    async function getRestaurant(){
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5649034&lng=77.2403317&restaurantId=${resid}&submitAction=ENTER`);
        const json=await data.json();
        setRestaurant(json?.data?.cards?.[0]?.card?.card?.info)
    }


  return restaurant===null?<Shimmer/>:(
    <div>{restaurant?.name}</div>
  )
}

export default Outlett