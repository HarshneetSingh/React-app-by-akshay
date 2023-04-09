import React from 'react'
import { Outlet } from 'react-router-dom'
import SortByBtn from './SortByBtn'
const RestaurantUi = () => {
  return (
    <>
      {/* Button selection for Restaurant UI */}
        <SortByBtn />
        <Outlet />


    </>
  )
}

export default RestaurantUi