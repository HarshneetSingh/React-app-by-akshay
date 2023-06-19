import React from 'react'

const MenuCard = (props) => {
    const { item } = props
    return (
        <>

            <div className=' flex justify-between' key={item?.id}>
                <div>
                    <div className='flex mb-2 gap-x-2'>
                        <div className={` ${(item?.hasOwnProperty('isVeg') && item?.isVeg === 1) ? 'border-[#0f8a65]' : 'border-[#e43b4f]'} flex  border-2 w-[15px] h-[15px]  justify-center items-center`}>
                            {
                                (item?.hasOwnProperty('isVeg')) ? <span className='w-sevenpx h-sevenpx rounded-full bg-[#0f8a65]'></span> : <i className="fa-sharp fa-solid fa-play fa-2xs text-[#e43b4f] -rotate-90" ></i>
                            }
                        </div>
                        <div>
                            {
                                (item?.hasOwnProperty('isBestseller') && item?.isBestseller === true) ? <p className='text-headerHoverColor font-bold text-[13px]'><i className="fa-solid fa-star mr-[2px] text-[11px]" />Bestseller</p> : ""
                            }
                        </div>
                    </div>



                    <p className='font-semibold'>{item?.name}</p>
                    <div className='flex text-center gap-x-3 mt-1'>
                        <p className='text-xs font-normal'><i className="fa-solid  fa-indian-rupee-sign mr-1"></i><span className='text-sm'>{item?.price / 100}</span> </p>
                        {
                            (item.hasOwnProperty('offerTags')) ? <p className={` p-1 bg-[${item?.offerTags[0]?.backgroundColor}] border-l-darkOrange text-[#DB6742] font-light border-l text-[10px] `}><span className="font-bold">{item?.offerTags[0]?.title}</span><span className=''> | {item?.offerTags[0]?.subTitle}</span></p> : ""
                        }

                    </div>
                    <p className='text-locationError font-light text-sm my-3'>{item?.description}</p>
                </div>
                <div className='ml-4 relative '>
                    <button className='rounded-md w-32  gap-x-9 h-24 '>
                        <div className='after:content-[""] after:absolute after:bg-[rgba(40,44,63,.05)] after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-md after:h-24  after:bg-blend-overlay   '>
                            <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item?.imageId}`} className='rounded-md w-32  object-cover h-24 ' alt="" />
                        </div>

                    </button>
                    <button className='absolute -bottom-2 left-50% z-40 bg-white py-[10px] px-9  text-orange-600 font-bold border rounded-md text-xs -translate-x-2/4 shadow-[0px_3px_8px_#e9e9eb] border-[#d4d5d9] hover:shadow-[0_2px_8px_#d4d5d9]'>
                        {
                            (item.hasOwnProperty('addons')) ? <p className=' absolute right-2 top-0'>+</p> : ""
                        }
                        ADD
                        </button>
                    {
                        (item.hasOwnProperty('addons')) ? <p className='text-[10px] text-[#7e808c] text-center bg-white z-50 mt-[7px]'>Customisable</p> : ""
                    }


                </div>
            </div>

        </>
    )
}

export default MenuCard