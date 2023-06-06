import React from 'react'
import SortByBtn from '../components/body/bodyInnerComps/RestaurantUI/SortByBtn'
import RestaurantList from '../components/body/bodyInnerComps/RestaurantUI/RestaurantList'
import Shimmer from '../components/body/bodyInnerComps/RestaurantUI/Shimmer'
import { FilterSelectedBtn } from './helper'
const RestaurantUI = (props) => {
    console.log(props.filteredRestaurants.length)

    let restaurants = []
    console.log(restaurants)
    if (props.filteredRestaurants?.cards?.length === 0 || props.filteredRestaurants?.length === 0) {
        restaurants = []
    } else {
        restaurants = (props.filteredRestaurants?.cards?.length > 1) ? props.filteredRestaurants?.cards?.[2].data?.data?.cards : props.filteredRestaurants?.cards?.[0].data?.data?.cards
    }
    return (
        <>
            <SortByBtn filteredRestaurants={props.filteredRestaurants} allRestaurants={props.allRestaurants} setFilteredRestaurants={props.setFilteredRestaurants} />

            <FilterSelectedBtn filters={props.filteredRestaurants?.filters} setFilteredRestaurants={props.setFilteredRestaurants} />
            {

                (restaurants.length === 0) ?
               <Shimmer /> 
                    :
                    (
                        <RestaurantList restaurants={restaurants} />
                    )
            }
        </>
    )
}

export default RestaurantUI;