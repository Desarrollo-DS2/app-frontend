import React from 'react'
import Modal from 'antd/lib/modal/Modal'
import { Form, InputNumber, Tag, Button } from 'antd'

const requiredMark = (labek, { required }) => (
  <>
    {required && <Tag color="error">Required</Tag>}
    {labek}
  </>
)

const handleBuy = (form, onFinish) => {
  form.validateFields().then((values) => {
    onFinish(values)
    form.resetFields()
  })
}

const FormTickets = ({ open, numTickets, onFinish, onClose, isLoading }) => {
  const [form] = Form.useForm()

  return (
    <Modal
      title="Comprar Tickets"
      open={open}
      onOk={() => {
        handleBuy(form, onFinish)
      }}
      onCancel={onClose}
      centered
      footer={(_) => (
        <>
          <Button key="back" onClick={onClose} data-testid="cancel">
            Cancelar
          </Button>
          <Button
            key="submit"
            loading={isLoading}
            onClick={() => handleBuy(form, onFinish)}
            data-testid="buy"
          >
            Comprar
          </Button>
        </>
      )}
      confirmLoading={isLoading}
    >
      <Form
        initialValues={{
          tickets: 1,
        }}
        requiredMark={requiredMark}
        size="large"
        layout="vertical"
        form={form}
      >
        <Form.Item
          label="Numero de tickets"
          name="tickets"
          rules={[
            {
              required: true,
              message: 'Por favor ingrese el numero de tickets',
            },
            {
              type: 'number',
              min: 1,
              max: 30 - numTickets,
              message: `El número de tickets debe ser entre 1 y ${30 - numTickets}`,
            },
          ]}
          hasFeedback
          validateTrigger={['onChange', 'onBlur']}
          tooltip="Este es el número de tickets que desea comprar"
        >
          <InputNumber
            min={1}
            max={30 - numTickets}
            style={{ width: '230px' }}
            data-testid="input-tickets"
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default FormTickets
