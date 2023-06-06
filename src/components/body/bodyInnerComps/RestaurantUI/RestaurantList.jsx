import { Link } from "react-router-dom"
import Card from "./Card";


const RestaurantList = (props) => {

    const servicable=props.restaurants.reduce((acc,restaurant)=>{
        let restaurantData = !('layoutAlignmentType' in restaurant) ? restaurant?.data : restaurant?.data?.data;
        if(restaurantData?.unserviceable===false){
            acc.push(restaurantData)
        }
        return acc
    },[])
    const unservicable=props.restaurants.reduce((acc,restaurant)=>{
        let restaurantData = !('layoutAlignmentType' in restaurant) ? restaurant?.data : restaurant?.data?.data;
        if(restaurantData?.unserviceable===true){
            acc.push(restaurantData)
        }
        return acc
    },[])

    return (
        <div className="w-5/6 mt-4  m-auto  grid grid-cols-4 gap-x-9 gap-y-10  " >
            {(servicable?.length === 0) ? "no data " :
                servicable.map((restaurant) => {
                    return (
                        <Link to={`/restaurant/${restaurant?.name}-${restaurant?.id}`} key={restaurant?.id}>
                            <Card {...restaurant} />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default RestaurantList