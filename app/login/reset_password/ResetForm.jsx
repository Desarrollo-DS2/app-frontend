'use client'

import React from 'react';
import { Form, Input, Button } from 'antd';
import { LockOutlined } from '@ant-design/icons';

const ResetForm = () => {
    const onFinish = (values) => {
        // Aquí puedes agregar la lógica para restablecer la contraseña
        console.log('Received values of form:', values);
        // Una vez que se restablece la contraseña, puedes redirigir al usuario a la página de inicio de sesión
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
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
                    rules={[{ required: true, message: 'Por favor ingrese su nueva contraseña' }]}
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
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Las contraseñas no coinciden'));
                            },
                        }),
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
    );
};

export default ResetForm;
