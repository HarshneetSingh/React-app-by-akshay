import React from 'react'

const PaymentCard = (props) => {
    let card = props.offerDetail
    card = card.data?.data

    return (
        <div className='border p-5 w-96 h-72 '>
            <div className='flex'>
                <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/${card?.logo}`} alt="" />
                <div>{card?.couponCode}</div>

            </div>
            <div>{card?.title}</div>
            <div>{card?.description}</div>
            <div>                                                               
                <button onClick={()=>{
                    openModal()
                }}>+ MORE</button>

            </div>
            <div>
                <button
                    onClick={() => {
                        props.setCopied(card?.couponCode)
                        navigator.clipboard.writeText(card?.couponCode);
                    }}
                >
                    {(props.copied === card?.couponCode) ? "COPIED" : "COPY CODE"}
                </button>

            </div>
        </div>
    )
}

export default PaymentCard