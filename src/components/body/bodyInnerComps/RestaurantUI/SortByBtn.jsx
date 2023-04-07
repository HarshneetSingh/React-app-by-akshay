import React from 'react'
import { Link } from 'react-router-dom'
const filterSvg = <svg  className="fill-headerHoverColor " xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path d="M22.906 2.841c1.104-2.412-7.833-2.841-10.907-2.841-2.934 0-12.01.429-10.906 2.841.508 1.11 8.907 12.916 8.907 12.916v5.246l4 2.997v-8.243s8.398-11.806 8.906-12.916zm-10.901-.902c4.243 0 8.144.575 8.144 1.226s-3.9 1.18-8.144 1.18-8.042-.528-8.042-1.18 3.799-1.226 8.042-1.226z"/></svg>
const searchLogo = <svg viewBox="5 -1 12 25" height="17" width="17" ><path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"></path></svg>

const SortByBtnList = [
    {
        name: "Relevance",
        to:"RELEVANCE"
    },
    {
        name: "Delivery Time",
        to:"DELIVERY_TIME"
    },
    {
        name: "Rating",
        to:"RATING"
    },
    {
        name: "Cost: Low To High",
        to:"COST_FOR_TWO"
    },
    {
        name: "Cost: High To Low",
        to:"COST_FOR_TWO_H2L"
    }
]
const SortByBtn = () => {
    return (
        <>
            <div className=' flex  justify-between w-11/12 mt-10 mb-2 mx-auto  '>
                <p className='text-[27px] font-bold text-ttlRestroHeading'>{554} restaurants</p>
                <div className='flex justify-between items-center w-4/6'>
                    <Link to="/Search" className="h-full flex justify-around items-center text-[rgba(61,65,82,1)] w-20 hover:text-headerHoverColor  fill-[#686b78] hover:fill-headerHoverColor">
                        {searchLogo}
                        <p>Search</p>
                    </Link>
                    {
                        SortByBtnList.map((btn) => {
                            return <Link className=' text-sortByBtnColor hover:text-sortByBtnHoverColor  w-30' to={`/?sortBy=${btn.to}`}>{btn.name}</Link>
                        })
                        }
                    <button className='ml-2 flex justify-betweem w-50 items-center hover:text-headerHoverColor  '>
                        <p className='mr-2 font-medium'>Filters</p>
                        <p className='w-[30] h-[30] border-headerHoverColor rounded-full border flex justify-center items-center'>{filterSvg}</p>
                    </button>
                </div>

            </div>

            <hr className='w-11/12 m-auto ' />
        </>
    )
}

export default SortByBtn