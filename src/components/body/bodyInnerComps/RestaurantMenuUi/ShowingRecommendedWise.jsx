import React, { useState } from 'react'
import MenuCard from './MenuCard'

function loadMenu(card) {
    const item = card?.card?.info
    return (
        <>
            <MenuCard item={item} />
            <hr className='my-5 mt-10' />
        </>

    )
}
const ShowingRecommendedWise = (props) => {
    const { topPicks, Title, itemCards, index, showVeg } = props
    const [isVisible, setIsVisible] = useState(true)
    const VegCard = itemCards?.filter((card) => card?.card?.info?.itemAttribute?.vegClassifier === 'VEG')
    console.log(VegCard)
    return (
        <>

            <div className='w-[97%] m-auto'>

                <button className='w-full' onClick={() => setIsVisible(prev => !prev)}>
                    <div className='flex justify-between  py-5 '>
                        <p className="text-lg text-selectedBgColor group-hover:text-headerHoverColor group-hover:duration-100 font-extrabold ">{Title + ` (${(showVeg) ? VegCard.length:itemCards.length})`}</p>


                        <div className='text-lg text-selectedBgColor mr-2'>
                            {
                                (isVisible) ? <i className=" fa-sharp fa-solid fa-angle-up "></i> :
                                    <i className="  fa-sharp fa-solid fa-angle-down "></i>
                            }
                        </div>
                    </div>
                </button>
                <div>
                    {
                        (isVisible)
                            ? (showVeg) ? VegCard.map((card,index) => {
                              return <div key={card?.card?.info?.id}>{ loadMenu(card)}</div>
                            }) : itemCards.map((card,index) => {
                               return <div key={card?.card?.info?.id}>{ loadMenu(card)}</div>
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