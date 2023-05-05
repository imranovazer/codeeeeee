import React, { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function EditForm(props) {
  const [productToAdd, setProductToAdd] = useState();

  const addproperty = (value, prpertyName) => {
    const newState = { ...productToAdd, [prpertyName]: value };

    setProductToAdd(newState);
  };
  const OnSubmit = () => {
    props.editFunction(productToAdd);
    console.log("clicked");
  };

  return (
    <Form inline>
      <h1>Edditing {props.selectedProduct && props.selectedProduct}</h1>
      <FormGroup>
        <Label for="exampleEmail" hidden>
          Name
        </Label>
        <Input
          type="text"
          name="email"
          id="exampleEmail"
          placeholder="Name"
          onChange={(e) => addproperty(e.target.value, "name")}
        />
      </FormGroup>{" "}
      <FormGroup>
        <Label for="examplePassword" hidden>
          Price
        </Label>
        <Input
          type="text"
          name="password"
          id="examplePassword"
          placeholder="Amount"
          onChange={(e) => addproperty(e.target.value, "price")}
        />
      </FormGroup>{" "}
      <FormGroup>
        <Label for="examplePassword" hidden>
          Seller
        </Label>
        <Input
          type="text"
          name="password"
          id="examplePassword"
          placeholder="Seller"
          onChange={(e) => addproperty(e.target.value, "seller")}
        />
      </FormGroup>
      <Button onClick={() => OnSubmit()}>Edit</Button>
    </Form>
  );
}

export default EditForm;
