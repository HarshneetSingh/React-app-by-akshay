import React from 'react'

const FilterBar = (props) => {
    return (
        <>
            <div className={`fixed w-2/5 h-full top-0 right-0 bg-slate-500 z-50 transition-all duration-[400ms] overflow-auto ${(props.filterBarState === false) ? "translate-x-[620px] " : "translate-x-0 "}`}>
                <button onClick={() => {
                    props.setFilterBar((prevState) => !prevState)
                }}>
                    <i className="fa-regular fa-x" />

                </button>
            </div>
            <div className={` ${(props.filterBarState === true) ? "z-40 fixed h-full w-full bg-slate-800 opacity-70  top-0 left-0 right-0 bottom-0" : ""}`} onClick={() => props.setFilterBar((prevState) => {
                if (prevState === true)
                    return false
            })}/>
        </>
    )
}

export default FilterBar