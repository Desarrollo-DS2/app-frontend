'use client'

import React, { useEffect } from 'react'
import { Button, Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import ReCAPTCHA from 'react-google-recaptcha'
import { loginAuthUser } from '../_api/authUser/authUser'
import { login, login_error } from '../_providers/authUser/AuthUserActionsType'
import { useAuthUser } from '../_providers/authUser/AuthUserProvider'

//con una lista prueba
const defaultUsers = [
  { id: 1, email: 'user1@correounivalle.edu.co', password: '123456' },
]

const onFinish = async ({ email, password }, dispatch, state) => {
  
  const user = {email, password}

  if (user) {
    loginAuthUser(user).then(login(dispatch, user))
  } else {
    login_error(dispatch)
  }
}

useEffect(() => {
  if(state.loggedIn){
    console.log(state.credentials)
  }
}, [state.loggedIn]);

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}

const validateEmail = (rule, value) => {
  if (!value.includes('@correounivalle.edu.co') && value) {
    return Promise.reject('Por favor ingrese un correo institucional válido')
  }
  return Promise.resolve()
}

const App = () => {
  const { state, dispatch } = useAuthUser()

  return (
    <Form
      name="login"
      onFinish={(values) => onFinish(values, dispatch, state)}
      onFinishFailed={onFinishFailed}
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
          { validator: validateEmail },
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
