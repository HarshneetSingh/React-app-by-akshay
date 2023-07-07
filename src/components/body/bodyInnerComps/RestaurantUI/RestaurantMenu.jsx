
import {  useParams } from 'react-router-dom'
import useRestaurantMenu from '../../../../utils/useRestaurantMenu';
import MenuBody from '../RestaurantMenuUi/MenuBody';
import RestaurantMenuShimmer from '../RestaurantMenuUi/RestaurantMenuShimmer';


const RestaurantMenu = () => {

    // *bringing param dynamically 
    const { stringResid } = useParams();


    // *now cutting the stringResid to res id 
    let resid = stringResid.split("-");
    resid = resid[resid.length - 1]


    //*RESTATUANT HOOK TO GET THE RESTATUANTmenu;
    const restaurantMenu = useRestaurantMenu(resid);



    return restaurantMenu === null ? <RestaurantMenuShimmer /> : (

        <MenuBody restaurantMenu={restaurantMenu}/>
    )
}

export default RestaurantMenu;