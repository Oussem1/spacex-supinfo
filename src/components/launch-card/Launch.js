import React from 'react'

const Launch = (props) => {
    const { launch } = props
    return (
        <p>{launch.mission_name}</p>
    )
}

export default Launch