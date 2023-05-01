import React from 'react'

const RestaurantTrue = (props) => {
    let cards=props?.data
    cards=(cards?.length===2)?cards[1]:cards[0]
    console.log(cards)
    return (
        <>
        <div className='bg-[#f5f6f8]'>
        "hello"
        </div>
        </>
    )
}

export default RestaurantTrue