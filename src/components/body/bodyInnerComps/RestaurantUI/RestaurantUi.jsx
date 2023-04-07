import React from 'react'
import { Outlet } from 'react-router-dom'
import SortByBtn from './SortByBtn'
const RestaurantUi = () => {
  return (
    <>
      {/* Button selection for Restaurant UI */}
      <div className="border w-[85%] m-auto">
        <SortByBtn />
        <Outlet />
      </div>


    </>
  )
}

export default RestaurantUi