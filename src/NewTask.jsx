import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import ForumComponent from "./ForumComponent";
import ProductList from "./ProductList";
import EditForm from "./EditForm";

function NewTask() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addProduct = (element) => {
    setProducts([
      ...products,
      { ...element, id: Math.floor(Math.random() * 100) },
    ]);
  };

  const deleteProduct = (id) => {
    const newObj = products.filter((e) => e.id !== id);
    setProducts(newObj);
  };

  const editProduct = (product) => {
    console.log(product, selectedProduct);
    const newPoductData = products.map((e) => {
      if (e.id != selectedProduct) {
        return e;
      } else {
        return { ...product, id: Math.floor(Math.random * 100) };
      }
    });
    console.log("YOu are here");
    setProducts(newPoductData);
  };

  return (
    <Container>
      <Row>
        <h1>Hello</h1>
      </Row>
      <Row>
        <Col xs={6}>
          <Row>
            <EditForm
              productsData={products}
              editFunction={editProduct}
              selectedProduct={selectedProduct}
            />
          </Row>
          <Row>
            <ProductList
              productsData={products}
              deleteFunction={deleteProduct}
              setSelectedProduct={setSelectedProduct}
            />
          </Row>
        </Col>
        <Col xs={6}>
          <ForumComponent propFunction={addProduct} />
        </Col>
      </Row>
    </Container>
  );
}

export default NewTask;
