import Card from "./Card"
import { Link } from "react-router-dom"
const RestaurantCards = (props) => {


    return (
        <div className="restaurantList" >
            {
                props.restaurants.map((restaurant) => {
                    const restaurantData=restaurant?.data?.data;
                  return <Link to={`/restaurant/${restaurantData?.name}-${restaurantData?.id}`}  key={restaurantData?.id}><Card {...restaurantData} /></Link> 
                })
            }
        </div>
    )
}

export default RestaurantCards