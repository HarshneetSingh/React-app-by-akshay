import { useState, useEffect ,useContext} from 'react'
import LocationContext from "./LocationContext"
const useRestaurantMenu = (resid) => {
    // setting restaurant state
    const [restaurant, setRestaurant] = useState(null);
    const [location]=useContext(LocationContext)

    useEffect(() => {
        getRestaurant();
    }, [])
    async function getRestaurant() {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${location.lat}&lng=${location.lng}&restaurantId=${resid}&submitAction=ENTER`);
        const json = await data.json();
        setRestaurant(json?.data)
    }
    return restaurant;
}

export default useRestaurantMenu;