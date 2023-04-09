import React, { useContext } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import allRestroContext from '../../../../utils/allRestroContext'
import { searchLogo } from '../../../../utils/helper'
const filterSvg = <svg className="fill-headerHoverColor " xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path d="M22.906 2.841c1.104-2.412-7.833-2.841-10.907-2.841-2.934 0-12.01.429-10.906 2.841.508 1.11 8.907 12.916 8.907 12.916v5.246l4 2.997v-8.243s8.398-11.806 8.906-12.916zm-10.901-.902c4.243 0 8.144.575 8.144 1.226s-3.9 1.18-8.144 1.18-8.042-.528-8.042-1.18 3.799-1.226 8.042-1.226z" /></svg>

const SortByBtn = () => {
    const restroDetails = useContext(allRestroContext)
    const [setFilterBar]=useOutletContext()
    const onlineRestro = restroDetails?.cards[2]?.data?.data?.totalOpenRestaurants
    const sortbtn=restroDetails?.sorts
    return (
        <>
            <div className=' flex  justify-between w-4/5 mt-10 mb-2 mx-auto  '>
                <p className='text-[27px] font-bold text-ttlRestroHeading'>{onlineRestro} restaurants</p>
                <div className='flex justify-between items-center w-4/6'>
                    <Link to="/Search" className="h-full flex justify-around items-center text-[rgba(61,65,82,1)] w-20 hover:text-headerHoverColor  fill-[#686b78] hover:fill-headerHoverColor">
                        {searchLogo}
                        <p>Search</p>
                    </Link>
                    {
                        sortbtn.map(({title,key}) => {
                            return <Link className=' text-sortByBtnColor hover:text-sortByBtnHoverColor  w-30' to={`/?sortBy=${key}`} key={key} onClick={()=>console.log("clicked")}>{title}</Link>
                        })
                    }
                    <button className='ml-2 flex justify-betweem w-50 items-center hover:text-headerHoverColor  ' onClick={()=>setFilterBar(true)}>
                        <p className='mr-2 font-medium'>Filters</p>
                        <p className='w-[30] h-[30] border-headerHoverColor rounded-full border flex justify-center items-center'>{filterSvg}</p>
                    </button>
                </div>

            </div>

            <hr className='w-4/5 m-auto ' />
        </>
    )
}

export default SortByBtn