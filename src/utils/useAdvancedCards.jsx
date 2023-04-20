import { useState, useEffect ,useContext} from 'react'
import LocationContext from './LocationContext';

const useAdvancedCards = (resid) => {
    // setting restaurant state
    const [allRestaurants, setRestaurant] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants]=useState([])
    const [location,setLocation]=useContext(LocationContext)
    useEffect(() => {
        getRestaurant();
    }, [])
    async function getRestaurant() {
      const result = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.lat}&lng=77.2403317&collection=${resid}&offset=0&pageType=COLLECTION&type=rcv2&page_type=DESKTOP_COLLECTION_LISTING`)
      const data = await result.json();
      setRestaurant(data?.data);
      setFilteredRestaurants(data?.data)
    }
    return [allRestaurants, filteredRestaurants, setFilteredRestaurants];
}

export default useAdvancedCards;