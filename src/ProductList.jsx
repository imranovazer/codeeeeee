import { Button } from "bootstrap";
import React from "react";
import { Table } from "reactstrap";

function ProductList(props) {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Seller</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {props.productsData.map((e) => (
          <tr key={e.id}>
            <th scope="row">{e.id}</th>
            <td>{e.name}</td>
            <td>{e.price}</td>
            <td>{e.seller}</td>
            <td>
              <button onClick={() => props.deleteFunction(e.id)}>Delete</button>
            </td>
            <td>
              <button onClick={() => props.setSelectedProduct(e.id)}>
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ProductList;
