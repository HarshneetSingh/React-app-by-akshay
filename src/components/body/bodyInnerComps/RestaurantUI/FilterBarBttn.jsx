import React, { useState } from 'react'

const FilterBarBttn = (props) => {
    const [clickUnclick, setClickUnclick] = useState(true)
    const { filterName, index, filterArr, setFilterArr, filter } = props
    const ind = index
    return (
        <button
            className='text-left mb-2 mr-2'

            onClick={() => {

                {
                    if (clickUnclick === true) {
                        if (filterName.key === "CUISINES") {
                            setFilterArr(
                                [
                                    { CUISINES: [...filterArr[0].CUISINES, filter?.option] },
                                    { SHOW_RESTAURANTS_WITH: filterArr[1].SHOW_RESTAURANTS_WITH }
                                ]
                            )

                        } else {
                            setFilterArr(
                                [
                                    { CUISINES: filterArr[0].CUISINES },
                                    { SHOW_RESTAURANTS_WITH: [...filterArr[1].SHOW_RESTAURANTS_WITH, filter?.option] }
                                ]
                            )

                        }
                        setClickUnclick(prev => !prev)
                    } else {
                        if (filterName.key === "CUISINES") {
                            setFilterArr(
                                [
                                    { CUISINES: filterArr[0].CUISINES.filter((cuisine) => cuisine !== filter?.option) },
                                    { SHOW_RESTAURANTS_WITH: filterArr[1].SHOW_RESTAURANTS_WITH }
                                ]

                            )

                        } else {
                            setFilterArr(
                                [
                                    { CUISINES: filterArr[0].CUISINES },
                                    { SHOW_RESTAURANTS_WITH: filterArr[1].SHOW_RESTAURANTS_WITH.filter((cuisine) => cuisine !== filter?.option) }
                                ]
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

export default FilterBarBttn