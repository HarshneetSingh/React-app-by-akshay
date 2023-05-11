import React, {useState}from 'react'
import PaymentCard from './PaymentCard'

const PaymentOffers = (props) => {
  const [waste, heading, ...mixoffers] = props.offers
  const offers = mixoffers.filter((word) => word?.cardType === "couponCardV2")
  const [copied,setCopied]=useState("")
  return (
    <div className='w-4/5 m-auto '>
      <div className='mt-10 mb-4'>
        {heading?.data?.data?.message.split(' ').map((word) => {
          const firstChar = word.charAt(0)
          const sliced = word.slice(1).toLowerCase()
          return firstChar + sliced + " "
        })}
      </div>
      <div className=' flex flex-wrap justify-between'> {
        offers.map((detail,index) => {
          return <PaymentCard offerDetail={detail} key={index} copied={copied} setCopied={setCopied}/>
        })
      }
      </div>
    </div>
  )
}

export default PaymentOffers