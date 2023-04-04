
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../../../../utils/useRestaurantMenu';
import Shimmer from '..//RestaurantUI/Shimmer';

const RestaurantMenu = () => {
  // !bringing param dynamically 
  const { stringResid } = useParams();
  // !now cutting the stringResid to res id 
  let resid = stringResid.split("-");
  resid = resid[resid.length - 1];
  //!RESTATUANT HOOK TO GET THE RESTATUANTmenu
  const restaurantMenu = useRestaurantMenu(resid);


  return restaurantMenu === null ? <Shimmer /> : (
    // Restaurant UI
    <div>{restaurantMenu?.name}</div>
  )
}

export default RestaurantMenu;