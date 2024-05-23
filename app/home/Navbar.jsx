import React from 'react'
import { Layout, Menu } from 'antd'

const { Sider } = Layout

const Navbar = ({ collapsed }) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      data-testid="navbar"
    >
      <Menu mode="inline" items={[]} />
    </Sider>
  )
}

export default Navbar
