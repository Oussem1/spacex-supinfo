import { Menu } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item><Link to='/'>Home</Link></Menu.Item>
      <Menu.Item><Link to='/launches'>Launches</Link></Menu.Item>
    </Menu>
  )
}

export default Nav