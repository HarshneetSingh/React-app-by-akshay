import { useContext, useEffect, useState } from "react";
import { useOutletContext, useSearchParams, useLocation, useHistory } from "react-router-dom";
import LocationContext from "./LocationContext";
import SortFilterContext from "./SortFilterContext";

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
    const [location] = useContext(LocationContext)
    const [url, setUrl] = useSearchParams();
    const [selectedSort, setSelectedSort] = useContext(SortFilterContext)
    const [filterArr, setFilterArr] = yo[2]
    const [hello, sethello] = useState(false)

    useEffect(() => {
        console.log("hiii")
        if (hello === true) {
            updateRestroByfiltering(filterArr, props.setFilteredRestaurants, setUrl, url, location, selectedSort, setSelectedSort)
            sethello(false);
        }
    }, [hello])
    return <div className="w-4/5 m-auto">
        {
            props.filters?.map((category) => {
                return category?.options.map((filter, index) => {
                    return (filter?.selected === 1) ?
                        <button
                            onClick={() => {
                                if (category.key === "CUISINES") {
                                    setFilterArr(
                                        [
                                            { CUISINES: filterArr[0].CUISINES.filter((cuisine) => cuisine !== filter?.option) },
                                            { SHOW_RESTAURANTS_WITH: filterArr[1].SHOW_RESTAURANTS_WITH }
                                        ]

                                    )

                                } else {
                                    setFilterArr(
                                        [
                                            { CUISINES: filterArr[0].CUISINES },
                                            { SHOW_RESTAURANTS_WITH: filterArr[1].SHOW_RESTAURANTS_WITH.filter((cuisine) => cuisine !== filter?.option) }
                                        ]
                                    )

                                }
                                sethello(true);

                            }}
                            className="mr-2"
                        >
                            {filter?.option}
                        </button> : ""
                })
            })
        }
    </div>



    // filterData?.map((filterName, index) => {
    //     return (
    //         <div key={index}>
    //             <div>{filterName.title}</div>
    //             <div className="w-full  grid grid-cols-2">
    //                 {filterName?.options.map((filter, index) => {
    //                     return (
    //                         <FilterBarBttn
    //                             key={index}
    //                             index={index}
    //                             filterName={filterName}
    //                             filterArr={filterArr}
    //                             setFilterArr={setFilterArr}
    //                             filter={filter}
    //                         />
    //                     );
    //                 })}
    //             </div>
    //         </div>
    //     );
    // })




}
export function updateRestroByfiltering(filterArr, setFilteredRestaurants, setUrl, url, location, selectedSort, setSelectedSort) {

    let urlString = filterArr.map((condition, index) => {
        const conditionName = Object.keys(condition);
        const conditionValue = Object.values(condition);
        return conditionValue[0].length === 0
            ? ""
            : (index === 0 ? "%7B" : "%2C") +
            "%22" +
            conditionName +
            "%22%3A" +
            conditionValue[0]
                .map((child, indx) => {
                    return (
                        (indx === 0 ? "%5B" : "%2C") + "%22" + child + "%22"
                    );
                })
                .join("") +
            "%5D";
    });
    urlString = urlString.join("").replace(" ", "%20") + "%7D";
    updatingFilter(urlString, setFilteredRestaurants, setUrl, url, location, selectedSort, setSelectedSort)
}

function updatingFilter(urlString, setFilteredRestaurants, setUrl, url, location, selectedSort, setSelectedSort) {
    if (urlString.includes("3A")) {
        setUrl({ filter: `${urlString}` })
        setSelectedSort({
            ...selectedSort,
            filter: urlString
        })
    } else {
        urlString = undefined
        setUrl(url.delete('filter'))
        setSelectedSort({
            ...selectedSort,
            filter: undefined
        })
    }

    setFilteredRestaurants([])
    restroSorting(selectedSort.sort, setFilteredRestaurants, location, urlString)

}
