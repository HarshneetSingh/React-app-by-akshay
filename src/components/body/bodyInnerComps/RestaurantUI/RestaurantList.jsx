import { Link } from "react-router-dom"
import { useContext } from "react";
import Card from "./Card";
import allRestroContext from "../../../../utils/allRestroContext";


const RestaurantList = () => {
    const restroDetails = useContext(allRestroContext)
    const restaurants =restroDetails?.cards[2]?.data?.data?.cards
    return (restaurants?.length === 0) ?
        "no data" : (
                <div className="w-5/6 mt-4  m-auto    grid grid-cols-4 gap-x-9 gap-y-10  " >

                    {
                        restaurants.map((restaurant) => {
                            const restaurantData = restaurant?.data;
                            return <Link to={`/restaurant/${restaurantData?.name}-${restaurantData?.id}`}  key={restaurantData?.id}><Card {...restaurantData} /></Link>
                        })
                    }
                </div>
            

        )
}

export default RestaurantList