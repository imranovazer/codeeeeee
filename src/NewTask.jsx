import React, { useState } from 'react'
import { Container ,Row ,Col } from 'reactstrap'
import ForumComponent from './ForumComponent'
import ProductList from './ProductList'

function NewTask() {
    const [products ,setProducts]= useState([]) ;

    const addProduct = (element)=>
    {
        products.push(element)
        setProducts([...products]) ;
    }


    
  return (
    <>
     <Container>
            <Row>
                <h1>Hello</h1>
            </Row>
            <Row>
                <Col xs={6}>
                    <ProductList productsData = {products}/>

                </Col>
                <Col xs={6}>
                    <ForumComponent propFunction = {addProduct} />
                </Col>

            </Row>

     </Container>
     
     
      </>

   
  )
}

export default NewTask