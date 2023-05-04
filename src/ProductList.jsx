import React from 'react'
import { Table} from 'reactstrap'

function ProductList({productsData}) {
  return (
    <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Price</th>
        <th>Seller</th>
      </tr>
    </thead>
    <tbody>
      
      {productsData.map(
        e => <tr>
        <th scope="row">{e.id}</th>
        <td>{e.name}</td>
        <td>{e.price}</td>
        <td>{e.seller}</td>
      </tr>
      )}
    </tbody>
  </Table>
  )
}

export default ProductList