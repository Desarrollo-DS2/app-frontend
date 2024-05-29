import React from 'react'
import { Table } from 'antd'

const { Column } = Table

const data = [
  {
    key: '1',
    day: 'Lunes',
    sopa: 'De Lentejas',
    arroz: 'Blanco',
    carne: 'Cerdo Asado en Salsa de Piña',
    principio: 'Maduro al Horno',
    ensalada: 'Lechuga y Tomate',
    jugo: 'Naranja',
  },
  {
    key: '2',
    day: 'Martes',
    sopa: 'De Arroz',
    arroz: 'Blanco',
    carne: 'Asada',
    principio: 'Yuca Guisada',
    ensalada: 'Repollo blanco y Zanahoria',
    jugo: 'Mora',
  },
  {
    key: '3',
    day: 'Miércoles',
    sopa: 'De Torrejas',
    arroz: 'Blanco',
    carne: 'Cerdo Asado',
    principio: 'Pastas con Verduras',
    ensalada: 'Pastas con Verduras',
    jugo: 'Mango',
  },
  {
    key: '4',
    day: 'Jueves',
    sopa: 'Consome',
    arroz: 'Blanco',
    carne: 'Filete de Pollo',
    principio: 'Banano',
    ensalada: 'Lechuga, Zanahoria y Tomate',
    jugo: 'Lulo',
  },
  {
    key: '5',
    day: 'Viernes',
    sopa: 'De Frijoles',
    arroz: 'Blanco',
    carne: 'Chorizo',
    principio: 'Pataconcitos',
    ensalada: 'Pepino y Tomate',
    jugo: 'Agua de Panela',
  },
]

const columns = [
  { title: "Dia", dataIndex: "day", key: "day" },
  { title: "Sopa", dataIndex: "sopa", key: "sopa" },
  { title: "Arroz", dataIndex: "arroz", key: "arroz" },
  { title: "Carne", dataIndex: "carne", key: "carne" },
  { title: "Principio", dataIndex: "principio", key: "principio" },
  { title: "Ensalada", dataIndex: "ensalada", key: "ensalada" },
  { title: "Jugo", dataIndex: "jugo", key: "jugo" },
]

const Menu = () => {
  return (
    <Table
      dataSource={data}
      pagination={false}
      style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', maxHeight: 'calc(100vh - 64px)', overflowY: 'auto' }}
    >
      {columns.map((col) => (
        <Column title={col.title} dataIndex={col.dataIndex} key={col.key} />
      ))}
    </Table>
  )
}

export default Menu