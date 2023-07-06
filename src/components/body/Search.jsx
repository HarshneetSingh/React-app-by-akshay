import { useContext, useEffect, useState } from "react"
import LocationContext from "../../utils/LocationContext"
import { useSearchParams } from "react-router-dom"
import SearchOptions from "./bodyInnerComps/SearchUI/SearchOptions"
import ActiveQueryUI from "./bodyInnerComps/SearchUI/ActiveQueryUI"
import SearchMainShimmer from "./bodyInnerComps/SearchUI/SearchMainShimmer"
import SearchActiveQueryShimmer from "./bodyInnerComps/SearchUI/SearchActiveQueryShimmer"



async function presearch(location, setPreSearch) {
    const result = await fetch(`https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=${location.lat}&lng=${location.lng}`)
    const json= await result.json()

    setPreSearch(json?.data?.cards)
}


async function getSearchRestaurant(location, input, setSearchRestaurant) {
    setSearchRestaurant(null)
    const result = await fetch(`https://www.swiggy.com/dapi/restaurants/search/suggest?lat=${location.lat}&lng=${location.lng}&str=${input}&trackingId=null`)
    const data = await result.json()
    setSearchRestaurant(data?.data?.suggestions)
}


const Search = () => {
    const [input, setInput] = useState("")
    const [preSearch, setPreSearch] = useState(null)
    const [searchRestaurant, setSearchRestaurant] = useState(null)
    const [activeQuery, setActiveQuery] = useState(false)
    const [activeQueryData, setActiveQueryData] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const [location] = useContext(LocationContext)
    useEffect(() => {
        presearch(location, setPreSearch)
    }, [])

    useEffect(() => {
        if (input.length > 1) {
            getSearchRestaurant(location, input, setSearchRestaurant)
            if (activeQueryData !== null && input.length > 1) {
                setActiveQuery(false)
            }
        } else if (activeQueryData !== null && (input.length < 2)) {
            setActiveQuery(true)
        }
    }, [input])

    return (
        <div className="  w-full min-h-screen   ">
            <div className=" w-full flex h-28 flex-col mt-20 pt-7 bg-white justify-center fixed top-0 z-30  items-center " >
                <div className=" relative   w-[56%]  text-sortByBtnHoverColor">
                    <input className={` w-full p-[15px] border rounded border-teal-400 caret-locationError focus:outline-none font-semibold ${activeQuery ? "pl-11" : "pl-[auto]"} `} type="text" placeholder="Search for restaurants and food" value={input} onChange={(e) => {
                        setInput(e.target.value)
                    }} />
                    {
                        (input.length < 1) ?
                            <i className="text-xl absolute top-0 right-0 text-locationError pt-4 pr-4 fa-solid fa-magnifying-glass"></i> :
                            <button className="absolute  top-0 right-0 pt-4 pr-4" type="submit"><i className="text-lg font-extrabold fa-regular fa-x " onClick={() => setInput("")} /></button>
                    }
                    {
                        (activeQuery) ? <button className="text-3xl font-mono absolute top-[6px] left-4 animate-[rightSlash_100ms_linear_1] " onClick={() => {
                            setInput('')
                            setActiveQuery(false)
                            setActiveQueryData(null)
                            searchParams.delete('query');
                            setSearchParams(searchParams);
                        }}>&lt;</button> : ""
                    }
                </div>
            </div>


            <div className=" w-[56%] pb-5 m-auto">
                {
                    // if pre seacrh is null then show shimmer 
                    (preSearch === null) ?

                        <div className="mt-32"><SearchMainShimmer /></div> :// main search shimmer
                        // based on what  choice you clicked
                        (activeQuery === true) ?
                            <div className="mt-28 relative ">
                                {
                                    (activeQueryData === null) ?
                                    <SearchActiveQueryShimmer />  :
                                    <ActiveQueryUI prop={activeQueryData} />
                                }
                            </div>

                            : <div className="pl-4 mt-32 ">
                                {/* result based on your input */}
                                <SearchOptions prop={[input, searchRestaurant, setSearchParams, setActiveQuery, setActiveQueryData, setInput, preSearch]} />
                            </div >
                }

            </div>
        </div>
    )
}

export default Search