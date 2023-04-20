import React from 'react'
import OfferColumn from '../RestaurantOffersUI/OfferColumn';
import RestaurantUI from '../../../../utils/RestaurantUI';
import useRestaurant from '../../../../utils/useRestaurant';
import Shimmer from './Shimmer';

const HomeMain = () => {
  const [allRestaurants, filteredRestaurants, setFilteredRestaurants] = useRestaurant(null)
  const photosCards= allRestaurants?.cards?.[0]
    return allRestaurants.length === 0 ? <Shimmer /> : (    
        <div>
            <div className={`body `} >


                {/* RestaurantOfferUI */}

                {(photosCards?.cardType === "carousel" && photosCards?.data?.data?.cards.length>2) && <OfferColumn photos={photosCards} />}


                {/* Restaurant UI  */}
                <RestaurantUI filteredRestaurants={filteredRestaurants} allRestaurants={allRestaurants} setFilteredRestaurants={setFilteredRestaurants} />


            </div>
        </div>
    )
}

export default HomeMain