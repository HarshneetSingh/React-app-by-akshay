import React, { useState } from 'react'
const DishTrue = (props) => {
    let cards = props.data
    cards = (cards?.length === 2) ? cards[1] : cards[0]
    const groupedCard = cards?.groupedCard?.cardGroupMap?.DISH?.cards?.[0]?.card?.card
    const { selectedBtnArr, setSelectedBtnArr ,setExtraCallPreventer } = props
    return (
        <>
            <div className=' flex py-2 whitespace-nowrap   '>
                <div className='relative '>

                    <button className='bg-[#fafafa] z-0 text-sortByBtnColor px-2 py-[6px] mr-3 font-medium text-xs border rounded-md'>
                        Sort by
                        <i className="fa-solid fa-chevron-down text-sortByBtnColor text-[8px] before:pb-1"></i>
                    </button>
                    <div className=' absolute top-8 flex-col flex p-2 border bg-gray-500'>
                        {
                            groupedCard?.sortConfigs.map((sort) => {

                                return <button className={`${(sort.selected) ? "bg-slate-200" : "bg-slate-700"}`}
                                    key={sort.key}
                                    onClick={() => {

                                        setSelectedBtnArr({
                                            arrFace: selectedBtnArr.arrFace,
                                            sortKey: sort.key
                                        })
                                    }}> {sort.title}</button>
                            })
                        }
                    </div>
                </div>



                <div className='mr-3 mt-2  h-5 border border-dashed border-l-1 bg-sortByBtnColor ' />
                {
                    groupedCard?.facetList.map((facet,index) => {
                        const faceInfo = facet?.facetInfo[0]
                        const selected = faceInfo?.selected
                        const [selectedQuery, setSelectedQuery] = useState(selected)
                        
                        return <button
                            className={`  px-2 py-[6px] mr-3  text-xs border rounded-md  ${(selected) ? "border-[#ec997e] bg-[#fdf2ee] text-[#676a77] font-semibold" : 'border-black text-sortByBtnColor  bg-[#fafafa] font-medium'}`}
                            key={index}
                            onClick={() => {

                                if (!selectedQuery) {
                                    setSelectedBtnArr(
                                        {
                                            arrFace: [...selectedBtnArr.arrFace, { id: facet.id, infoId: faceInfo.id, infoOperater: faceInfo.operator, faceLabel: faceInfo.label }],
                                            sortKey: selectedBtnArr.sortKey
                                        }
                                    )
                                    setExtraCallPreventer(1)
                                } else {
                                    setSelectedBtnArr(
                                        {
                                            arrFace: selectedBtnArr.arrFace.filter((face) => { face.id !== facet.id }),
                                            sortKey: selectedBtnArr.sortKey
                                        }
                                    )
                                }
                            }}
                        >
                            {faceInfo.label}
                        </button>
                    })
                }
            </div >
        </>
    )
}

export default DishTrue



