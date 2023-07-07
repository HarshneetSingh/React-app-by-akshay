import React from 'react'
import RestroCards from './RestroCards'

const RestaurantTrue = (props) => {
    let cards = props?.data
    cards = (cards?.length === 2) ? cards[1] : cards[0]

    const topResult = cards?.groupedCard?.cardGroupMap?.RESTAURANT?.cards?.filter((card) => card?.card?.card?.hasOwnProperty('info'))
    const moreResults = cards?.groupedCard?.cardGroupMap?.RESTAURANT?.cards?.filter((card) => card?.card?.card?.hasOwnProperty('title') && card?.card?.card?.hasOwnProperty('restaurants'))
    return (
        <div className='bg-lightShimmer '>
            <div className=' p-5 pt-10 justify-between gap-y-5  flex flex-wrap'>

                {
                    (topResult.length > 0) ?
                        topResult.map((card) => {
                            const info = card?.card?.card?.info
                            return < RestroCards key={info?.id} CardsInfo={info} />
                        }) : ""

                }
            </div>
            <div>
                {
                    (moreResults.length > 0) ?

                        <>
                            <p className='font-extrabold text-ttlRestroHeading p-5'>{moreResults[0]?.card?.card?.title}</p>
                            <div className='px-5  justify-between gap-y-5  flex flex-wrap'>
                                {
                                    moreResults?.[0]?.card?.card?.restaurants?.map((card) => {
                                        const info = card?.info
                                        return  < RestroCards key={info?.id} CardsInfo={info} />
                                    })
                                }
                            </div>
                        </> : ""
                }
            </div>
        </div>
    )
}

export default RestaurantTrue