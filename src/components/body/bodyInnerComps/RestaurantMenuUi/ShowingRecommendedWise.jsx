import React, { useState } from 'react'

const ShowingRecommendedWise = (props) => {
    const { Title, itemCards, index } = props
    const [isVisible, setIsVisible] = useState(false)
    return (
        <>
            <hr className={` ${(index === 0) ? 'border-t-8' : 'border-t-[16px]'} border-lightGray`} />
            <div className='w-[95%] m-auto'>

                <button className='w-full' onClick={() => setIsVisible(prev => !prev)}>
                    <div className='flex justify-between  py-5 '>
                        <p className="text-lg text-selectedBgColor group-hover:text-headerHoverColor group-hover:duration-100 font-extrabold ">{Title + ` (${itemCards.length})`}</p>


                        <div className='text-lg text-selectedBgColor '>
                            {
                                isVisible ? <i className=" fa-sharp fa-solid fa-angle-up "></i> :
                                    <i className="  fa-sharp fa-solid fa-angle-down "></i>
                            }
                        </div>
                    </div>
                    </button>
                    <div>
                        {(isVisible) ?
                            itemCards.map((card) => {
                                const item = card?.card?.info
                                return (
                                    <div className=' flex' key={item?.id}>
                                        <div>
                                            <div className='flex '>
                                                  <div className={` ${(item?.hasOwnProperty('isVeg') && item?.isVeg===1)?'border-[#0f8a65]':'border-[#e43b4f]' } flex  border-2 w-[15px] h-[15px]  justify-center items-center`}>
                                                {
                                                    (item?.hasOwnProperty('isVeg')) ?<span className='w-sevenpx h-sevenpx rounded-full bg-[#0f8a65]'></span>  : <i className="fa-sharp fa-solid fa-play fa-2xs text-[#e43b4f] -rotate-90" ></i>
                                                }
                                            </div>
                                            {
                                                (item?.hasOwnProperty('isBestseller') && item?.isBestseller===true) ? <p><i className="fa-solid fa-star mr-1  mb-1 text-sm" /> Bestseller</p>:""
                                            }
                                           
                                            

                                            </div>
                                          
                                            
                                            <p>{item?.name}</p>
                                            <p className=''><i class="fa-solid  fa-indian-rupee-sign"></i>{item?.defaultPrice/100} </p>
                                        </div>
                                                
                                    </div>
                                )
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