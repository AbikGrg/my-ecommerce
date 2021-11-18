import {ListGroup,Badge,Col,Image,Container,Row,Button} from 'react-bootstrap'
import { useEffect,useState } from "react"
import Checkout from '../../Checkout'
const Electronicdevice=()=>{
    let[elec,setElec]=useState(false)
    let[isBuyme,setBuyme]=useState(false)
    let[check,setCheck]=useState([])
    let[currentCheck,setCurrentCheck]=useState(null)
   useEffect(async ()=>{
     const check =await getCheck()
       setCheck(check)
      setCheck(check)
   },[check])
const getCheck =async()=>{
  const response = await fetch ('http://localhost:3002/elec')
  return await response.json()
}
  const showPopUp = (item, mode = null) => {
    if (item) setCurrentCheck(item); else setCurrentCheck(null)
    if (mode == 'delete') setBuyme(true); else setElec(true)
  }
  const hidePopUp=()=>{
    setCurrentCheck(null)
    setElec(false)
    setBuyme(false)
  }
   const Buyme=()=>{
    setBuyme(true)
   }
  
    return<> 
    <Image src="https://icms-image.slatic.net/images/ims-web/fb59e6d4-2163-4119-a28c-2bdd4f2fa420.jpg" fluid />
        <ListGroup as="ol" numbered>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{elec[0]?.name}</div>
            Price:{elec[0]?.price}
            <Container>
  <Row>
  <Col xs={6} md={3}>
      <Image src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_hero_09142021_inline.jpg.large.jpg" thumbnail />
    </Col>
  </Row>
  <Button variant="secondary" size="lg" active onClick={() => showPopUp()}>
    Buyme</Button>
    
</Container>
          </div>
          <Badge variant="primary" pill >
            shop with us
          </Badge>
          
         { elec && < Checkout currentCheck={currentCheck} action={{hidePopUp}}/>}
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{elec[1]?.name}</div>
            Price:{elec[1]?.price}
            <Row>
  <Col xs={6} md={5}>
      <Image src="https://i.dell.com/is/image/DellContent//content/dam/global-asset-library/Products/Notebooks/Inspiron/15_3501_non-touch/in3501nt_cnb_00055lf110_gr.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=647&qlt=100,0&resMode=sharp2&size=647,402" thumbnail />
    </Col>
  </Row>
  <Button variant="secondary" size="lg" active  onClick={() => showPopUp()}>
    Buy me</Button>
          </div>
          <Badge variant="primary" pill>
            shop with us
          </Badge>
        </ListGroup.Item>
        
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{elec[2]?.name}</div>
            Price:{elec[2]?.price}
            <Row>
  <Col xs={6} md={3}>
      <Image src="https://www.lg.com/sa_en/images/tvs/md05943319/gallery/medium02.jpg" thumbnail />
    </Col>
  </Row>
  <Button variant="secondary" size="lg" active  onClick={() => showPopUp()}>
                 Buy me</Button>
          </div>
          <Badge variant="primary" pill>
          shop with us
          </Badge>
        </ListGroup.Item>
      </ListGroup>
   
</>
}
export default Electronicdevice;
