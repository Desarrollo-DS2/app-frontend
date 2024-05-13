'use client'

import React from 'react'
import { Form, Input, Button } from 'antd'
import { LockOutlined } from '@ant-design/icons'

const onFinish = (values) => {
  console.log('Received values of form:', values)
}

const specialCharactersAllowed = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

const validatePassword = (rule, value) => {
  if (value.length < 8 ||
    !/[A-Z]/.test(value) ||
    !/[a-z]/.test(value) ||
    !/\d/.test(value) ||
    !specialCharactersAllowed.test(value)
  ) {
    return Promise.reject('Ingrese una contraseña válida')
  }
  return Promise.resolve()
}

const RecoveryForm = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50vh',
    }}
  >
    <Form
      onFinish={onFinish}
      autoComplete="off"
      layout="vertical"
      style={{ minWidth: '300px' }}
      data-testid="form"
    >
      <Form.Item
        label="Nueva contraseña"
        name="newPassword"
        rules={[
          { required: true, message: 'Por favor ingrese su nueva contraseña' },
          { validator: validatePassword },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          data-testid="newPassword"
        />
      </Form.Item>

      <Form.Item
        name="confirmPassword"
        label="Confirmar nueva contraseña"
        rules={[
          { required: true, message: 'Por favor confirme su nueva contraseña' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('newPassword') === value) {
                return Promise.resolve()
              }
              return Promise.reject(new Error('Las contraseñas no coinciden'))
            },
          }),
          { validator: validatePassword },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          data-testid="confirmNewPassword"
        />
      </Form.Item>

      <Form.Item className="flex items-center justify-center">
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          Restablecer Contraseña
        </Button>
      </Form.Item>
    </Form>
  </div>
)

export default RecoveryForm
