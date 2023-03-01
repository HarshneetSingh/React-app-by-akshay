import { useState } from "react";
import RestaurantCards from "./bodyComp/RestaurantCards";
import Search from "./bodyComp/Search";
import { RestaurantList } from "../../config"


const Body = () => {
  const [restaurants,setRestaurants]=useState(RestaurantList)
  return (
    <div className="body">
    <Search restaurants={restaurants} setRestaurants={setRestaurants} fullRestaurantList={RestaurantList}/>
    <RestaurantCards  restaurants={restaurants} />
    </div>
  )
}

export default Body;