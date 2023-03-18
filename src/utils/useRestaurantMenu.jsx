import React ,{useState,useEffect}from 'react'

const useRestaurantMenu = (resid) => {
    // setting restaurant state
    const [restaurant, setRestaurant] = useState(null);
    useEffect(() =>{
        getRestaurant();
    },[])
    async function getRestaurant(){
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5649034&lng=77.2403317&restaurantId=${resid}&submitAction=ENTER`);
        const json=await data.json();
        setRestaurant(json?.data?.cards?.[0]?.card?.card?.info)
    }
    return restaurant;
}

export default useRestaurantMenu;