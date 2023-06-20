
import { Link, useParams } from 'react-router-dom'
import useRestaurantMenu from '../../../../utils/useRestaurantMenu';
import Shimmer from '../RestaurantUI/Shimmer';
import { searchLogo } from '../../../../utils/helper';
import ShowingCategoryWise from '../RestaurantMenuUi/ShowingCategoryWise';
import ShowingRecommendedWise from '../RestaurantMenuUi/ShowingRecommendedWise';
import RestroNameAndDetails from '../RestaurantMenuUi/RestroNameAndDetails';


const RestaurantMenu = () => {

    // *bringing param dynamically 
    const { stringResid } = useParams();


    // *now cutting the stringResid to res id 
    let resid = stringResid.split("-");
    resid = resid[resid.length - 1]


    //*RESTATUANT HOOK TO GET THE RESTATUANTmenu;
    const restaurantMenu = useRestaurantMenu(resid);
    const restaurantInfo = restaurantMenu?.cards?.[0]?.card?.card?.info
    const offersOnRestaurant = restaurantMenu?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.offers
    const restroitems = restaurantMenu?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    let address=[]
    address.push(restroitems?.pop())
    address.push(restroitems?.pop())
    console.log(address)
    let [isVeg, topPicks, restroDishes] = [false, false, false]

    if (restroitems !== undefined) {
        if (restroitems?.[1]?.card?.card?.title !== "Top Picks") {
            [isVeg, ...restroDishes] = restroitems
            restroDishes = restroDishes?.filter((card) => card?.card?.card?.hasOwnProperty('title'))
        } else {
            [isVeg, topPicks, ...restroDishes] = restroitems
            restroDishes = restroDishes?.filter((card) => card?.card?.card?.hasOwnProperty('title'))

        }
    }

    isVeg = isVeg?.card?.card?.hasOwnProperty('isPureVeg')
    isVeg = isVeg === true

    return restaurantMenu === null ? <Shimmer /> : (

        <div className='w-full h-full mt-1'>
            <div className='w-[51%] m-auto flex flex-col '>
                {/* home link and search */}
                <div className='flex justify-between font-medium text-locationError my-8'>
                    <p className='text-[10px] mr-2'><span className='hover:text-lightColor'><Link to='/'>Home </Link></span> <span className='mx-1'>/</span> <span className='text-lightColor '> {restaurantInfo?.name}</span></p>
                    <button className='fill-lightColor   '>{searchLogo}</button>
                </div>


                {/* name and its details */}
                <div className='w-[99%] float-right'>
                    <RestroNameAndDetails restaurantInfo={restaurantInfo} offersOnRestaurant={offersOnRestaurant} />
                    {/* veg option */}
                    <p>veg only </p>
                    <hr />
                </div>


                {/* items  */}
                <div>
                    {
                        restroDishes.map((dishes, index) => {
                            const Title = dishes?.card?.card?.title
                            let itemCards = (dishes?.card?.card?.hasOwnProperty('categories')) ? dishes?.card?.card?.categories : dishes?.card?.card?.itemCards
                            return (
                                <>
                                {
                                    (dishes?.card?.card?.hasOwnProperty('categories')) ? <ShowingCategoryWise Title={Title} itemCards={itemCards} index={index} key={index} topPicks={topPicks} /> : <ShowingRecommendedWise topPicks={topPicks} Title={Title} key={index} itemCards={itemCards} index={index} />
                                }
                                    <hr className={`  border-t-[14px] border-lightGray`} />

                                </>
                            )
                        })
                    }
                </div>
                {/* licensing and address */}
               { (address?.length!==0)?
               <div className='bg-lightGray  w-full text-locationError px-3 h-60'>
                    <div className='flex pb-5  gap-4    items-center'>
                        <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_60,h_30/${address[1]?.card?.card?.imageId}`} alt="" />
                        <p className='text-sm'>{address[1]?.card?.card?.text}</p>
                    </div>
                    <hr className='bg-slate-400 h-[2px]'/>
                    <div className='py-2'>
                        <p className='text-sm font-bold'>{address[0]?.card?.card?.name}</p>
                        <p className='text-sm '>(Outlet:{address[0]?.card?.card?.area})</p>
                        <p className='text-xs py-3'> <i class="fa-sharp fa-solid fa-location-dot mr-2" ></i>{address[0]?.card?.card?.completeAddress}</p>
                       
                    </div>

                </div>:""}
            </div>
        </div>
    )
}

export default RestaurantMenu;