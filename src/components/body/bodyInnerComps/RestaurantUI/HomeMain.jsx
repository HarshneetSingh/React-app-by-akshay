import React from 'react'
import { useOutletContext } from 'react-router-dom';
import OfferColumn from '../RestaurantOffersUI/OfferColumn';
import RestaurantUI from '../../../../utils/RestaurantUI';
import Shimmer from './Shimmer';

const HomeMain = () => {
  const restroDetails=useOutletContext()
  
  const [allRestaurants, filteredRestaurants, setFilteredRestaurants]=restroDetails[1]
  const filterArr=restroDetails[2]
  const photosCards= allRestaurants?.cards?.[0]
    return allRestaurants.length === 0 ? <Shimmer /> : (    
        <div>
            <div className={`body `} >


                {/* RestaurantOfferUI */}

                {(photosCards?.cardType === "carousel" && photosCards?.data?.data?.cards.length>2) && <OfferColumn photos={photosCards} />}


                {/* Restaurant UI  */}
                <RestaurantUI filteredRestaurants={filteredRestaurants} allRestaurants={allRestaurants} setFilteredRestaurants={setFilteredRestaurants} filterArr={filterArr}/>


            </div>
        </div>
    )
}

export default HomeMain