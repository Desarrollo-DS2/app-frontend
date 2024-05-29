import React from 'react'
import { Table } from 'antd'
import data from '@/app/_data/menu.json'
import columns from '@/app/_data/columns.json'

const { Column } = Table

const Menu = () => {
  return (
    <Table
      dataSource={data}
      pagination={false}
      style={{
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        maxHeight: 'calc(100vh - 64px)',
        overflowY: 'auto',
      }}
      size="middle"
    >
      {columns.map((col) => (
        <Column title={col.title} dataIndex={col.dataIndex} key={col.key} />
      ))}
    </Table>
  )
}

export default Menu
