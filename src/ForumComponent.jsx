import React, { useState } from 'react'
import { Form,FormGroup,Label,Input,Button} from 'reactstrap'





function ForumComponent(props) {
    const [elementToAdd, setElementToAdd] = useState({}) ;
    console.log(elementToAdd)

    const addproperty =(value,prpertyName)=>
    {   
        const newState= {...elementToAdd ,[prpertyName]: value  }
       
        setElementToAdd(newState)
         
    }

  return (
    <Form inline>
      <h1>Add new product</h1>
        <FormGroup>
          <Label for="exampleEmail" hidden>Name</Label>
          <Input type="text" name="email" id="exampleEmail" placeholder="Name" onChange={(e)=>addproperty(e.target.value,'name')}/>
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="examplePassword" hidden>Price</Label>
          <Input type="text" name="password" id="examplePassword" placeholder="Amount"onChange={(e)=>addproperty(e.target.value,'price')} />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="examplePassword" hidden>Seller</Label>
          <Input type="text" name="password" id="examplePassword" placeholder="Seller" onChange={(e)=>addproperty(e.target.value,'seller')} />
        </FormGroup>
        <Button onClick={()=>props.propFunction(elementToAdd)}>Submit</Button>
      </Form>
  )
}

export default ForumComponent