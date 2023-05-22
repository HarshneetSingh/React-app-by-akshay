import { useOutletContext } from "react-router-dom";

export const filterData = (allRestaurants, input) => {

    let result = allRestaurants.filter((restaurant) => {

        return restaurant?.data?.data?.name?.toLowerCase()?.includes(input?.toLowerCase());
    })

    return result;
}
export const restroSorting = async (sortKey, setFilteredRestaurants, location, filter) => {

    const data = await fetch(` https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.lat}&lng=${location.lng}&sortBy=${sortKey}${(filter === undefined) ? '' : "&filters=" + filter}&page_type=DESKTOP_WEB_LISTING`)
    const json = await data.json();
    setFilteredRestaurants(json?.data);
}
export const searchLogo = <svg viewBox="5 -1 12 25" height="17" width="17" ><path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"></path></svg>


export const facet = (selectedBtnArr) => {
    return selectedBtnArr.map((btn, index) => {
        return (index === 0 ? "%7B" : "%2C") + "%22" + btn.id + "%22%3A%5B%7B%22id%22%3A%22" + btn.infoId + "%22%2C%22operator%22%3A%22" + btn.infoOperater + "%22%2C%22label%22%3A%22" + btn.faceLabel + "%22%7D%5D"
    }).join("").replace('+', "%2B") + "%7D"
}
export function btn(setCopied, copied, couponCode) {
    return <button
        className={`border py-2 px-5 mt-2 font-bold  border-headerHoverColor hover:shadow-[0_2px_8px_#d4d5d9]  text-sm ${(copied === couponCode) ? "px-9 border-neutral-400 text-stone-600" : "  text-headerHoverColor"}`}
        onClick={() => {
            setCopied(couponCode)
            navigator.clipboard.writeText(couponCode);
        }}
    >
        {(copied === couponCode) ? "COPIED" : "COPY CODE"}
    </button>

}
export function FilterSelectedBtn(props) {
    const yo = useOutletContext()
    const { filterArr, setFilterArr } = yo[2]
    console.log(filterArr)
    return <div className="w-4/5 m-auto">
        {
            props.filters?.map((category) => {
                console.log(category)
                return category?.options.map((filterName) => {
                    return (filterName?.selected === 1) ? <button
                    onClick={() => {
                        setFilterArr(
                            [
                                { CUISINES: filterArr[0].CUISINES.filter((cuisine)=>cuisine!==filterName?.option) },
                                { SHOW_RESTAURANTS_WITH: filterArr[1].SHOW_RESTAURANTS_WITH }
                            ]
                        )
                    }}
                        className="mr-2">{filterName?.option}</button> : ""
                })
            })
        }
    </div>

}


