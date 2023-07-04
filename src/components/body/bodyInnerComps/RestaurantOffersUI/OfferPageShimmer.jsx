import React from 'react'
import { CardShimmer } from '../../../../utils/helper'

const OfferPageShimmer = () => {
  return (
    <>
      <div className=' pl-10 pt-10 h-16 w-5/6 flex gap-x-6 justify-start items-center  m-auto'>
        <div className="w-40 h-5 mb-10 bg-shimmerColor"></div>
        <div className="w-40 h-5 mb-10 bg-shimmerColor"></div>
      </div>
      <hr className='bg-neutral-300' />
      <div className="w-5/6  m-auto  h-full  flex">
        <div className="  pt-[72] pl-16 "  >
          <div className="w-28 h-tenpx mb-10 bg-shimmerColor"></div>
          <div className="flex justify-between flex-wrap-reverse gap-x-10 gap-y-24 pb-20  ">
            {
              [...Array(12)].map((i, j) => {
                return <CardShimmer />
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default OfferPageShimmer