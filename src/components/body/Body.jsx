import { useState ,useEffect} from "react";
import RestaurantCards from "./bodyComp/RestaurantCards";
import Search from "./bodyComp/Search";
import Shimmer from "./bodyComp/Shimmer";
  async function getRestaurants(setRestaurants,setFilteredRestaurants) {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5649034&lng=77.2403317&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING")
    const json = await data.json();
    setRestaurants(json?.data?.cards)
    setFilteredRestaurants(json?.data?.cards)
    
  }

const Body = () => {
  const [restaurants, setRestaurants] = useState([])

  const [filteredRestaurants, setFilteredRestaurants] = useState([])

  useEffect(() => {
    getRestaurants(setRestaurants,setFilteredRestaurants)
  }, [])

//  early return 

// if (props.restaurants.length==0)
// return <h1>no restro founds</h1>

  return (
    <div className="body">
      <Search restaurants={restaurants} setFilteredRestaurants={setFilteredRestaurants} />
      {(filteredRestaurants.length===0)?<Shimmer/>:<RestaurantCards restaurants={filteredRestaurants} />}
      
    </div>
  )
}

export default Body