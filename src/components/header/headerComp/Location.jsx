import React from 'react'

const Location = (props) => {

  return (
    <div className={`absolute w-1/3 h-full top-0 left-0 bg-slate-500 z-50 transition-all duration-[400ms]  ${(props.locationBarState === false) ? "-translate-x-[550px] " : "translate-x-0 "}`}>
      <button onClick={() => {
        props.setLocationBar((prevState) => !prevState)
      }}>
        <i className="fa-regular fa-x" />
      </button>
    </div>
  )
}

export default Location