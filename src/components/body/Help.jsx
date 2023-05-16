import React, { useEffect, useState } from 'react'
import Shimmer from './bodyInnerComps/RestaurantOffersUI/Shimmer'
import Loader from '../../utils/Loader';

async function getIssuesOption(setIssues) {
    const result = await fetch(`https://www.swiggy.com/dapi/support?`)
    const data = await result.json();
    setIssues(data?.data?.issueTypes?.data)
}
async function getIssueDescription(setDescription, btnClicked) {
    setDescription(null)
    const result = await fetch(`https://www.swiggy.com/dapi/support/issues/${btnClicked}`);
    const data = await result.json();
    setDescription(data?.data?.issues?.data)
}
const Accordian = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const { title, description, hyperLinkText, hyperLink, options } = props.element
    const descriptionarr = description?.split('\n')
    return (
        <>
            <button className="group" onClick={() => setIsVisible(prev => !prev)}>
                <div className=''>
                    <div className='flex justify-between  py-5 '>
                        <p className="text-[17px] text-sortByBtnHoverColor group-hover:text-headerHoverColor group-hover:duration-100 ">{title}</p>


                        <div className='text-lg text-locationError '>
                            {
                                isVisible ? <i className=" fa-sharp fa-solid fa-angle-up "></i> :
                                    <i className="  fa-sharp fa-solid fa-angle-down "></i>
                            }
                        </div>
                    </div>
                    {
                        isVisible &&
                        <>
                            {
                                descriptionarr?.map((desc,index) => {
                                    
                                    return <p key={index} className='text-sm text-sortByBtnColor text-left  flex flex-col'>{desc}</p>
                                })
                            }


                            <div className='text-left h-auto'>
                                <div className='mb-7 mt-2'>
                                    <a href={`${hyperLink}`} className=' text-headerHoverColor hover:text-ttlRestroHeading text-sm font-bold' target='_blank'>{hyperLinkText}</a>

                                </div>

                                {
                                    (options.length > 0) ?
                                        <div className='mb-7'>
                                            <a
                                                className='text-headerHoverColor py-3 px-4 border-headerHoverColor  border font-bold text-sm'
                                                href={`mailto:${options[0]?.emailId}?subject=${title}`}
                                                target="_blank"> SEND AN EMAIL </a>
                                            <p className='text-[10px] text-locationError mt-4'>{options[0]?.waitTime}</p>
                                        </div>
                                        : ""
                                }

                            </div>
                        </>
                    }
                </div >
                <hr />
            </button>
        </>
    )
}


const Help = () => {
    // defining state of Accordian
    const [issues, setIssues] = useState(null)
    const [description, setDescription] = useState(null)
    const [heading, setHeading] = useState(`Partner Onboarding`)
    const [btnClicked, setBtnClicked] = useState("partner-onboarding")
    useEffect(() => {
        getIssuesOption(setIssues)
    }, [])
    useEffect(() => {
        getIssueDescription(setDescription, btnClicked)
    }, [btnClicked])

    return (
        <div className='bg-[#37718e]'>
            <div className="w-[85%] m-auto">
                <div className='text-white h-32 relative'>
                    <div className='absolute bottom-0 left-11'>
                        <p className='text-3xl font-bold'>Help & Support</p>
                        <p className='text-base'>Let's take a step ahead and help you better.</p>
                    </div>

                </div>
                <div className='bg-white  min-h-[658px] p-12 mt-9 '>
                    <div className=' h-full w-full flex '>
                        <div className='bg-[#edf1f7] flex flex-col min-h-[500px]  w-[21%] pt-5 pl-5'>
                            {
                                (issues === null) ?
                                    <Shimmer /> :
                                    <>
                                        {
                                            issues.map((issue) => {
                                                return <button className={`text-left pl-14 py-6 hover:text-black text-base font-semibold ${(btnClicked === issue.type ? "bg-white text-black" : " text-[#535665]")}`} onClick={() => {
                                                    setBtnClicked(issue.type)
                                                    setHeading(issue.title)
                                                }} key={issue.type}>{issue.title}</button>
                                            })
                                        }
                                    </>
                            }
                        </div>
                        <div className='bg-white pl-14 pt-8 h-full w-[77%] '>
                            {
                                (description === null) ?
                                    <div className='mt-20'>
                                        <Loader />
                                    </div>
                                    :
                                    <div>
                                        {
                                            (issues === null) ?
                                                "" :
                                                <p className='text-2xl font-bold text-ttlRestroHeading mb-1'>{heading}</p>
                                        }
                                        <div className='flex flex-col '>
                                            {
                                                description.map((element) => {
                                                    return <Accordian key={description.id} element={element} />
                                                })
                                            }
                                        </div>
                                    </div>

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Help;
