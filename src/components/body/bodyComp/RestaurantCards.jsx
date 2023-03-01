import Card from "./Card"
const RestaurantCards = (props) => {

    return (
        <div className="restaurantList" >
            {
                
                props.restaurants.map((restaurant) => {
                  return  <Card {...restaurant.data.data} key={restaurant.data.data.id}/>
                  
                })

            }
        </div>
    )
}

export default RestaurantCards