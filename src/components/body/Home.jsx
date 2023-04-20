import useIsOnline from "../../utils/useIsOnline";
import Shimmer from "./bodyInnerComps/RestaurantUI/Shimmer";
import { Outlet} from "react-router-dom";
import { useOutletContext } from "react-router-dom";
const Body = () => {

  const isOnline = useIsOnline()
  // *early returns
  // for returning offlne of website 
  if (!isOnline) return "You're offline "

  
  // *body Return
  return  (<>

    <Outlet context={useOutletContext()} />
    </>)
}

export default Body;




//  early return

// if (props.restaurants.length==0)
// return <h1>no restro founds</h1>
