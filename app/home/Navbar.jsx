import React from 'react'
import { Layout, Menu, Flex, Text, Divider } from 'antd'
import Image from 'next/image'

const { Sider } = Layout

const Navbar = ({ collapsed }) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      data-testid="navbar"
    >
      <Flex>
        <Image
          src="/logoUnivalleBlanco.png"
          alt="Logo"
          width={collapsed ? 60 : 60}
          height={60}
          className="m-4"
        />
        {!collapsed && (
          <Flex vertical align="flex-start" style={{ marginTop: '10px' }}>
            <span>
              <strong>Restaurante</strong>
            </span>
            <span>Univalle</span>
          </Flex>
        )}
      </Flex>
      <Divider style={{ margin: 0 }} />
      <Menu mode="inline" items={[]} />
    </Sider>
  )
}

export default Navbar
