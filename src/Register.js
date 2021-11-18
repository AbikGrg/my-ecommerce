import { useState } from 'react'
import { Form, Button, Nav ,Image} from 'react-bootstrap'


const Register = () => {

  const useGetFromInput = (initialValue) => {
    let [value, setValue] = useState(initialValue)

    const handleChange = (e) => {
      setValue(e.target.value)
    }
    return {
      value,
      onChange: handleChange
    }
  }
 

  let firstName = useGetFromInput('')
  let lastName = useGetFromInput('')
  let address = useGetFromInput('')
  let email = useGetFromInput('')
  let password = useGetFromInput('')

  const handleForm = (e) => {
    e.preventDefault()
    const request = {
      firstName: firstName.value,
     lastName:lastName.value
    }
    console.log(request)
    window.location = '/login'
  }
  
  return <>
  <Image src=" https://jeunes-ihedn.org/wp-content/uploads/2013/05/reg_now_button.jpg" fluid /> 
  <Form onSubmit={handleForm}>
    <Form.Group className="mb-3" controlId="formBasicFName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter First Name" {...firstName} />
    </Form.Group>

    
    <Form.Group className="mb-3" controlId="formBasicLName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Last Name" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicAddress">
      <Form.Label>Address</Form.Label>
      <Form.Control type="text" placeholder="Enter Address" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>

    <Button variant="info" type="submit">
      Submit
    </Button>
    <Nav.Link href="/login">If you have account please Login</Nav.Link>
  </Form>
  </>
}

export default Register