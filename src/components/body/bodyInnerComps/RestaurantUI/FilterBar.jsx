import React, { useContext } from 'react'
import AllRestaurantsContext from '../../../../utils/AllRestroContext'
const checkSvg= <svg width="16" class="_2m7ny _1GLei" viewBox="0 0 24 24"><path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M9.5,18.25 L20.75,7.43269231 L19,5.75 L9.5,14.8846154 L5,10.5576923 L3.25,12.2403846 L9.5,18.25 Z"></path></svg>

const FilterBar = (props) => {
    const [restaurantContext, setRestaurantContext] = useContext(AllRestaurantsContext);
    const filterData = restaurantContext?.filters
    console.log(filterData)
    return (
        <>
            <div className={`fixed w-2/5 h-full pl-10 top-0 right-0 bg-white z-50 transition-all duration-[400ms] overflow-auto ${(props.filterBarState === false) ? "translate-x-[620px] opacity-0" : "translate-x-0 "}`}>
                {/* filter header */}
                <div className='flex w-full h-14 items-center  border'>
                    <button onClick={() => props.setFilterBar((prevState) => !prevState)}><i className="fa-regular fa-x" /></button>
                    <p>Filters</p>
                </div>

                {/* filter Body */}
                <div className=''>
                    <p className='text-black'>{filterData?.[0].title}</p>
                    <div className='w-full'>
                    {
                        filterData?.[0].options.map((option) =>{
                            return (
                                <div>
                                    
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
                {/* Filter footer */}
            </div>

            <div className={` ${(props.filterBarState === true) ? "z-40 fixed h-full w-full bg-slate-800 opacity-70  top-0 left-0 right-0 bottom-0" : ""}`} onClick={() => props.setFilterBar((prevState) => {
                if (prevState === true)
                    return false
            })} />
        </>
    )
}

export default FilterBar