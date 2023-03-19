import useRestaurant from "../../utils/useRestaurant";
import RestaurantCards from "./bodyComp/RestaurantCards";
import Search from "./bodyComp/Search";
import Shimmer from "./bodyComp/Shimmer";
import useIsOnline from "../../utils/useIsOnline";


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
        {/* Search UI */}
        <Search restaurants={allRestaurants} setFilteredRestaurants={setFilteredRestaurants} />

        {
          //  Restaurant UI 
          (filteredRestaurants?.length === 0) ?
            "no data" :
            <RestaurantCards restaurants={filteredRestaurants} />
        }
      </div>
    )
}

export default Body;




  //  early return

  // if (props.restaurants.length==0)
  // return <h1>no restro founds</h1>