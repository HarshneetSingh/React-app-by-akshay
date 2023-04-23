import React, { useState } from 'react'
import Shimmer from '../RestaurantUI/Shimmer'

async function getSelectedData(otherData, id, setSelectedData) {
    const [metaData, marketplaceData, RestroName, location] = otherData
    const result = await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=${location.lat}&lng=${location.lng}&str=${RestroName}&trackingId=null&submitAction=SUGGESTION&&metaData=${metaData}&marketplace=${marketplaceData}&selectedPLTab=${id}`)
    const data = await result.json();
    console.log(data);
}


const ActiveQueryUI = (props) => {
    const activeQueryData = props.prop
    const [queryData, otherData] = [activeQueryData?.[0], activeQueryData?.filter((data, index) => index != 0)]
    
    const [selectedData, setSelectedData] = useState(null)

    // setting restaurant dishes state
    const btns = queryData?.cards?.[0]?.card?.card?.tab
    const [defaultRestroStatus, setDefaultRestroStatus] = useState('selected' in btns?.[0])
    const [defaultDishStatus, setDefaultDishStatus] = useState('selected' in btns?.[1])
    const [restaurantStatus, setRestaurantStatus] = useState(defaultRestroStatus)
    const [dishStatus, setDishStatus] = useState(defaultDishStatus)

    console.log(restaurantStatus, dishStatus)
    return (

        (activeQueryData === null) ?
            <Shimmer /> :
            <div>
                <div className="">
                    <button className={`border mr-2 ${(restaurantStatus) ? "bg-selectedBgColor text-white border-selectedBorderColor" : "bg-white text-ttlRestroHeading border-neutral-300"}`}
                        onClick={() => {
                            if (defaultRestroStatus) {
                                setRestaurantStatus(true)
                                setDishStatus(false)
                            } else {
                                setRestaurantStatus(true)
                                setDishStatus(false)
                                getSelectedData(otherData, btns?.[0]?.id, setSelectedData)
                            }
                        }}
                    >
                        {btns?.[0]?.title}
                    </button >
                    <button className={`border ${(dishStatus) ? "bg-selectedBgColor text-white border-selectedBorderColor" : "bg-white text-ttlRestroHeading border-neutral-300"}`}
                        onClick={() => {
                            if (defaultDishStatus) {
                                setDishStatus(true)
                                setRestaurantStatus(false)
                            } else {
                                setDishStatus(true)
                                setRestaurantStatus(false)
                                getSelectedData(otherData, btns?.[1]?.id, setSelectedData)
                            }
                        }}>
                        {btns?.[1]?.title}
                    </button>
                </div>

                {(restaurantStatus) && "restaurant"}
                {(dishStatus) && "dishes"}
            </div>



    )
}

export default ActiveQueryUI