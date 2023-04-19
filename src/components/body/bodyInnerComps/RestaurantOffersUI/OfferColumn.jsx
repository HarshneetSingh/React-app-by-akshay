import React from 'react'
import { Link } from 'react-router-dom'
const OfferColumn = (props) => {
  const cards = props.photos?.data?.data?.cards
  console.log(cards)
  return (
    <div className='w-full  h-[340px] bg-[#171a29]'>
      <div className='w-4/5 m-auto h-full '>
        <div className=" h-full flex justify-between items-center">
          {
            cards.map(card => {
              const cardDetail=card?.data
              return (
                <Link to={`collections/${cardDetail?.link}?type=rcv2`} key={cardDetail?.bannerId}><img width="260" height="260" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/${cardDetail?.creativeId}`} alt="" /></Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default OfferColumn