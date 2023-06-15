import React, { useState } from 'react'

const ShowingCategoryWise = (props) => {
    const { Title, itemCards } = props
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div>
            <p className='w-full' >{Title}</p>
            <div>
                {
                    itemCards.map((card) => {
                        const title = card?.title
                        const itemCards = card?.itemCards
                        return (
                            <button className='w-full' onClick={() => setIsVisible(prev => !prev)}>
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
                                        itemCards.map((item) => {
                                            return (
                                                <div>
                                                    kidda
                                                </div>
                                            )
                                        })
                                        :
                                        ""
                                    }
                                </div>
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ShowingCategoryWise