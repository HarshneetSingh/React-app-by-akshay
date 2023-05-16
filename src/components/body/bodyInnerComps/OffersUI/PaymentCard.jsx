import React, { useContext } from 'react'
import OfferModalContext from '../../../../utils/OfferModalContext'
import { btn } from '../../../../utils/helper';

const PaymentCard = (props) => {
    let card = props.offerDetail
    card = card.data?.data
    const {offerModalData, setOfferModalData,offerModalState,setOfferModalState,copied, setCopied}= useContext(OfferModalContext)

    return (
        <div className='border border-slate-300 p-8 w-96 '>
            <div className='flex'>
                <div className='flex items-center justify-around border border-[#daceb7]  bg-[#fffae6]  '>
                    <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/${card?.logo}`} className="w-5 h-5 mx-2 " alt="" />
                    <div className=' text-sm px-3 font-semibold h-full text-ttlRestroHeading relative '>
                        <div className='m-2 '> {card?.couponCode}</div>
                        <span className=' before:content-[" "] before:bottom-0 before:absolute before:w-2 before:h-2  before:border-transparent before:border-[5px] before:border-b-[5px] before:left-0 before:border-b-[#daceb7]       after:bottom-[-2px] after:content-[" "] after:border-transparent after:border-b-white  after:border-[5px] after:border-b-[5px]  after:absolute after:w-2 after:h-2 after:left-0'></span>
                        <span className=' before:content-[" "] before:top-0 before:absolute before:w-2 before:h-2  before:border-transparent before:border-[5px] before:border-t-[5px] before:left-0 before:border-t-[#daceb7]       after:top-[-2px] after:content-[" "] after:border-transparent after:border-t-white  after:border-[5px] after:border-t-[5px]  after:absolute after:w-2 after:h-2 after:left-0'></span>
                    </div>
                </div>
            </div>
            <div className='text-sm font-semibold mt-4'>{card?.title}</div>
            <div className='text-xs font-light mt-2'>{card?.description}</div>
            <div>
                <button
                    className="my-3 text-xs font-extrabold text-[#5d8ed5]"
                    onClick={() => {
                        setOfferModalData(card)
                        setOfferModalState(true)
                    }}>+ MORE</button>

            </div>
            <div>
                {btn(setCopied,copied, card?.couponCode)}

            </div>
        </div>
    )
}

export default PaymentCard