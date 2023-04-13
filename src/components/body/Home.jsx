import useRestaurant from "../../utils/useRestaurant"
import useIsOnline from "../../utils/useIsOnline";
import Shimmer from "./bodyInnerComps/RestaurantUI/Shimmer";
import OfferColumn from "./bodyInnerComps/RestaurantOffersUI/OfferColumn";
import SortByBtn from './bodyInnerComps/RestaurantUI/SortByBtn'
import RestaurantList from './bodyInnerComps/RestaurantUI/RestaurantList'

const Body = () => {

  const [allRestaurants, filteredRestaurants, setFilteredRestaurants] = useRestaurant(null)

  const isOnline = useIsOnline()


  // *early returns
  // for returning offlne of website 
  if (!isOnline) return "You're offline "


  // *body Return
  return allRestaurants.length === 0 ? <Shimmer /> : (
    <div className={`body `} >


      {/* RestaurantOfferUI */}
      {/* <OfferColumn /> */}


      {/* Restaurant UI  */}
      <SortByBtn filteredRestaurants={filteredRestaurants} allRestaurants={allRestaurants} setFilteredRestaurants={setFilteredRestaurants} />
      {
        (filteredRestaurants?.length === 0) ?
          <Shimmer /> :
          (<>
            <RestaurantList filteredRestaurants={filteredRestaurants} />
          </>
          )
      }
    </div>
  )
}

export default Body;




//  early return

// if (props.restaurants.length==0)
// return <h1>no restro founds</h1>
