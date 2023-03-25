import Card from "./Card"
import { Link } from "react-router-dom"
const restaurantList = (props) => {


    return (
        <div className="w-4/5 m-auto flex justify-between flex-wrap gap-8 " >
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