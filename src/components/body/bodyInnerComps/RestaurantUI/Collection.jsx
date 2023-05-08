import { useParams } from 'react-router-dom'
import useAdvancedCards from '../../../../utils/useAdvancedCards';
import Shimmer from './Shimmer';
import RestaurantUI from '../../../../utils/RestaurantUI'


const Collection = () => {
    const { resid } = useParams()
    const [allRestaurants, filteredRestaurants, setFilteredRestaurants] = useAdvancedCards(resid)
    return allRestaurants===null ? <Shimmer /> : (
        <RestaurantUI filteredRestaurants={filteredRestaurants} allRestaurants={allRestaurants} setFilteredRestaurants={setFilteredRestaurants} />

    )
}

export default Collection