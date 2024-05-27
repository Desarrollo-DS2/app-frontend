import React from 'react'
import { Layout, Menu, Flex, Divider } from 'antd'
import Image from 'next/image'
import { TbLogout2 } from 'react-icons/tb'
import { logout } from '../_providers/authUser/AuthUserActions'
import { useAuthUser } from '../_providers/authUser/AuthUserProvider'
import { useRouter } from 'next/navigation'
import { IoTicket } from 'react-icons/io5'
import { IoSettings } from 'react-icons/io5'

const { Sider } = Layout

export const handleLogout = async (dispatch, router) => {
  const res = await logout(dispatch)
  if (res.success) {
    router.replace('/', { replace: true })
    window.location.reload()
  }
}

const Navbar = ({ collapsed }) => {
  const { dispatch } = useAuthUser()
  const router = useRouter()

  const logoutItem = [
    {
      key: '0',
      label: 'Cerrar sesión',
      icon: <TbLogout2 />,
      onClick: () => handleLogout(dispatch, router),
    },
  ]

  const items = [
    {
      key: '0',
      label: 'Tickets',
      icon: <IoTicket />,
      onClick: () => router.push('/home/tickets'),
    },
    {
      key: '1',
      label: 'Configuración',
      icon: <IoSettings />,
      onClick: () => {},
    },
  ]

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
          width={60}
          height={60}
          className="m-4"
        />
        {!collapsed && (
          <Flex
            vertical
            align="flex-start"
            style={{ marginTop: '10px', color: 'white' }}
          >
            <span>
              <strong>Restaurante</strong>
            </span>
            <span>Univalle</span>
          </Flex>
        )}
      </Flex>
      <Divider style={{ margin: 0 }} />
      <Flex vertical justify="space-between" className="h-[calc(100%-95px)]">
        <Menu items={items} defaultSelectedKeys={['0']} style={{ border: 0 }} />
        <Menu mode="inline" items={logoutItem} style={{ border: 0 }} />
      </Flex>
    </Sider>
  )
}

export default Navbar
