import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getLaunchById } from '../../api/getAPI'
import Nav from '../../components/navbar/Nav'
import { List, Layout } from 'antd'


const { Header, Footer, Content } = Layout
const LaunchInfo = () => {
    const params = useParams();
    const [launch, setLaunch] = useState([])
    const [loading, setLoading] = useState(false)
    const [launchInfos, setLaunchInfos] = useState([])
    const [rocketInfos, setRocketInfos] = useState([])
    const [firstStagesInfos, setFirstStagesInfos] = useState([])


    const getLaunch = async () => {
        try {
            setLoading(true)
            const data = await getLaunchById(params.id)
            setLaunch(data)
            setInfos(data)
            setLoading(false)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getLaunch()
        return () => {
            setLaunch([]);
        };
    }, [])

    // const firstStage = launch.rocket.first_stage.cores[0].core.missions.map(elem => elem.name)

    const setInfos = (launch) => {
        setFirstStagesInfos(launch.rocket.first_stage.cores[0].core.missions.map(elem => elem.name))
        setLaunchInfos([
            `Flight Number : ${launch.id}`,
            `Launch Year : ${launch.launch_year}`,
            `Launch Date : ${launch.launch_date_utc}`,
            `Launch Successful : ${launch.launch_succes ? 'YES' : 'NO'}`,
            `Details : ${launch.details}`,

        ])
        setRocketInfos([
            `Rocket Id : ${launch.rocket.rocket.id}`,
            `Rocket Name : ${launch.rocket.rocket_name}`,
            `Rocket Type : ${launch.rocket_type}`,
        ])
    }

    function callback(key) {
        console.log(key);
    }
    return (
        <Layout>
            <Header>
                <Nav />
            </Header>

            <Content>
                {

                    !loading ?
                        <div>
                            <h1>{launch.mission_name}</h1>
                            <hr />
                            <h2>Launch details</h2>
                            <List
                                size="large"
                                header={<h2>Launch details</h2>}
                                bordered
                                dataSource={launchInfos}
                                renderItem={item => <List.Item>{item}</List.Item>}
                            />
                            <List
                                size="large"
                                header={<h2>Rocket details</h2>}
                                bordered
                                dataSource={rocketInfos}
                                renderItem={item => <List.Item>{item}</List.Item>}
                            />
                            <List
                                size="large"
                                header={<h2>First Stages</h2>}
                                bordered
                                dataSource={firstStagesInfos}
                                renderItem={item => <List.Item>{item}</List.Item>}
                            />
                        </div>
                        :
                        <p>Loading...</p>
                }
            </Content>
            <Footer>Supinfo 2022</Footer>
        </Layout>


    )
}

export default LaunchInfo