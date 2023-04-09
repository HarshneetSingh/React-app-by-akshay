import React from 'react'

const FilterBar = (props) => {
    return (
        <div className={`absolute w-2/5 h-full top-0 right-0 bg-slate-500 z-50 transition-all duration-[400ms]  ${(props.filterBarState === false) ? "translate-x-[620px] " : "translate-x-0 "}`}>
            <button onClick={() => {
                props.setFilterBar((prevState) => !prevState)
            }}>
                <i className="fa-regular fa-x" />
            </button>
        </div>
    )
}

export default FilterBar