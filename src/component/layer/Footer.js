import React from "react";
import { Col, Container, Row ,Navbar} from "react-bootstrap";
const heading={
  color:"white",
}
const Footer = () => {
  return <>
  
  <Navbar bg="dark" variant="dark">
      <Container fluid className="text-center text-md-left">
        <Row>
          <Col md="6">
            <h5 className="title" style ={heading}>Thank u for your visit.....</h5>
            <p style ={heading}>
               For more info  you can contact us at :-
              phone:9818664623
              email:sirajkc
            </p>
          </Col>
          <Col md="6">
            <h5 className="Home">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="/">HOME</a>
              </li>
              <li className="list-unstyled">
                <a href="/electronicdevice">Electronic Device</a>
              </li>
              <li className="list-unstyled">
                <a href="/clothes">Clothes</a>
              </li>
              <li className="list-unstyled">
                <a href="/property">Property</a>
                <li className="list-unstyled">
                <a href="/sports">Sports wear</a>
              </li>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright text-center py-3">
        <Container fluid>
        <p style={heading}>copyright:2021_test</p>
        </Container>
      </div>
    
      </Navbar>
</>
}


export default Footer;