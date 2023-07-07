import React, { useState } from 'react'
const DishTrue = (props) => {
    const [keyModal, setKeyModal] = useState(false)
    let cards = props.data
    cards = (cards?.length === 2) ? cards[1] : cards[0]
    const groupedCard = cards?.groupedCard?.cardGroupMap?.DISH?.cards?.[0]?.card?.card
    const { selectedBtnArr, setSelectedBtnArr, setExtraCallPreventer } = props
    let sortName = groupedCard?.sortConfigs.filter((sort) => (sort.hasOwnProperty('selected')))
    if (sortName.length > 0 && sortName[0].key === "NONE") {
        sortName = []
    }
    return (
        <>
            <div className=' flex py-4 whitespace-nowrap items-center border-lightShimmer border w-full  border-dotted '>
                <div className='relative '>

                    <button onClick={() => {
                        setKeyModal(prev => !prev)
                    }} className={`bg-[#fafafa] z-0 text-sortByBtnColor px-2 py-[6px] mr-3  font-medium text-xs border rounded-md  ${(sortName.length > 0) ? "border-[#ec997e] bg-[#fdf2ee] text-[#676a77] font-semibold" : ""}`}>
                        Sort by {(selectedBtnArr.sortKey === "NONE" || selectedBtnArr.sortKey === "") ? "" : `: ${sortName[0]?.title}`}
                        <i className="fa-solid fa-chevron-down text-sortByBtnColor p-1 text-[8px] " />
                    </button>
                    {
                        keyModal && <div className=' absolute top-10 flex-col flex p-3  gap-y-2 border rounded-lg bg-[#fafafa] shadow-[0_1px_13px_#ededed]  ' >
                            {
                                groupedCard?.sortConfigs.map((sort) => {
                                    return <button
                                        key={sort.key}
                                        onClick={() => {
                                            setSelectedBtnArr({
                                                arrFace: selectedBtnArr.arrFace,
                                                sortKey: sort.key
                                            })
                                            setExtraCallPreventer(1)
                                        }}>
                                        <div className='flex gap-x-2'> <div className={`${(sort.selected) ?"border-darkOrange":"border-sortByBtnColor"} w-4 h-4 border rounded-full relative `}>
                                            <div className={`${(sort.selected) ? "bg-darkOrange opacity-95" : "bg-white"}   absolute h-2 w-2 rounded-full  top-2/4 -translate-y-2/4 -translate-x-2/4 left-2/4`}></div>
                                        </div> <p className='text-sm text-sortByBtnColor'>{sort.title}</p></div>  </button>
                                })
                            }
                        </div>
                    }
                </div>



                <div className='mr-3 h-5 border border-dashed border-l-1 bg-sortByBtnColor  ' />
                {
                    groupedCard?.facetList.map((facet, index) => {
                        const faceInfo = facet?.facetInfo[0]
                        const selected = faceInfo?.selected
                        const [selectedQuery, setSelectedQuery] = useState(selected)

                        return <button
                            className={`  px-1.5 py-1.5 mr-3  text-[13px] border rounded-md  ${(selected) ? "border-[#ec997e] bg-[#fdf2ee] text-[#676a77] font-semibold" : ' text-sortByBtnColor  bg-[#fafafa] font-medium'}`}
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
                            {faceInfo.label}{(selected) ? <i className=" text-[9px]   p-1 fa-regular fa-x " /> : ""}
                        </button>
                    })
                }

            </div >
            <div className='w-full h-full bg-lightShimmer'>
                hello
            </div>
        </>
    )
}

export default DishTrue



