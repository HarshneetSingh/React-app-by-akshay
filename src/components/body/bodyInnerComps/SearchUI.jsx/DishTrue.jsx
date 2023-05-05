import React, { useEffect, useState } from 'react'
function facet(selectedBtnArr) {
    return selectedBtnArr.map((btn, index) => {
        return (index === 0 ? "%7B" : "%2C") + "%22" + btn.id + "%22%3A%5B%7B%22id%22%3A%22" + btn.infoId + "%22%2C%22operator%22%3A%22" + btn.infoOperater + "%22%2C%22label%22%3A%22" + btn.faceLabel + "%22%7D%5D"
    }).join("").replace('+', "%2B") + "%7D"
}
async function getSelectedData(otherData, setLoadOnChange, setDishData, selectedBtnArr) {
    console.log("api before" + selectedBtnArr)

    // const [metaData, RestroName, location] = otherData
    // setLoadOnChange(true)
    // const result = await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=${location.lat}&lng=${location.lng}&str=${RestroName}&trackingId=undefined&submitAction=SUGGESTION&facets=${facet(selectedBtnArr)}&selectedPLTab=DISH`)
    // const data = await result.json()
    // console.log("api after" +selectedBtnArr)
    // setDishData(data?.data)
    // setLoadOnChange(false)
}
const DishTrue = (props) => {
    let cards = props.data
    cards = (cards?.length === 2) ? cards[1] : cards[0]
    const groupedCard = cards?.groupedCard?.cardGroupMap?.DISH?.cards?.[0]?.card?.card
    const [selectedBtnArr, setSelectedBtnArr] = useState([])

    useEffect(() => {
        if (selectedBtnArr.length > 0) {
            console.log("useEF")
            getSelectedData(props.otherData, props.setLoadOnChange, props.setDishData, selectedBtnArr)
        }
    }, [selectedBtnArr])
    return (
        <>
            <div className=' flex py-2 whitespace-nowrap   '>
                <div className=' '>

                    <button className='bg-[#fafafa] z-0 text-sortByBtnColor px-2 py-[6px] mr-3 font-medium text-xs border rounded-md'>
                        Sort by
                        <i className="fa-solid fa-chevron-down text-sortByBtnColor text-[8px] before:pb-1"></i>
                    </button>
                    {/* <div className='absolute flex-col flex p-2 border bg-gray-500'>
                        {
                            groupedCard?.sortConfigs.map((sort) => {
                                return <button className={`${(sort.selected) ? "bg-slate-200" : "bg-slate-700"}`}
                                    onClick={() => {
                                        setSelectedBtnArr(oldvalue =>
                                        ({
                                            arrFace:oldvalue.arrFace,
                                            sortKey: sort.key   

                                        })
                                        )
                                    }}> {sort.title}</button>
                            })
                        }
                    </div> */
                    }
                </div>

                <div className='mr-3 mt-2  h-5 border border-dashed border-l-1 bg-sortByBtnColor ' />
                {
                    groupedCard?.facetList.map((facet) => {
                        const faceInfo = facet?.facetInfo[0]
                        const selected = faceInfo?.selected
                        return <button
                            className={`  px-2 py-[6px] mr-3  text-xs border rounded-md  ${(selected) ? "border-[#ec997e] bg-[#fdf2ee] text-[#676a77] font-semibold" : 'border-black text-sortByBtnColor  bg-[#fafafa] font-medium'}`}
                            key={faceInfo.id}
                            onClick={() => {

                                setSelectedBtnArr([...selectedBtnArr, { id: facet.id, infoId: faceInfo.id, infoOperater: faceInfo.operator, faceLabel: faceInfo.label }])
                            }}
                        >
                            {faceInfo.label}
                        </button>
                    })
                }
            </div>
        </>
    )
}

export default DishTrue


//%7B%22SLA%22%3A%5B%7B%22id%22%3A%2240%22%2C%22operator%22%3A%22LTE%22%2C%22label%22%3A%22Fast%20Delivery%22%7D%5D%7B%22RATING%22%3A%5B%7B%22id%22%3A%224%22%2C%22operator%22%3A%22GTE%22%2C%22label%22%3A%22Rated%204%2B%22%7D%5D%7D&selectedPLTab=DISH

// %7B%22SLA%22%3A%5B%7B%22id%22%3A%2240%22%2C%22operator%22%3A%22LTE%22%2C%22label%22%3A%22Fast%20Delivery%22%7D%5D%2C%22RATING%22%3A%5B%7B%22id%22%3A%224%22%2C%22operator%22%3A%22GTE%22%2C%22label%22%3A%22Rated%204%2B%22%7D%5D%7D&selectedPLTab=DISH


