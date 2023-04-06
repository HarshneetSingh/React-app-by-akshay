import React from 'react'
import { Link } from 'react-router-dom'
const filterSvg = <svg className="fill-headerHoverColor" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path d="M19.479 2l-7.479 12.543v5.924l-1-.6v-5.324l-7.479-12.543h15.958zm3.521-2h-23l9 15.094v5.906l5 3v-8.906l9-15.094z" /></svg>
const searchLogo = <svg viewBox="5 -1 12 25" height="17" width="17" ><path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"></path></svg>

const SortByBtnList = [
    {
        name: "Relevance"
    },
    {
        name: "Delivery Time"
    },
    {
        name: "Rating"
    },
    {
        name: "Cost: Low To High"
    },
    {
        name: "Cost: High To Low"
    }
]
const SortByBtn = () => {
    return (
        <>
            <div className=' flex  justify-between w-3/4 mt-10 mb-2 mx-auto  '>
                <p className='text-2xl font-bold text-[#282c3f]'>{1212} restaurants</p>
                <div className='flex justify-between items-align w-4/6'>
                    <Link to="/Search" className="h-full flex justify-around items-center text-[rgba(61,65,82,1)] w-20 hover:text-headerHoverColor  fill-[#686b78] hover:fill-headerHoverColor">
                        {searchLogo}
                        <p>Search</p>
                    </Link>
                    {
                        SortByBtnList.map((btn) => {
                            return <button className=' text-sortByBtnColor hover:text-sortByBtnHoverColor  w-30'>{btn.name}</button>
                        })

                    }
                    <button className='ml-2 flex justify-betweem w-50 items-center hover:text-headerHoverColor  '>
                        <p className='mr-2 font-medium'>Filters</p>
                        <p className='w-7 h-7 border-headerHoverColor rounded-full border flex justify-center items-center'>{filterSvg}</p>
                    </button>
                </div>

            </div>

            <hr className='w-3/4 m-auto ' />
        </>
    )
}

export default SortByBtn