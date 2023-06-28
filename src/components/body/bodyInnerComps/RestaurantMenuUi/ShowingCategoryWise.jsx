import React, { useState } from 'react'
import MenuCard from './MenuCard'

function ladingCards(card, isVisible, setIsVisible) {
    const title = card?.title
    const itemCards = card?.itemCards
    return (
        <div className='w-full'  >
            <div className='flex justify-between  py-3 ' onClick={() => setIsVisible(prev => !prev)}>
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
                            <div  key={card?.card?.info?.id}>
                                <MenuCard item={item}/>
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
}
const ShowingCategoryWise = (props) => {
    const { Title, itemCards, showVeg } = props
    const [isVisible, setIsVisible] = useState(true)
    const VegCard = itemCards?.filter((card) => card?.info?.itemAttribute?.vegClassifier === 'veg')
    return (
        <div className='w-[97%] m-auto'>
            {
                (showVeg === true && VegCard.length === 0) ? "" : <p className='text-lg text-selectedBgColor  font-extrabold mt-5 mb-2' >{Title}</p>
            }

            <div >
                {(showVeg) ? VegCard.map((card,index) => {
                    return <div key={index}>{ ladingCards(card, isVisible, setIsVisible)}</div>
                }) :
                    itemCards.map((card, index) => {
                        return <div key={index}>{ ladingCards(card, isVisible, setIsVisible)}</div>
                    })
                }
            </div>
        </div>
    )
}

export default ShowingCategoryWise