import { Link } from "react-router-dom"
import { useContext } from "react";
import Card from "./Card";
import allRestroContext from "../../../../utils/allRestroContext";


const RestaurantList = () => {
    const restaurnts = useContext(allRestroContext)
    return (restaurnts?.length === 0) ?
        "no data" : (
                <div className="w-11/12 mt-3 m-auto flex justify-between flex-wrap gap-8 " >

                    {
                        restaurnts.map((restaurant) => {
                            const restaurantData = restaurant?.data?.data;
                            return <Link to={`/restaurant/${restaurantData?.name}-${restaurantData?.id}`} key={restaurantData?.id}><Card {...restaurantData} /></Link>
                        })
                    }
                </div>
            

        )
}

export default RestaurantList