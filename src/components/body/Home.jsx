import useRestaurant from "../../utils/useRestaurant";
import useIsOnline from "../../utils/useIsOnline";
import Shimmer from "./bodyInnerComps/RestaurantUI/Shimmer";
import OfferColumn from "./bodyInnerComps/RestaurantOffersUI/OfferColumn";
import allRestroContext from "../../utils/allRestroContext";
import { useState } from "react";
import RestaurantUi from "./bodyInnerComps/RestaurantUI/RestaurantUi";



const Body = () => {
  const [sortByRestro,setRequiredRestaurants]=useState(null)

  const allRestaurants = useRestaurant(sortByRestro)

  const isOnline = useIsOnline()


  // *early returns
  // for returning offlne of website 
  if (!isOnline) return "You're offline "


  // *body Return
  return (allRestaurants?.length === 0) ?
    <Shimmer /> :
    (
      <div className="body">


        {/* RestaurantOfferUI */}
        {/* <OfferColumn/> */}


        {/* Restaurant UI  */}
        <allRestroContext.Provider value={allRestaurants} >
          <RestaurantUi/>
        </allRestroContext.Provider >
      </div>
    )
}

export default Body;




//  early return

// if (props.restaurants.length==0)
// return <h1>no restro founds</h1>
