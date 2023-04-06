import { Link } from "react-router-dom"
import Card from "./Card";
const restaurantList = (props) => {


    return (
        <div className="w-4/5 mt-3 m-auto flex justify-between flex-wrap gap-8 " >
            {
                props.restaurants.map((restaurant) => {
                    const restaurantData=restaurant?.data?.data;
                  return <Link to={`/restaurant/${restaurantData?.name}-${restaurantData?.id}`}  key={restaurantData?.id}><Card {...restaurantData} /></Link> 
                })
            }
        </div>
    )
}

export default restaurantList