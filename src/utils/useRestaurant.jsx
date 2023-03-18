import { useState, useEffect } from 'react'

const useRestaurant = () => {

    const [restaurants, setRestaurants] = useState([])

    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    useEffect(() => {
        getRestaurants(setRestaurants, setFilteredRestaurants)
    }, [])

    async function getRestaurants(setRestaurants, setFilteredRestaurants) {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5649034&lng=77.2403317&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING")
        const json = await data.json();
        setRestaurants(json?.data?.cards)
        setFilteredRestaurants(json?.data?.cards)

    }
    return [restaurants, filteredRestaurants, setFilteredRestaurants]
}

export default useRestaurant;