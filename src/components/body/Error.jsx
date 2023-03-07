import React from 'react'
import { useRouteError } from 'react-router-dom'


const Error = () => {
    const errResult = useRouteError();
    return (
        <>
            <h1>{errResult.status}</h1>
            <h2>{ errResult.data}</h2>
        </>

    )
}

export default Error