// %7B%22SLA%22%3A%5B%7B%22id%22%3A%2240%22%2C%22operator%22%3A%22LTE%22%2C%22label%22%3A%22Fast%20Delivery%22%7D%5D%2C%22RATING%22%3A%5B%7B%22id%22%3A%224%22%2C%22operator%22%3A%22GTE%22%2C%22label%22%3A%22Rated%204%2B%22%7D%5D%2C%22PRICE%22%3A%5B%7B%22id%22%3A%2210000%3A%3A25000%22%2C%22operator%22%3A%22RANGE%22%2C%22label%22%3A%22Rs%20100-Rs%20250%22%7D%5D%7D&selectedPLTab=DISH









// %7B%22RATING%22%3A%5B%7B%22id%22%3A%224%22%2C%22operator%22%3A%22GTE%22%2C%22label%22%3A%22Rated%204%2B%22%7D%5D&selectedPLTab=DISH
// %7B%22RATING%22%3A%5B%7B%22id%22%3A%224%22%2C%22operator%22%3A%22GTE%22%2C%22label%22%3A%22Rated%204%2B%22%7D%5D%7D&selectedPLTab=DISH




// import React, { useEffect, useState } from 'react'
// function facet(selectedBtnArr) {
//     return selectedBtnArr.map((btn, index) => {
//         return (index === 0 ? "%7B" : "%2C") + "%22" + btn.id + "%22%3A%5B%7B%22id%22%3A%22" + btn.infoId + "%22%2C%22operator%22%3A%22" + btn.infoOperater + "%22%2C%22label%22%3A%22" + btn.faceLabel + "%22%7D%5D"
//     }).join("").replace('+', "%2B") +(selectedBtnArr.length===1?"%7D":"")
// }
// async function getSelectedData(otherData, setLoadOnChange, setDishData, selectedBtnArr) {
//     console.log(selectedBtnArr)

//     const [metaData, RestroName, location] = otherData
//     setLoadOnChange(true)
//     const result = await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=${location.lat}&lng=${location.lng}&str=${RestroName}&trackingId=undefined&submitAction=SUGGESTION&facets=${(selectedBtnArr.arrFace.length===0)?"":facet(selectedBtnArr.arrFace)}&sortKey=${selectedBtnArr.sortKey}&selectedPLTab=DISH`)
//     const data = await result.json()
//     setDishData(data?.data)
//     setLoadOnChange(false)
// }
// const DishTrue = (props) => {
//     let cards = props.data
//     cards = (cards?.length === 2) ? cards[1] : cards[0]
//     const groupedCard = cards?.groupedCard?.cardGroupMap?.DISH?.cards?.[0]?.card?.card
//     const [selectedBtnArr, setSelectedBtnArr] = useState({
//         arrFace: [],
//         sortKey: ""
//     })

//     useEffect(() => {
//         if (selectedBtnArr.arrFace.length > 0 || selectedBtnArr.sortKey !== "") {
//             // console.log(selectedBtnArr)
//             getSelectedData(props.otherData, props.setLoadOnChange, props.setDishData, selectedBtnArr)
//         }
//     }, [selectedBtnArr])
//     return (
//         <>
//             <div className=' flex py-2 whitespace-nowrap   '>
//                 <div className=' '>

//                     <button className='bg-[#fafafa] z-0 text-sortByBtnColor px-2 py-[6px] mr-3 font-medium text-xs border rounded-md'>
//                         Sort by
//                         <i className="fa-solid fa-chevron-down text-sortByBtnColor text-[8px] before:pb-1"></i>
//                     </button>
//                     <div className='absolute flex-col flex p-2 border bg-gray-500'>
//                         {
//                             groupedCard?.sortConfigs.map((sort) => {
//                                 return <button className={`${(sort.selected) ? "bg-slate-200" : "bg-slate-700"}`}
//                                     onClick={() => {
//                                         setSelectedBtnArr(oldvalue =>
//                                         ({
//                                             arrFace:oldvalue.arrFace,
//                                             sortKey: sort.key

//                                         })
//                                         )
//                                     }}> {sort.title}</button>
//                             })
//                         }
//                     </div>
//                 </div>

//                 <div className='mr-3 mt-2  h-5 border border-dashed border-l-1 bg-sortByBtnColor ' />
//                 {
//                     groupedCard?.facetList.map((facet) => {
//                         const faceInfo = facet?.facetInfo[0]
//                         const selected = faceInfo?.selected
//                         return <button
//                             className={`  px-2 py-[6px] mr-3  text-xs border rounded-md  ${(selected) ? "border-[#ec997e] bg-[#fdf2ee] text-[#676a77] font-semibold" : 'border-black text-sortByBtnColor  bg-[#fafafa] font-medium'}`}
//                             key={faceInfo.id}
//                             onClick={() => {
//                                 setSelectedBtnArr(oldvalue => ({
//                                    arrFace: selectedBtnArr.arrFace.push({ id: facet.id, infoId: faceInfo.id, infoOperater: faceInfo.operator, faceLabel: faceInfo.label }),
//                                    sortKey:oldvalue.sortKey
//                                 })
//                                 )
//                             }}
//                         >
//                             {faceInfo.label}
//                         </button>
//                     })
//                 }
//             </div>
//         </>
//     )
// }

// export default DishTrue
