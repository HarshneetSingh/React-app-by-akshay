import React, { useState } from 'react'
import PaymentCard from './PaymentCard'
import { useOutletContext } from 'react-router-dom'

const PaymentOffers = (props) => {
  const [waste, ...mixoffers] = props.offers
  const availoffers = mixoffers.filter((word) => word?.cardType === "couponCardV2")
  const unavailoffers = mixoffers.filter((word) => word?.cardType === "unavailableCouponCardV2")
  const heading = mixoffers.filter((word) => word?.cardType === "messageCard")
  
  if (unavailoffers.length === 0) {
    heading.pop()
    heading.pop()
  }else{
  heading.pop()
  }
  console.log(heading)

  return (
    <div className='w-4/5 m-auto '>
      {
        heading.map((head, index) => {
          return (
            <div key={index}>
              <div className='mt-16 mb-6 font-bold text-2xl'>
                {
                  head?.data?.data?.message.split(' ').map((word) => {
                    const firstChar = word.charAt(0)
                    const sliced = word.slice(1).toLowerCase()
                    return firstChar + sliced + " "
                  })
                }
              </div>  
              <div className=' flex flex-wrap gap-9'>
                {
                  (head?.data?.data?.message === "AVAILABLE COUPONS") ?
                    availoffers.map((detail, index) => {
                      return <PaymentCard offerDetail={detail} key={index}  />
                    }) :
                    unavailoffers.map((detail, index) => {
                      return <PaymentCard offerDetail={detail} key={index} />
                    })
                }
              </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default PaymentOffers