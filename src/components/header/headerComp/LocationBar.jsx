import React, { useContext, useEffect, useState } from 'react'
import LocationContext from '../../../utils/LocationContext'
import Loader from '../../../utils/Loader';

async function getAreas(input, setAreas) {
  const result = await fetch(`https://www.swiggy.com/dapi/misc/place-autocomplete?input=${input}&types=`)
  const data = await result.json();
  setAreas(data?.data)

}
async function getLocation(placeId, setLocation) {
  const result = await fetch(`https://www.swiggy.com/dapi/misc/address-recommend?place_id=${placeId}`)
  let data = await result.json();
  data = data?.data[0]
  const [name1, ...other] = data?.formatted_address.split(',')

  setLocation({
    name: [name1, other.join(',')],
    lat: data?.geometry?.location?.lat,
    lng: data?.geometry?.location?.lng
  })
}
// input header scroll adding 
function currentLocation(setLocation) {
  return navigator.geolocation.getCurrentPosition(async (position) => {
    const result = await fetch(`https://www.swiggy.com/dapi/misc/address-recommend?latlng=${position?.coords?.latitude}%2C${position?.coords?.longitude}`)
    const data = await result.json();
    const name = data?.formatted_address.split(',')
  
    setLocation({
      name: [name[2], name.join(',')],
      lat: data?.geometry?.location?.lat,
      lng: data?.geometry?.location?.lng
    })
  })
}

const LocationBar = (props) => {
  const [location, setLocation] = useContext(LocationContext)
  const [input, setInput] = useState('');
  const [areas, setAreas] = useState(null)
  useEffect(() => {
    if (input.length >= 3) {
      setAreas(null)
      getAreas(input, setAreas)
    }

  }, [input])
  
  return (
    <>
      {/* location bar */}
      <div className={`w-[36%]  fixed h-full   top-0 left-0 bg-white z-50 transition-all duration-[400ms] overflow-auto ${(props.locationBarState === false) ? "-translate-x-[570px] opacity-0" : "translate-x-0 "}`}>
        <div className={` w-full   h-36 `}>
          <div className='w-2/3  h-36 flex  flex-col absolute right-10 '>
            <button className='text-left pt-8 w-6  text-sortByBtnHoverColor' onClick={() => { props.setLocationBar((prevState) => !prevState) }}><i className="text-lg font-extrabold fa-regular fa-x" /></button>
            <div className='relative top-8'>
              <input className='h-12 border caret-locationError p-5 font-medium   w-full text-ttlRestroHeading shadow-[0_1px_7px_1px_rgba(218,220,230,1)]  focus:outline-none ' type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Search for area, street name..' ></input>
              {input.length >= 1 && <button className='absolute top-0 mt-[14px] mr-5 right-0 text-sm font-medium text-headerHoverColor' onClick={() => setInput('')} >Cancel</button>}
            </div>
          </div>
        </div>
        
        {
          //* if input length is greater than 3
          (input.length < 3) ? (
            <button onClick={() => {
              currentLocation(setLocation)
              props.setLocationBar((prevState) => !prevState);
              setInput('');
            }} >
              <div className=' border w-2/3   flex  absolute right-10 group  '>
                <div className='flex justify-center items-center w-12'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-current-location ml-2 mb-4 text-ttlRestroHeading" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" id="IconChangeColor"> <path stroke="none" d="M0 0h24v24H0z" fill="none" id="mainIconPathAttribute"></path> <circle cx="12" cy="12" r="3"></circle> <circle cx="12" cy="12" r="8"></circle> <line x1="12" y1="2" x2="12" y2="4"></line> <line x1="12" y1="20" x2="12" y2="22"></line> <line x1="20" y1="12" x2="22" y2="12"></line> <line x1="2" y1="12" x2="4" y2="12"></line> </svg>

                </div>
                <div className='flex justify-center py-5 flex-col items-start '>
                  <p className='text-base font-medium text-ttlRestroHeading group-hover:text-headerHoverColor'>Get current location</p>
                  <p className='text-xs text-locationError '>Using GPS</p>
                </div>
              </div>
            </button>
          ) : (
            // *if location is null then shimmer
            (areas === null) ? <Loader/> :
              // * if location length is 0
              (areas.length === 0) ? (
                <div className='float-right w-2/3 flex flex-col items-center justify-center absolute right-10'>
                  <img className='mx-20 mt-10 ' src={require('../../../assets/locationError.png')} width="200" height="200" alt="LocationError" />
                  <p className='font-semibold text-xl text-ttlRestroHeading my-5'>No results</p>
                  <p className=" text-sm text-locationError">Are you sure you entered the right location?</p>
                </div>

              ) : (
                <div className='mt-4'>
                  {
                    areas.map(place => {
                      const [name, ...location] = place?.description.split(',')
                      const placeId = place?.place_id
                      return (
                        <button className='w-2/3  my-1 ml-36  min-h-0 group' key={placeId} onClick={() => {
                          getLocation(placeId, setLocation)
                          props.setLocationBar((prevState) => !prevState);
                          setInput('');

                        }}>
                          <div className='  flex items-center  '>
                            <svg className='w-14 mb-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="IconChangeColor" height="20" width="20"> <path fill="var(--ci-primary-color, currentColor)" d="M253.924,127.592a64,64,0,1,0,64,64A64.073,64.073,0,0,0,253.924,127.592Zm0,96a32,32,0,1,1,32-32A32.037,32.037,0,0,1,253.924,223.592Z" className="ci-primary" id="mainIconPathAttribute"></path> <path fill="var(--ci-primary-color, currentColor)" d="M376.906,68.515A173.922,173.922,0,0,0,108.2,286.426L229.107,472.039a29.619,29.619,0,0,0,49.635,0L399.653,286.426A173.921,173.921,0,0,0,376.906,68.515Zm-4.065,200.444L253.925,451.509,135.008,268.959C98.608,213.08,106.415,138.3,153.571,91.142a141.92,141.92,0,0,1,200.708,0C401.435,138.3,409.241,213.08,372.841,268.959Z" className="ci-primary" id="mainIconPathAttribute"></path> </svg>
                            <div className='border-b-[1px] border-locationError text-left border-dashed py-4 w-full'>
                              <p className='text-[15px] text-ttlRestroHeading mb-1 font-semibold leading-5 group-hover:text-headerHoverColor'>{name}</p>
                              <p className='text-xs text-locationError leading-4'>{location?.join(',')}</p>
                            </div>
                          </div>
                        </button>
                      )
                    })
                  }
                </div>
              )

          )
        }

      </div>
      {/* location body background  */}
      <div className={` ${(props.locationBarState === true) ? "z-40 fixed h-full w-full bg-slate-800 opacity-70  top-0 left-0 right-0 bottom-0" : ""}`} onClick={() => props.setLocationBar((prevState) => {
        if (prevState === true)
          return false
      })} />
    </>
  )
}

export default LocationBar