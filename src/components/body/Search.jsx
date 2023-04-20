import { useContext, useEffect, useState } from "react"
// import LocationContext from "../../utils/LocationContext"
async function getSearchRestaurant(location,input,setSearchRestaurant){
    const result = await fetch(`https://www.swiggy.com/dapi/restaurants/search/suggest?lat=${location.lat}&lng=${location.lng}&str=${input}&trackingId=null`)
    const data=await result.json()
    setSearchRestaurant(data?.data)
}
const Search = () => {
    const [input, setInput] = useState("")
    const [searchRestaurant,setSearchRestaurant] = useState([])
    // const [location] =useContext(LocationContext)
    // useEffect(()=>{
    //     if (input.length>1){
    //         getSearchRestaurant(location,input,setSearchRestaurant)
    //     }
    // },[input])
    return (
        <div className="  w-full   ">
            <div className=" w-full flex h-28  mt-20 pt-7 bg-white justify-center fixed top-0  items-center " >
                <div className=" relative    w-[56%]  text-sortByBtnHoverColor">
                    <input className="  w-full p-[15px] border rounded border-teal-400 caret-locationError focus:outline-none font-semibold " type="text" placeholder="Search for restaurants and food" value={input} onChange={(e) => { setInput(e.target.value) }} />
                    {
                        (input.length < 1) ?
                            <i className="text-xl absolute top-0 right-0 text-sortByBtnHoverColor pt-4 pr-4 fa-solid fa-magnifying-glass"></i> :
                            <button className="absolute  top-0 right-0 pt-4 pr-4" type="submit"><i className="text-lg font-extrabold fa-regular fa-x " onClick={() => setInput("")} /></button>
                    }
                </div>
            </div>
            {/* {<div className="border  mt-32 h-screen  w-[56%] pb-5 m-auto pl-4">
                    <div className="h-24 border w-full flex gap-x-4 items-center hover:bg-[#f2f6fc]">
                        <div className="border w-16 h-16 "></div>
                        <div className=" w-full">
                            <p className="text-base text-sortByBtnHoverColor font-thin">Asian</p>
                            <p className="text-xs text-[#7e808c] ">Restaurant</p>
                        </div>
                    </div>
            </div>} */}
        </div>
    )
}

export default Search