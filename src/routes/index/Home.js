import React, { useEffect, useState } from 'react'
import LaunchCard from '../../components/launch-card/LaunchCard'
import Nav from '../../components/navbar/Nav'
import { getLastLaunches, getNextLaunch } from '../../api/getAPI.js'
import { Layout, Typography } from 'antd'

const { Title } = Typography
const { Header, Footer, Content } = Layout
const Home = () => {
  const [launches, setLaunches] = useState([])
  const [nextLaunch, setNexLaunch] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchLaunches = async () => {
      setLoading(true)
      const data = await getLastLaunches()
      const nextLaunch = await getNextLaunch()
      setLaunches(data)
      setNexLaunch(nextLaunch)
      setLoading(false)
    }
    fetchLaunches()
  }, [])
  return (
    <Layout>
      <Header>
        <Nav />
      </Header>

      <Content>
        <Title style={{ 'textAlign': 'center' }}>Next Launch</Title>
        <div className='container-next'>
          <LaunchCard launch={nextLaunch} />
        </div>
        <Title style={{ 'textAlign': 'center' }}>Last Launches</Title>
        <div className='container-last'>
          {
            (!loading) ? (
              launches.map((launch) => <LaunchCard key={launch.mission_name} launch={launch} />)

            ) : (
              <p>Loading...</p>
            )
          }
        </div>
      </Content>
      <Footer>Supinfo 2022</Footer>
    </Layout>
  )
}

export default Home