import React from 'react'
import RestaurantList from '../RestaurantUI/RestaurantList'
const RestaurantOffers = (props) => {
  const [restroCount, ...restroDetails] = props.restaurants
  return (
    <div>
      <div className='mt-14 w-4/5 m-auto'>
        <p className='text-2xl text-ttlRestroHeading font-bold'>{restroCount?.data?.data?.message}</p>
        <p className='mt-1 text-base text-locationError'>All offers and deals, from restaurants near you</p>
      </div>
      <RestaurantList restaurants={restroDetails} />
    </div>
  )
}

export default RestaurantOffers;