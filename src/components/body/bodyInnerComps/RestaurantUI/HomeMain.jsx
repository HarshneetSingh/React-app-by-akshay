import React from 'react'
import { useOutletContext } from 'react-router-dom';
import OfferColumn from '../RestaurantOffersUI/OfferColumn';
import RestaurantUI from '../../../../utils/RestaurantUI';
import Shimmer from './HomeMainShimmer';

const HomeMain = () => {
  const restroDetails=useOutletContext()
  const [allRestaurants, filteredRestaurants, setFilteredRestaurants]=restroDetails[1]
  const photosCards= allRestaurants?.cards?.[0]
    return ( allRestaurants.length === 0 && filteredRestaurants.length===0) ? <Shimmer /> : (    
        <div>
            <div className={`body  flex flex-col w-full h-full`} >


                {/* RestaurantOfferUI */}

                {(photosCards?.cardType === "carousel" && photosCards?.data?.data?.cards.length>3) ? <OfferColumn photos={photosCards} />:""}

                {/* Restaurant UI  */}
                <RestaurantUI filteredRestaurants={filteredRestaurants} allRestaurants={allRestaurants} setFilteredRestaurants={setFilteredRestaurants} />


            </div>
        </div>
    )
}

export default HomeMain