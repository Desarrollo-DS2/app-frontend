'use client'

import React from 'react'
import { Button, Form, Input, Tooltip } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

const onFinish = (values) => {
  console.log('Success:', values)
}
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}

const validateEmail = (rule, value) => {
  if (!value.includes('@correounivalle.edu.co') && value) {
    return Promise.reject('Por favor ingrese un correo institucional valido')
  }
  return Promise.resolve()
}

const App = () => (
  <Form
    name="login"
    onFinish={onFinish}
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

    <Form.Item className=" flex items-center justify-center">
      <Button type="primary" htmlType="submit">
        Iniciar Sesion
      </Button>
    </Form.Item>
  </Form>
)
export default App
