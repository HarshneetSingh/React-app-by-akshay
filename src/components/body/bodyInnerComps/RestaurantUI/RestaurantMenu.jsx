
import { Link, useParams } from 'react-router-dom'
import useRestaurantMenu from '../../../../utils/useRestaurantMenu';
import Shimmer from '../RestaurantUI/Shimmer';
import { searchLogo } from '../../../../utils/helper';

const RestaurantMenu = () => {

  // *bringing param dynamically 
  const { stringResid } = useParams();


  // *now cutting the stringResid to res id 
  let resid = stringResid.split("-");
  resid = resid[resid.length - 1]


  //*RESTATUANT HOOK TO GET THE RESTATUANTmenu;
  const restaurantMenu = useRestaurantMenu(resid);
  const restaurantInfo = restaurantMenu?.cards?.[0]?.card?.card?.info




  return restaurantMenu === null ? <Shimmer /> : (

    <div className='w-full h-full mt-1'>
      <div className='w-2/4 m-auto '>
        {/* home link and search */}
        <div className='flex justify-between font-medium text-locationError my-8'>
          <p className='text-[10px] mr-2'><span className='hover:text-lightColor'><Link to='/'>Home </Link></span> <span className='mx-1'>/</span> <span className='text-lightColor '> {restaurantInfo?.name}</span></p>
          <button className='fill-lightColor   '>{searchLogo}</button>
        </div>

        {/* name and its details */}
        <div className='w-[99%] float-right'>
          <div className='flex justify-between '>
            <div>
              <p className='text-xl font-semibold'>{restaurantInfo?.name}</p>
              <p className='text-xs my-1 text-locationError'>{restaurantInfo?.cuisines.join(', ')}</p>
              <p className='relative text-xs text-locationError'>{restaurantInfo?.areaName}, {restaurantInfo?.sla?.lastMileTravelString} {(restaurantInfo.hasOwnProperty('multiOutlet')) ? <i onClick={() => {
                showMultiOutlet()
              }} className="fa-solid fa-caret-down text-headerHoverColor text-[9px] absolute mt-1  ml-1"></i> : ""}</p>
            </div>

            <div className='border text-[#3d9b6d] text-sm border-[#e9e9eb] shadow-[0_1px_5px_#f9f9f9] rounded-md  p-2'>
              <i className="fa-solid fa-star mr-1  mb-1 text-sm" /><span className='font-extrabold'>{restaurantInfo?.avgRatingString}</span>
              <hr className=' my-1' />
              <p className=' text-[10px] text-locationError mt-2 font-bold tracking-[-0.05rem]'>{restaurantInfo?.totalRatingsString}</p>
            </div>

          </div>
          <div className='m-1 my-4 flex text-locationError text-sm gap-x-2'><img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/${restaurantInfo?.feeDetails?.icon}`} alt="" />{restaurantInfo?.feeDetails?.message}</div>
          <div className='h-4  border-locationError border-t border-dashed'></div>
          <div className='flex text-sm font-extrabold text-ttlRestroHeading'>
            <p className='flex mr-5'><svg className=" mr-3 " width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none"><circle r="8.35" transform="matrix(-1 0 0 1 9 9)" stroke="#3E4152" stroke-width="1.3"></circle><path d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z" fill="#3E4152"></path></svg>{restaurantInfo?.sla?.slaString}</p>
            <p className='flex'><svg className=" mr-3 " width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none"><circle cx="9" cy="9" r="8.25" stroke="#3E4152" stroke-width="1.5"></circle><path d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z" fill="#3E4152"></path></svg>
              {restaurantInfo?.costForTwoMessage}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantMenu;