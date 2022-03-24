import React from 'react'
import { useParams } from 'react-router-dom'

const LaunchInfo = () => {
    const params = useParams();
    return (
        <h1>Launch Info for id : {params.id}</h1>
    )
}

export default LaunchInfo