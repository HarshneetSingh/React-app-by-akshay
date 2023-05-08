import React from 'react'

const Loader = () => {
    return (
        <div className='w-full h-[50vh] flex justify-center items-center'>
            <p className={`border-[3px] border-solid border-white rounded-full border-t-headerHoverColor border-r-headerHoverColor border-l-headerHoverColor w-6 h-6 animate-spin `}>
            </p>
        </div>

    )
}

export default Loader