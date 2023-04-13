import React from 'react'

const LocationBar = (props) => {

  return (
    <div>

      <div className={`fixed w-1/3 h-full top-0 left-0 bg-slate-500 z-50 transition-all duration-[400ms] overflow-auto ${(props.locationBarState === false) ? "-translate-x-[550px] " : "translate-x-0 "}`}>
        <button onClick={() => {
          props.setLocationBar((prevState) => !prevState)
        }}>
          <i className="fa-regular fa-x" />
        </button>
      </div>
      <div className={` ${(props.locationBarState === true) ? "z-40 fixed h-full w-full bg-slate-800 opacity-70  top-0 left-0 right-0 bottom-0" : ""}`} onClick={() => props.setLocationBar((prevState) => {
        if (prevState === true)
          return false
      })} />
    </div>
  )
  }

export default LocationBar