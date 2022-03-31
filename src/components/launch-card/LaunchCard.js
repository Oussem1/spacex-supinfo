import { Card, Meta } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const LaunchCard = ({ launch }) => {
    const details = launch.details ? (launch.details.length) > 99 ? `${launch.details.slice(0, 100)}..` : launch.details : 'No more details..'

    return (
        <Link to={`launch/${launch.id}`}>
            <Card
                className='card'
                hoverable
                style={{ width: 400, height: 600, padding: 50, margin: 20 }}
                cover={<img className='card-photo' alt="example" src={launch.links ? launch.links.mission_patch_small : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Circle-icons-rocket.svg/1200px-Circle-icons-rocket.svg.png'} />}
            >
                <Card.Meta title={launch.mission_name} description={details} />
            </Card>
        </Link>
    )
}

export default LaunchCard