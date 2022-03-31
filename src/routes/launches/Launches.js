import React, { useEffect, useState } from 'react'
import { getAllLaunches } from '../../api/getAPI'
import Nav from '../../components/navbar/Nav'
import { Table, Input, Button, Layout } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import moment from "moment";
import 'antd/dist/antd.css'
import { Link } from 'react-router-dom'

const { Header, Footer, Content } = Layout
const Launches = () => {
  const [launches, setLaunches] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getAll = async () => {
      setLoading(true)
      const data = await getAllLaunches()
      setLaunches(data)
      setLoading(false)
    }
    getAll()
  }, [])

  const columns = [

    {
      title: 'Mission Name',
      dataIndex: 'mission_name',
      width: '20%',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search by mission name'
              value={selectedKeys}
              onChange={(e) => { setSelectedKeys(e.target.value ? [e.target.value] : []); confirm({ closeDropdown: false }) }}
              onPressEnter={() => confirm()}
              onBlur={() => confirm()}
            />
            <Button onClick={() => confirm()} type='primary'>Search</Button>
            <Button onClick={() => clearFilters()} type='danger'>Reset</Button>
          </>
        )
      },
      filterIcon: () => <SearchOutlined />,
      onFilter: (value, record) => record.mission_name.toLowerCase().includes(value.toLowerCase()),
      sorter: (a, b) => a.mission_name.length - b.mission_name.length
    },
    {
      title: 'Launch Date',
      dataIndex: 'launch_date_utc',
      width: '15%',
      sorter: (a, b) => new Date(b.date) - new Date(a.date),
      render: cts => <p>{moment(cts).format('MMMM do YYYY [at] HH:mm [UTC]')}</p>
    },
    {
      title: 'Details',
      dataIndex: 'details',
      width: '50%',
    },
    {
      title: 'More',
      dataIndex: 'id',
      width: '15%',
      render: launch => <Link to={`/launch/${launch}`}><Button>View Details</Button></Link>
    }
  ]

  return (
    <Layout>
      <Header>
        <Nav />
      </Header>

      <Content>
        <Table
          loading={loading}
          dataSource={launches}
          columns={columns}
          rowKey={launches.launch_date_unix}
        />

      </Content>
      <Footer>Supinfo 2022</Footer>
    </Layout>
  )
}

export default Launches