import React, { useState } from 'react'
import MenuCard from './MenuCard'

const ShowingCategoryWise = (props) => {
    const { Title, itemCards } = props
    const [isVisible, setIsVisible] = useState(true)

    return (
        <div className='w-[97%] m-auto'>
            <p className='text-lg text-selectedBgColor  font-extrabold mt-5' >{Title}</p>
            <div >
                {
                    itemCards.map((card) => {
                        const title = card?.title
                        const itemCards = card?.itemCards
                        return (
                            <div  className='w-full' onClick={() => setIsVisible(prev => !prev)}>
                                <div className='flex justify-between  py-5 '>
                                    <p className="text-[17px] text-sortByBtnHoverColor group-hover:text-headerHoverColor group-hover:duration-100 ">{title}</p>


                                    <div className='text-lg text-locationError '>
                                        {
                                            isVisible ? <i className=" fa-sharp fa-solid fa-angle-up "></i> :
                                                <i className="  fa-sharp fa-solid fa-angle-down "></i>
                                        }
                                    </div>
                                </div>

                                <div>
                                    {(isVisible)?
                                        itemCards.map((card) => {
                                            const item = card?.card?.info
                                            return (
                                                <div>
                                                   <MenuCard item={item}/>
                                                </div>
                                            )
                                        })
                                        :
                                        ""
                                    }
                                </div>
                                <hr className='my-2' />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ShowingCategoryWise