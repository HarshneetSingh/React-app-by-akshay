import { useState, useEffect } from 'react'


const useRestaurant = () => {
    const PROXY_SERVER = "https://cors-anywhere.herokuapp.com/";

    const [allRestaurants, setRestaurants] = useState([])
    useEffect(() => {
        getRestaurants()
        
    }, [])

    async function getRestaurants() {
        const data = await fetch( PROXY_SERVER +"https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5649034&lng=77.2403317&offset=15&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING")
        const json = await data.json();
        setRestaurants(json?.data?.cards)

    }
    return allRestaurants
}

export default useRestaurant;

// for search purpose 
// import { useState, useEffect } from 'react'


// const useRestaurant = () => {

//     const [allRestaurants, setRestaurants] = useState([])
    
//     const [filteredRestaurants, setFilteredRestaurants] = useState([])

//     useEffect(() => {
//         getRestaurants()
        
//     }, [])

//     async function getRestaurants() {
//         const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5649034&lng=77.2403317&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING")
//         const json = await data.json();
//         setRestaurants(json?.data?.cards)
//         setFilteredRestaurants(json?.data?.cards)

//     }
//     return [allRestaurants, filteredRestaurants, setFilteredRestaurants]
// }

// export default useRestaurant;