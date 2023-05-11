// for search purpose 
import { useState, useEffect, useContext } from 'react'
import AllRestaurantsContext from './AllRestroContext';
import LocationContext from './LocationContext';

const useRestaurant = (location,setRestaurantContext) => {

    const [allRestaurants, setRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    useEffect(() => {
        setRestaurants([])
        getRestaurants()
    }, [location])

    async function getRestaurants() {
        console.log('start')
        const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.lat}&lng=${location.lng}&page_type=DESKTOP_WEB_LISTING`)
        const json = await data.json();
        console.log(json)
        console.log('stop')
        setRestaurants(json?.data)
        setFilteredRestaurants(json?.data)
        setRestaurantContext(json?.data)
    }
    return [allRestaurants, filteredRestaurants, setFilteredRestaurants]
}

export default useRestaurant;