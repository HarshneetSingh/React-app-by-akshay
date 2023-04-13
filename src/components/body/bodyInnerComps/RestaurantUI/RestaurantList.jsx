import { Link } from "react-router-dom"
import Card from "./Card";


const RestaurantList = (props) => {
    const {filteredRestaurants} = props
    let restaurants = (filteredRestaurants?.cards?.length > 1) ? filteredRestaurants?.cards?.[2].data?.data?.cards : filteredRestaurants?.cards?.[0].data?.data?.cards
    return (
        <div className="w-5/6 mt-4  m-auto  grid grid-cols-4 gap-x-9 gap-y-10  " >
            {(restaurants?.length === 0) ?"no data " :
                restaurants.map((restaurant) => {
                    const restaurantData = restaurant?.data;
                    return <Link to={`/restaurant/${restaurantData?.name}-${restaurantData?.id}`} key={restaurantData?.id}><Card {...restaurantData} /></Link>
                })
            }
        </div>


    )
}

export default RestaurantList