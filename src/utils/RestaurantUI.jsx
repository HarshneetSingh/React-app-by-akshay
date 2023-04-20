import React from 'react'
import SortByBtn from '../components/body/bodyInnerComps/RestaurantUI/SortByBtn'
import RestaurantList from '../components/body/bodyInnerComps/RestaurantUI/RestaurantList'
import Shimmer from '../components/body/bodyInnerComps/RestaurantUI/Shimmer'
const RestaurantUI = (props) => {
    return (
        <>
            <SortByBtn filteredRestaurants={props.filteredRestaurants} allRestaurants={props.allRestaurants} setFilteredRestaurants={props.setFilteredRestaurants} />
            {
                (props.filteredRestaurants?.length === 0) ?
                    <Shimmer /> :
                    (
                        <RestaurantList filteredRestaurants={props.filteredRestaurants} />
                    )
            }
        </>
    )
}

export default RestaurantUI;