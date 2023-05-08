import React, { useState ,useEffect} from 'react'
import Shimmer from '../RestaurantUI/Shimmer'
import RestaurantTrue from './RestaurantTrue'
import DishTrue from './DishTrue'
import { facet } from '../../../../utils/helper'

async function getSelectedData(otherData, id, setSelectedData,setLoadOnChange,selectedBtnArr) {
    const [metaData, RestroName, location] = otherData
    setLoadOnChange(true)
    const result = await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=${location.lat}&lng=${location.lng}&str=${RestroName}&trackingId=undefined&submitAction=SUGGESTION&metaData=${metaData}${(selectedBtnArr.arrFace.length===0)?"":"&facets="+facet(selectedBtnArr.arrFace)}${(selectedBtnArr.sortKey==='')?"":"&sortKey="+selectedBtnArr.sortKey}&selectedPLTab=${id}`)
    const data = await result.json();
    setSelectedData(data?.data)
    setLoadOnChange(false)
}
function btnclick(condition, a, b, c, d, ep, ep1,ep2,ep3,ep4, f) {
    if (condition) {
        a(true)
        b(false)
    } else {
        c(true)
        d(false)
        getSelectedData( ep, ep1,ep2,ep3,ep4)
        f(true)
    }
}

const ActiveQueryUI = (props) => {
    const activeQueryData = props.prop
    const [queryData, otherData] = [activeQueryData?.[0], activeQueryData?.filter((data, index) => index != 0)]
    const [restaurantData, setRestaurantData] = useState(queryData)
    const [dishData, setDishData] = useState(queryData)
    // setting restaurant dishes state
    const btns = queryData?.cards?.[0]?.card?.card?.tab
    const [defaultRestroStatus, setDefaultRestroStatus] = useState('selected' in btns?.[0])
    const [defaultDishStatus, setDefaultDishStatus] = useState('selected' in btns?.[1])
    const [restaurantStatus, setRestaurantStatus] = useState(defaultRestroStatus)
    const [dishStatus, setDishStatus] = useState(defaultDishStatus)
    // if btn is selected
   
    const [loadOnChange, setLoadOnChange] = useState(false)

    // Dish inner btn state 

    const [selectedBtnArr, setSelectedBtnArr] = useState({
        arrFace: [],
        sortKey: ""
    })
    useEffect(() => {
        if (selectedBtnArr.arrFace.length > 0 || selectedBtnArr.sortKey !== "") {
            // console.log(selectedBtnArr)
            getSelectedData(otherData, "DISH",setDishData, setLoadOnChange, selectedBtnArr)
        }
    }, [selectedBtnArr])

    return (loadOnChange)?<Shimmer/>:(
        <div className=''>
            <div className="text-sm font-bold mb-1 ">
                <button className={`border mr-2 px-3 py-2 rounded-3xl ${(restaurantStatus) ? "bg-selectedBgColor text-white border-selectedBorderColor" : "bg-white text-ttlRestroHeading border-neutral-300"}`}
                    onClick={() => {
                        btnclick(defaultRestroStatus, setRestaurantStatus, setDishStatus, setRestaurantStatus, setDishStatus,otherData, btns?.[0]?.id, setRestaurantData,setLoadOnChange, selectedBtnArr,setDefaultRestroStatus)
                    }}
                >
                    {btns?.[0]?.title}
                </button >
                <button className={`border px-3 py-2 rounded-3xl ${(dishStatus) ? "bg-selectedBgColor text-white border-selectedBorderColor" : "bg-white text-ttlRestroHeading border-neutral-300"}`}
                    onClick={() => {
                        btnclick(defaultDishStatus,setDishStatus, setRestaurantStatus ,setDishStatus , setRestaurantStatus,otherData, btns?.[1]?.id, setDishData,setLoadOnChange,selectedBtnArr,setDefaultDishStatus)
                    }}>
                    {btns?.[1]?.title}
                </button>
            </div>
            <div className='border  '>
                {restaurantStatus && <RestaurantTrue data={restaurantData?.cards}/>}
                {dishStatus && <DishTrue data={dishData?.cards} otherData={otherData} setLoadOnChange={setLoadOnChange} loadOnChange={loadOnChange} setDishData={setDishData} selectedBtnArr={selectedBtnArr} setSelectedBtnArr={setSelectedBtnArr}/>}
            </div>
        </div>
    )
}

export default ActiveQueryUI