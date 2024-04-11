'use client'

import React from 'react'
import { Button, Form, Input } from 'antd'

const onFinish = (values) => {
  console.log('Success:', values)
}
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}
const App = () => (
  <Form
    name="login"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    layout="vertical"
  >
    <Form.Item label="Correo Institucional" name="email">
      <Input />
    </Form.Item>

    <Form.Item label="Contraseña" name="password">
      <Input.Password />
      <Button type="link" style={{padding: 0}}>Recuperar Contraseña</Button>
    </Form.Item>

    <Form.Item className=" flex items-center justify-center">
      <Button type="primary" htmlType="submit">
        Iniciar Sesion
      </Button>
    </Form.Item>
  </Form>
)
export default App
