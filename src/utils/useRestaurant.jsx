// for search purpose 
import { useState, useEffect, useContext } from 'react'
import AllRestaurantsContext from './AllRestroContext';
import LocationContext from './LocationContext';

const useRestaurant = () => {

    const [allRestaurants, setRestaurants] = useState([])
    const [restaurantContext, setRestaurantContext] = useContext(AllRestaurantsContext);
    const [location,setLocation]=useContext(LocationContext)
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    useEffect(() => {
        setRestaurants([])
        getRestaurants()
    }, [location])

    async function getRestaurants() {
        const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.lat}&lng=${location.lng}&page_type=DESKTOP_WEB_LISTING`)
        const json = await data.json();
        setRestaurants(json?.data)
        setFilteredRestaurants(json?.data)
        setRestaurantContext(json?.data)
    }
    return [allRestaurants, filteredRestaurants, setFilteredRestaurants]
}

export default useRestaurant;