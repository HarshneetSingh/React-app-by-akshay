import useRestaurant from "../../utils/useRestaurant";
import RestaurantCards from "./bodyComp/RestaurantCards";
import Search from "./bodyComp/Search";
import Shimmer from "./bodyComp/Shimmer";



const Body = () => {
  const [restaurants, filteredRestaurants, setFilteredRestaurants] = useRestaurant(null)

  return (
    <div className="body">
      {/* Search UI */}
      <Search restaurants={restaurants} setFilteredRestaurants={setFilteredRestaurants} />

      {
        //  Restaurant UI 
          (filteredRestaurants?.length === 0) ?
          <Shimmer /> :
          <RestaurantCards restaurants={filteredRestaurants} />
      }
    </div>
  )
}

export default Body;




  //  early return

  // if (props.restaurants.length==0)
  // return <h1>no restro founds</h1>