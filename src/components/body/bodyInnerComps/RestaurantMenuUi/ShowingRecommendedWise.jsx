import React, { useState } from 'react'
import MenuCard from './MenuCard'

const ShowingRecommendedWise = (props) => {
    const { topPicks, Title, itemCards, index } = props
    const [isVisible, setIsVisible] = useState(true)
    return (
        <>

            <div className='w-[97%] m-auto'>

                <button className='w-full' onClick={() => setIsVisible(prev => !prev)}>
                    <div className='flex justify-between  py-5 '>
                        <p className="text-lg text-selectedBgColor group-hover:text-headerHoverColor group-hover:duration-100 font-extrabold ">{Title + ` (${itemCards.length})`}</p>


                        <div className='text-lg text-selectedBgColor mr-2'>
                            {
                                isVisible ? <i className=" fa-sharp fa-solid fa-angle-up "></i> :
                                    <i className="  fa-sharp fa-solid fa-angle-down "></i>
                            }
                        </div>
                    </div>
                </button>
                <div>
                    {(isVisible) ?
                        itemCards.map((card) => {
                            const item = card?.card?.info
                            return (
                                <>
                                <MenuCard item={item} />
                                    <hr className='my-5 mt-10' />
                                </>

                            )
                        })
                        :
                        ""
                    }
                </div>



            </div>

        </>
    )
}

export default ShowingRecommendedWise