import React, { useContext, useEffect, useState } from 'react'
import RestaurantOffers from './bodyInnerComps/OffersUI/RestaurantOffers'
import PaymentOffers from './bodyInnerComps/OffersUI/PaymentOffers'
import OfferIMG from '../../assets/OfferIMG.webp'
import LocationContext from '../../utils/LocationContext'
import Shimmer from './bodyInnerComps/RestaurantOffersUI/Shimmer'
async function getRestaurant(location, setRestaurant) {
  const result = await fetch(`https://www.swiggy.com/dapi/offers/restaurant?lat=${location.lat}&lng=${location.lng}&offset=0`)
  const data = await result.json()
  setRestaurant(data?.data?.cards)
}
async function getOffers(location, setOffers) {
  const result = await fetch(`https://www.swiggy.com/dapi/offers/payment?lat=${location.lat}&lng=${location.lng}&offset=0`)
  const data = await result.json()
  setOffers(data?.data?.cards)
}
const Offers = () => {
  const [location, setLocation] = useContext(LocationContext)
  //variables which have Data to show 
  const [restaurant, setRestaurant] = useState(null)
  const [offers, setOffers] = useState(null)

  // variable which decides which data to show 
  const [showMain, setShowMain] = useState(true)
  useEffect(() => {
    getRestaurant(location, setRestaurant)
    getOffers(location, setOffers)
  }, [])

  return (restaurant === null || offers === null) ? <Shimmer /> : (
    <div className=' w-full'>
      {/* offerfront section */}
      <div className='h-[300px] bg-[#005062]  '>
        <div className=' flex justify-between w-4/5 m-auto h-full items-center '>
          <div className='text-white'>
            <p className='text-5xl font-bold'>Offers for you</p>
            <p className='text-[21px] mt-1 opacity-80'>Explore top deals and offers exclusively for you!</p>
          </div>
          <div>
            <img src={OfferIMG} alt="Error" className='w-[270px] h-48' />
          </div>
        </div>
      </div >
      {/* data section */}
      <div className='border-b-[1px] border-neutral-300 relative '>
        <div className=' h-16 w-4/5 m-auto flex '>
          <button className={` text-xl hover:text-ttlRestroHeading ${(showMain) ? ' text-ttlRestroHeading font-medium  ' : "font-normal text-locationError "}`} onClick={() => setShowMain(true)}>Restaurant offers</button>
          <button className={`ml-5  text-xl hover:text-ttlRestroHeading ${!(showMain) ? ' text-ttlRestroHeading font-medium  ' : "font-normal text-locationError "}`} onClick={() => setShowMain(false)}>Payment offers/Coupons</button>
        </div>
        <div className={`w-2 h-[1px] ease-in-out  duration-500 transition  bg-ttlRestroHeading absolute bottom-0 ${(showMain) ? " translate-x-[155px] w-40":" w-56 translate-x-[330px]"}`}></div>
      </div>

      <div>
        {
          (showMain) ? <RestaurantOffers restaurants={restaurant} /> : <PaymentOffers offers={offers} />
        }
      </div>
    </div>
  )
}

export default Offers