import { Link } from "react-router-dom"
import Card from "./Card";


const RestaurantList = (props) => {
    return (
        <div className="w-5/6 mt-4  m-auto  grid grid-cols-4 gap-x-9 gap-y-10  " >
            {(props.restaurants?.length === 0) ?"no data " :
                props.restaurants.map((restaurant) => {
                    console.log
                    const restaurantData = !('layoutAlignmentType' in  restaurant )?restaurant?.data:restaurant?.data?.data;
                    return <Link to={`/restaurant/${restaurantData?.name}-${restaurantData?.id}`} key={restaurantData?.id}><Card {...restaurantData} /></Link>
                })
            }
        </div>
    )
}

export default RestaurantList