// for search purpose 
import { useState, useEffect, useContext } from 'react'

const useRestaurant = (location,setRestaurantContext) => {

    const [allRestaurants, setRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    useEffect(() => {
        setRestaurants([])
        getRestaurants()
    }, [location])

    async function getRestaurants() {
        const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.lat}&lng=${location.lng}&page_type=DESKTOP_WEB_LISTING`)
        const json = await data.json();
        console.log(json?.data)
        setRestaurants(json?.data)
        setFilteredRestaurants(json?.data)
        setRestaurantContext(json?.data)
    }
    return [allRestaurants, filteredRestaurants, setFilteredRestaurants,setRestaurants]
}

export default useRestaurant;