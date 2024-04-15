import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const onFinish = (values) => {
    console.log('Sucess', values);
};

const validateEmail = (rule, value) => {
    if (!value.includes('@correounivalle.edu.co') && value) {
        return Promise.reject('Por favor ingrese un correo institucional válido')
    }
    return Promise.resolve()
}

const RequestResetPass = () => {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Form
                name="login"
                onFinish={onFinish}
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

                <Form.Item style={{ marginBottom: 0, textAlign: 'center' }}>
                    <Button type="primary" htmlType="submit" style={{ width: '50%', margin: '0 auto' }}>
                        Solicitar
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default RequestResetPass;
