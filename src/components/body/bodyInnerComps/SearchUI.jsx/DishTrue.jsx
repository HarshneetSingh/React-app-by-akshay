import React from 'react'

const DishTrue = (props) => {
    let cards = props?.data
    cards = (cards?.length === 2) ? cards[1] : cards[0]
    const groupedCard = cards?.groupedCard?.cardGroupMap?.DISH?.cards?.[0]?.card?.card
    return (
        <>
            <div className=' flex py-2 whitespace-nowrap   '>
                <div className=' '>

                    <button className='bg-[#fafafa] z-0 text-sortByBtnColor px-2 py-[6px] mr-3 font-medium text-xs border rounded-md'>
                        Sort by
                        <i class="fa-solid fa-chevron-down text-sortByBtnColor text-[8px] before:pb-1"></i>
                    </button>
                    <div className='absolute flex-col flex p-2 border bg-gray-500'>
                        {
                            groupedCard?.sortConfigs.map((sort)=>{
                                return <button className='bg-slate-700'> {sort.title}</button>
                            })
                        }
                        </div>
                </div>

                <div className='mr-3 mt-2  h-5 border border-dashed border-l-1 bg-sortByBtnColor ' />
                {
                    groupedCard?.facetList.map((facet) => {
                        const faceInfo = facet?.facetInfo[0]
                        return <button className='bg-[#fafafa] text-sortByBtnColor px-2 py-[6px] mr-3 font-medium text-xs border rounded-md' key={faceInfo.id}>{faceInfo.label}</button>
                    })
                }
            </div>
        </>
    )
}

export default DishTrue