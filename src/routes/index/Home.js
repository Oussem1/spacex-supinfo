import React, { useEffect, useState } from 'react'
import Launch from '../../components/launch-card/Launch'
import Nav from '../../components/navbar/Nav'
import { getLaunches } from '../../api/getAPI.js'

const Home = () => {
  const [launches, setLaunches] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getLaunches().then(data => setLaunches(data))
    setLoading(false)
  }, [])
  
  return (
    <div>

      <Nav />
      {
        (!loading)? (
          launches.map((launch) => <Launch key={launch.mission_name} launch={launch}/>)
        ) : (
          <p>Loading...</p>
        )
      }
    </div>
  )
}

export default Home