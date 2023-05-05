import React, { useEffect, useState } from 'react'
import Shimmer from './bodyInnerComps/RestaurantOffersUI/Shimmer'

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
    return (
        <>
            <div className='border p-2 m-2 '>
                <div className='flex justify-between'>
                    <p className="text-2xl">{title}</p>
                    {
                        isVisible ?
                            <button className="underline" onClick={() => setIsVisible(false)}>Hide</button> :
                            <button className="underline" onClick={() => setIsVisible(true)}>Show</button>
                    }

                </div>
                {isVisible && <p>{description}</p>}
            </div >
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
                <div className='bg-white  min-h-[658px] p-12 mt-8 '>
                    <div className=' h-full w-full flex '>
                        <div className='bg-[#edf1f7] flex flex-col  h-full w-1/5 pt-2 pl-2'>
                            {
                                (issues === null) ?
                                    <Shimmer /> :
                                    <>
                                        {
                                            issues.map((issue) => {
                                                return <button className={`text-left ${(btnClicked === issue.type ? "bg-white" : "bg-[#37718e]")}`} onClick={() => {
                                                    setBtnClicked(issue.type)
                                                    setHeading(issue.title)
                                                }} key={issue.type}>{issue.title}</button>
                                            })
                                        }
                                    </>
                            }
                        </div>
                        <div className='bg-white h-full w-4/5 '>
                            {
                                (description === null) ?
                                    <Shimmer /> :
                                    <div>
                                        {
                                            (issues === null) ?
                                                "" :
                                                <p>{heading}</p>
                                        }

                                        {

                                            description.map((element) => {
                                                return <Accordian element={element} />
                                            })
                                        }
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
