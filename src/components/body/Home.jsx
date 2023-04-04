import useRestaurant from "../../utils/useRestaurant";
import RestaurantList from "./bodyInnerComps/RestaurantUI/RestaurantList";
import useIsOnline from "../../utils/useIsOnline";
import Shimmer from "./bodyInnerComps/RestaurantUI/Shimmer";
import OfferColumn from "./bodyInnerComps/RestaurantOffersUI/OfferColumn";
// import SearchEngine from "./bodyComp/RestaurantUI/SearchEngine";
// import userContext from "../../utils/userContext";


const Body = () => {
  const [allRestaurants, filteredRestaurants, setFilteredRestaurants] = useRestaurant(null)

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
        {
          (filteredRestaurants?.length === 0) ?
            "no data" :
            <RestaurantList restaurants={filteredRestaurants} />
        }
      </div>
    )
}

export default Body;




//  early return

// if (props.restaurants.length==0)
// return <h1>no restro founds</h1>


{/* Search UI */ }
{/* <userContext.Provider value={{ allRestaurants, setFilteredRestaurants }}>
          <SearchEngine />
        </userContext.Provider> */}
