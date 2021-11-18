import List from "./component/functional-component/List";
import Product from "./component/functional-component/Product";
import Design from "./Design";
import {Row,Col,Container,Image}  from 'react-bootstrap'

const Home =()=>{
    return<>
    <Design/>
    <Container>
        
  <Row>
    <Col xs={6} md={4}>
    <li> <a href='/register'><Image src="https://www.jlnmcbgp.org/images/Sign-Up-Button-300x83.png" rounded /></a></li>
    </Col>
   
    
  </Row>
</Container>
   <Product/>
    {/*<List/>*/}
</>
}

export default Home;