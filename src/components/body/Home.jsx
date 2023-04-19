import useRestaurant from "../../utils/useRestaurant"
import useIsOnline from "../../utils/useIsOnline";
import Shimmer from "./bodyInnerComps/RestaurantUI/Shimmer";
import OfferColumn from "./bodyInnerComps/RestaurantOffersUI/OfferColumn";
// import SortByBtn from './bodyInnerComps/RestaurantUI/SortByBtn'
// import RestaurantList from './bodyInnerComps/RestaurantUI/RestaurantList'
import RestaurantUI from "./bodyInnerComps/RestaurantUI/RestaurantUI";

const Body = () => {

  const [allRestaurants, filteredRestaurants, setFilteredRestaurants] = useRestaurant(null)
  const isOnline = useIsOnline()
  const photosCards= allRestaurants?.cards?.[0]
  // *early returns
  // for returning offlne of website 
  if (!isOnline) return "You're offline "


  // *body Return
  return allRestaurants.length === 0 ? <Shimmer /> : (
    <div className={`body `} >

    
      {/* RestaurantOfferUI */}

      {photosCards.cardType==="carousel" && <OfferColumn photos={photosCards} />}


      {/* Restaurant UI  */}
      <RestaurantUI  filteredRestaurants={filteredRestaurants} allRestaurants={allRestaurants} setFilteredRestaurants={setFilteredRestaurants}/>

      
    </div>
  )
}

export default Body;




//  early return

// if (props.restaurants.length==0)
// return <h1>no restro founds</h1>
