'use client'

import React, { useEffect } from 'react'
import { Button, Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import ReCAPTCHA from 'react-google-recaptcha'
import { loginAuthUser } from '../_api/authUser/authUser'
import { login, login_error } from '../_providers/authUser/AuthUserActionsType'
import { useAuthUser } from '../_providers/authUser/AuthUserProvider'
import { redirect } from 'next/navigation'

const onFinish = async ({ email, password }, dispatch, state) => {
  const user = { email, password }

  if (user) {
    loginAuthUser(user).then((response) => {
      const payload = {
        user: user,
        access: response.access,
        refresh: response.refresh,
      }
      login(dispatch, payload)
    })
  } else {
    login_error(dispatch)
  }
}

const validateEmail = (rule, value) => {
  if (!value.includes('@correounivalle.edu.co') && value) {
    return Promise.reject('Por favor ingrese un correo institucional válido')
  }
  return Promise.resolve()
}

const App = () => {
  const { state, dispatch } = useAuthUser()

  useEffect(() => {
    if (state.loggedIn && state.tokenAccess && state.tokenRefresh) {
      redirect('/home')
    } else {
      console.log('No estas logeado')
    }
  }, [state.loggedIn])

  return (
    <Form
      name="login"
      onFinish={(values) => onFinish(values, dispatch, state)}
      autoComplete="off"
      layout="vertical"
      style={{ minWidth: '400px' }}
      data-testid="form"
    >
      <Form.Item
        label="Correo Institucional"
        name="email"
        tooltip="Debe ser un correo institucional [@correounivalle.edu.co]"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese su correo institucional',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          data-testid="email"
        />
      </Form.Item>

      <Form.Item
        label="Contraseña"
        name="password"
        style={{ margin: 0 }}
        rules={[{ required: true, message: 'Por favor ingrese su contraseña' }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          data-testid="password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="link" style={{ padding: 0 }}>
          Recuperar Contraseña
        </Button>
      </Form.Item>

      <Form.Item className="flex items-center justify-center">
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onFinish={null}
          data-testid="recaptcha"
        />
      </Form.Item>

      <Form.Item className="flex items-center justify-center">
        <Button type="primary" htmlType="submit">
          Iniciar Sesion
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App
