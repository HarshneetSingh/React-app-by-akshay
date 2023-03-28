import React, { useState } from 'react'

const Accordian = ({ title, description, isVisible, setIsVisible }) => {
    return (
        <>
            <div className='border p-2 m-2'>
                <p className="text-2xl">{title}</p>
                {
                    isVisible ?
                        <button className="underline" onClick={() => setIsVisible()}>Hide</button> :
                        <button className="underline" onClick={() => setIsVisible()}>Show</button>
                }
                {isVisible && <p>{description}</p>}
            </div>
        </>
    )
}
const accordianDetails = [{
    title: "About",
    description: "ipsum dolor sit amet consectetur adipisicing elit. Nulla, sit neque quisquam nam consequatur voluptas necessitatibus cumque aperiam labore eum natus libero cupiditate inventore ipsum asperiores vel? Dignissimos, provident."
}, {
    title: "Career",
    description: "ipsum dolor sit amet consectetur adipisicing elit. Nulla, sit neque quisquam nam consequatur voluptas necessitatibus cumque aperiam labore eum natus libero cupiditate inventore ipsum asperiores vel? Dignissimos, provident."
}, {
    title: "Support",
    description: "ipsum dolor sit amet consectetur adipisicing elit. Nulla, sit neque quisquam nam consequatur voluptas necessitatibus cumque aperiam labore eum natus libero cupiditate inventore ipsum asperiores vel? Dignissimos, provident."
}]

const Help = () => {
    // defining state of Accordian
    const [isVisible, setIsVisible] = useState("About");

    return (
        <>
            <p className='text-4xl p-2'>Help</p>
            {
                accordianDetails.map((element) => {
                    const { title, description } = element;
                    return <Accordian
                        title={title}
                        isVisible={isVisible === `${title}`}
                        setIsVisible={() => {
                            setIsVisible(isVisible === `${title}` ? "" : `${title}`)
                        }}
                        description={description}
                    />
                })
            }
        </>
    )
}
export default Help;
