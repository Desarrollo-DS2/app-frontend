'use client'

import React, { useState } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Layout } from 'antd'

import Navbar from './Navbar'

import PropTypes from 'prop-types'

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

const { Header, Content } = Layout

export default function HomeLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout hasSider className="h-full w-full">
      <Navbar collapsed={collapsed} />
      <Layout>
        <Header style={{ padding: 0, backgroundColor: 'transparent' }}>
          <Button
            data-testid="toggle-button"
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              backgroundColor: 'transparent',
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}
