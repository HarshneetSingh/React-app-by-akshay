import React from 'react'
import SortByBtn from '../components/body/bodyInnerComps/RestaurantUI/SortByBtn'
import RestaurantList from '../components/body/bodyInnerComps/RestaurantUI/RestaurantList'
import { CardShimmer, FilterSelectedBtn } from './helper'
const RestaurantUI = (props) => {

    let restaurants = []
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
                    <div className="w-5/6  m-auto  h-full  flex">
                        <div className="  mt-9 ml-5 "  >
                            <div className="flex justify-between flex-wrap-reverse gap-x-9 gap-y-16 pb-20  ">
                                {
                                    [...Array(12)].map((i, j) => {
                                        return <CardShimmer />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    :
                    (
                        <RestaurantList restaurants={restaurants} />
                    )
            }
        </>
    )
}

export default RestaurantUI;