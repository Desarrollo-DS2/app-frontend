import React from 'react'
import { Card, Col, Row, Table } from 'antd'

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
    carne: 'Cerdo Asado	',
    principio: 'Pastas con Verduras',
    ensalada: 'Pastas con Verduras',
    jugo: 'Mango',
  },
  {
    key: '4',
    day: 'Jueves',
    sopa: 'Consome',
    arroz: 'Blanco',
    carne: 'Filete de Pollo	',
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

const Menu = () => {
  return (
    <Table
      dataSource={data}
      pagination={false}
      style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}
    >
      <Column title="Dia" dataIndex="day" key="day"/>
      <Column title="Sopa" dataIndex="sopa" key="sopa" />
      <Column title="Arroz" dataIndex="arroz" key="arroz" />
      <Column title="Carne" dataIndex="carne" key="carne" />
      <Column title="Principio" dataIndex="principio" key="principio" />
      <Column title="Ensalada" dataIndex="ensalada" key="ensalada" />
      <Column title="Jugo" dataIndex="jugo" key="jugo" />
    </Table>
  )
}

export default Menu
