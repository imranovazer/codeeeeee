import React, { useState } from 'react'
import { Form,FormGroup,Label,Input,Button} from 'reactstrap'

function EditForm(props) {
    const [elementToEdit, setElementToEdit] = useState({}) ;

    const addproperty = (value, propertyName) => {   
        const newState = {...elementToEdit, [propertyName]: value };
        setElementToEdit(newState);
    }

    const handleEditSubmit = (event) => {
        event.preventDefault();
        props.editFunction(elementToEdit);
        setElementToEdit({});
    }

    return (
        <Form inline onSubmit={handleEditSubmit}>
            <h1>Edit</h1>
            <FormGroup>
              <Label for="editName" hidden>Name</Label>
              <Input type="text" name="editName" id="editName" placeholder="Name" onChange={(e)=>addproperty(e.target.value,'name')} value={elementToEdit.name} />
            </FormGroup>
            {' '}
            <FormGroup>
              <Label for="editPrice" hidden>Price</Label>
              <Input type="text" name="editPrice" id="editPrice" placeholder="Amount" onChange={(e)=>addproperty(e.target.value,'price')} value={elementToEdit.price} />
            </FormGroup>
            {' '}
            <FormGroup>
              <Label for="editSeller" hidden>Seller</Label>
              <Input type="text" name="editSeller" id="editSeller" placeholder="Seller" onChange={(e)=>addproperty(e.target.value,'seller')} value={elementToEdit.seller} />
            </FormGroup>
            <Button type="submit">Save</Button>
        </Form>
    )
}

export default EditForm
