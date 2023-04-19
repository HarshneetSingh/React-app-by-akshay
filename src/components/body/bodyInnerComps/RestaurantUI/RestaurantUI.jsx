import React from 'react'
import SortByBtn from './SortByBtn'
import RestaurantList from './RestaurantList'
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