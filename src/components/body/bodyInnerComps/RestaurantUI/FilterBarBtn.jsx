import React, { useState } from 'react'

const FilterBarBtn = (props) => {
    const [clickUnclick, setClickUnclick] = useState(true)
    const {filterName,index,filterArr,setFilterArr,filter}=props
    return (
        <button
            className='text-left mb-2 mr-2'

            onClick={() => {

                {
                    if (clickUnclick === true) {
                        if (filterName.key === "CUISINES") {
                            setFilterArr(
                                {
                                    CUISINES: [...filterArr.CUISINES, filter?.option],
                                    SHOW_RESTAURANTS_WITH: filterArr.SHOW_RESTAURANTS_WITH
                                }
                            )

                        } else {
                            setFilterArr(
                                {
                                    CUISINES: filterArr.CUISINES,
                                    SHOW_RESTAURANTS_WITH: [...filterArr.SHOW_RESTAURANTS_WITH, filter?.option]
                                }
                            )

                        }
                        setClickUnclick(prev => !prev)
                    } else {
                        if (filterName.key === "CUISINES") {
                            setFilterArr(
                                {
                                    CUISINES:filterArr.CUISINES.slice(index+1),
                                    SHOW_RESTAURANTS_WITH: filterArr.SHOW_RESTAURANTS_WITH
                                }
                            )

                        } else {
                            setFilterArr(
                                {
                                    CUISINES: filterArr.CUISINES,
                                    SHOW_RESTAURANTS_WITH: filterArr.SHOW_RESTAURANTS_WITH.slice(index+1)
                                }
                            )

                        }
                        setClickUnclick(prev => !prev)
                    }

                }
            }
            }
        >
            {filter?.option}
        </button>
    )
}

export default FilterBarBtn