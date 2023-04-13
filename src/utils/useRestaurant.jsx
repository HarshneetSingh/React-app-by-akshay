
// for search purpose 
import { useState, useEffect } from 'react'
const useRestaurant = () => {

    const [allRestaurants, setRestaurants] = useState([])
    
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    useEffect(() => {
        getRestaurants()
    }, [])

    async function getRestaurants() {
        const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5649034&lng=77.2403317&page_type=DESKTOP_WEB_LISTING`)
        const json = await data.json();
        setRestaurants(json?.data)
        setFilteredRestaurants(json?.data)
       
    }
    return [allRestaurants, filteredRestaurants, setFilteredRestaurants]
}

export default useRestaurant;