import React, { useState } from 'react';
import { Container ,Row ,Col } from 'reactstrap';
import ForumComponent from './ForumComponent';
import ProductList from './ProductList';
import EditForm from './EditForm';

function NewTask() {
  const [products, setProducts] = useState([]);

  const addProduct = (element) => {
    setProducts([...products, element]);
  };

  const deleteProduct = (id) => {
    const newObj = products.filter(e => e.id !== id);
    setProducts(newObj);
  };

  const editProduct = (id, updatedProduct) => {
    const index = products.findIndex((product) => product.id === id);
    if (index === -1) {
      console.log("Product not found");
      return;
    }
    const updatedProducts = [...products];
    updatedProducts[index] = {...updatedProducts[index], ...updatedProduct};
    setProducts(updatedProducts);
  };

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <Container>
      <Row>
        <h1>Hello</h1>
      </Row>
      <Row>
        <Col xs={6}>
          <Row>
            <EditForm
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              editFunction={editProduct}
            />
          </Row>
          <Row>
            <ProductList
              productsData={products}
              deleteFunction={deleteProduct}
              editFunction={setSelectedProduct}
            />
          </Row>
        </Col>
        <Col xs={6}>
          <ForumComponent propFunction={addProduct}  />
        </Col>
      </Row>
    </Container>
  );
}

export default NewTask;
