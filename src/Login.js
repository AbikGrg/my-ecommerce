import { useEffect, useState } from 'react'
import { Form, Button,Nav , Image,Col} from 'react-bootstrap'


const Login = () => {

  let [username, setusername] = useState('')
  let [password, setPassword] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let request = { username, password }
    localStorage.setItem('user', request)
    window.location = '/'
   
  }

  return <>
  <Image src="https://previews.123rf.com/images/mipan/mipan1312/mipan131200011/24691387-login-concept-with-red-mouse-and-cable-in-the-shape-of-login-word.jpg"fluid />
  
  <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>UserName</Form.Label>
      <Form.Control type="text" placeholder="Enter your username" onChange={(e) => setusername(e.target.value)} />
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
    </Form.Group>
    
     
    <Button variant="info" type="submit">
      Login
    </Button>
    <Nav.Link href="/register">If you don't have an account</Nav.Link>
  </Form>
  </>
}

export default Login