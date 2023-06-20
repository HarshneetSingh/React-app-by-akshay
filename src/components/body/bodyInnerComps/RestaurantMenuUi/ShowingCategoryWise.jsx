import React, { useState } from 'react'
import MenuCard from './MenuCard'

const ShowingCategoryWise = (props) => {
    const { Title, itemCards } = props
    const [isVisible, setIsVisible] = useState(true)

    return (
        <div className='w-[97%] m-auto'>
            <p className='text-lg text-selectedBgColor  font-extrabold mt-5 mb-2' >{Title}</p>
            <div >
                {
                    itemCards.map((card) => {
                        const title = card?.title
                        const itemCards = card?.itemCards
                        return (
                            <div className='w-full' onClick={() => setIsVisible(prev => !prev)}>
                                <div className='flex justify-between  py-3 '>
                                    <p className="text-base text-ttlRestroHeading font-medium group-hover:text-headerHoverColor group-hover:duration-100 ">{title + ` (${itemCards.length})`}</p>


                                    <div className='text-lg text-ttlRestroHeading mr-3   '>
                                        {
                                            isVisible ? <i className=" fa-sharp fa-solid fa-angle-up "></i> :
                                                <i className="  fa-sharp fa-solid fa-angle-down "></i>
                                        }
                                    </div>
                                </div>

                                <div>
                                    {(isVisible) ?
                                        itemCards.map((card) => {
                                            const item = card?.card?.info
                                            return (
                                                <div>
                                                    <MenuCard item={item} />
                                                    <hr className='my-5 mt-10' />

                                                </div>
                                            )
                                        })
                                        :
                                        ""
                                    }
                                </div>
                                <hr className='bg-black h-[0px]' />

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ShowingCategoryWise