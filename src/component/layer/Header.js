import { useContext, useEffect, useState } from "react"
import{Navbar,Nav,Container} from "react-bootstrap"
const Header=()=>{
  let user = localStorage.getItem('user')
  let [authUser, setUSer] = useState()

  useEffect(() => {
    setUSer(user)
  }, [])

  useEffect(() => {
    setUSer(user)
  }, [authUser])


 return <>
 <Navbar bg="dark" variant="dark">
   <Container>
   <Nav className="ml-auto">
   {authUser ?
    <>
   <Navbar.Brand href="/">Home</Navbar.Brand>
     <Nav.Link href="/contact">Contact</Nav.Link>
     <Nav.Link href="/stuff">Merchendice</Nav.Link>
     <Nav.Link href="/aboutus">Aboutus</Nav.Link>
     <Nav.Link href="/logout">logout</Nav.Link>
   
     </>
     :
     <>
      <Navbar.Brand href="/">Home</Navbar.Brand>
     
     <Nav.Link href="/stuff">Merchendice</Nav.Link>
     <Nav.Link href="/contact">Contact</Nav.Link>
     
     
     <Nav.Link href="/register">Register</Nav.Link>
     <Nav.Link href="/login">Login</Nav.Link>
     <Nav.Link href="/aboutus">Aboutus</Nav.Link>

    
     
     </>
}

     
   </Nav>
   </Container>
 </Navbar>
 </>

}
export default Header;