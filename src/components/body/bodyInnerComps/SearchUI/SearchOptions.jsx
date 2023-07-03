import { useContext } from "react"
import Shimmer from "../RestaurantUI/HomeMainShimmer"
import LocationContext from "../../../../utils/LocationContext"

async function fetchQuery(setActiveQueryData, restro, location, setInput) {
    setInput(restro.text)
    setActiveQueryData(null)
    const queryParams = new URLSearchParams(restro?.cta?.link)
    const metadata = queryParams.get("metadata")
    const result = await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=${location.lat}&lng=${location.lng}&str=${restro.text}&trackingId=undefined&submitAction=SUGGESTION&metaData=${metadata}`)
    const data = await result.json();
    setActiveQueryData([data?.data, metadata, restro.text, location])
}


const SearchOptions = (props) => {
    const [input, searchRestaurant, setSearchParams, setActiveQuery, setActiveQueryData, setInput] = props.prop
    const [location] = useContext(LocationContext)

    return (
        // if pre seacrh is true then check if  input length is less than 2 then show span 
        (input.length < 2) ?
            <span></span> :
            // if input length is greater than 2 then check if searchRestaurant is null then show shimmer 
            (searchRestaurant === null) ?
                <Shimmer /> :
                // if searchRestaurant is not null then check if searchRestaurant length ==0 then show no restro 
                (searchRestaurant.length === 0) ?
                    "no restro" :
                    // if searchRestaur length is not 0 then return 
                    searchRestaurant.map((restro) => {

                        return (
                            <button className="  h-24  w-full flex gap-x-4 items-center hover:bg-[#f2f6fc]"
                                onClick={() => {
                                    fetchQuery(setActiveQueryData, restro, location, setInput)
                                    setSearchParams({ query: restro.text })
                                    setActiveQuery(true)
                                }}
                                key={restro.text}>
                                <img className=" w-16 h-16 rounded " src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/${restro.cloudinaryId}`} alt="" />
                                <div className=" w-full text-left">
                                    <p className="text-sm  text-sortByBtnHoverColor font-normal">{restro.text}</p>
                                    <p className="text-xs text-[#686B78] ">{restro.tagToDisplay}</p>
                                </div>
                            </button>
                        )
                    })
    )
}

export default SearchOptions




