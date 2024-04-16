'use client'

import React, { useEffect, createRef } from 'react'
import { Button, Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import ReCAPTCHA from 'react-google-recaptcha'
import { login, handleLoginError } from '../_providers/authUser/AuthUserActions'
import { useAuthUser } from '../_providers/authUser/AuthUserProvider'

const validateEmail = (rule, value) => {
  if (!value.includes('@correounivalle.edu.co') && value) {
    return Promise.reject('Por favor ingrese un correo institucional válido')
  }
  return Promise.resolve()
}

const App = () => {
  const { state, dispatch } = useAuthUser()

  const recaptchaRef = createRef()

  const onFinish = ({ email, password }) => {
    const user = { email, password }

    if (user) {
      login(dispatch, user)
    } else {
      handleLoginError(dispatch)
    }
  }

  return (
    <Form
      name="login"
      onFinish={(values) => onFinish(values)}
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
          ref={recaptchaRef}
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
