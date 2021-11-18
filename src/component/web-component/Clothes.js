import { useEffect,useState } from "react"
import Checkout from "../../Checkout"

import{Container,Row,ListGroup,Badge,Image,Col,Button} from 'react-bootstrap'
const Clothes=()=>{
    
    let[dress,setDress]=useState(false)
    let[isBuyme,setBuyme]=useState(false)
    let[check,setCheck]=useState([])
    let[currentCheck,setCurrentCheck]=useState(null)
    useEffect (async ()=>{
      const check =await getCheck()
        setCheck(check)
       setCheck(check)
    },[check])
 const getCheck =async()=>{
   const response = await fetch ('http://localhost:3002/dress')
   return await response.json()
 }
   const showPopUp = (item, mode = null) => {
     if (item) setCurrentCheck(item); else setCurrentCheck(null)
     if (mode == 'delete') setBuyme(true); else setDress(true)
   }
   const hidePopUp=()=>{
     setCurrentCheck(null)
     setDress(false)
     setBuyme(false)
   }
    const Buyme=()=>{
     setBuyme(true)
    }
   
  
    return<>
    <Image src="https://www.sleekcover.com/covers/adidas-shoes-facebook-cover.jpg" fluid />
<ListGroup as="ol" numbered>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">{dress[0]?.name}</div>
      Price:{dress[0]?.price}
      <Row>
      <Col xs={3} md={10}>
      <Image src="https://www.reddoko.com/uploads/16734/300x3001523024890.11.jpg" thumbnail />
    </Col>
    </Row>
    <Button variant="secondary" size="lg" active onClick={() => showPopUp()}>
    Buy me</Button>
    </div>
    
    { dress && < Checkout currentCheck={currentCheck} action={{hidePopUp}}/>}
    <Badge variant="primary" pill>
      shop with us
    </Badge>
    
  </ListGroup.Item>

  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">{dress[1]?.name}</div>
      Price:{dress[1]?.price}
      <Row>
      <Col xs={3} md={10}>
      <Image src="https://img.faballey.com/images/Product/DRS03014Z/2.jpg" thumbnail />
    </Col>
    </Row>
    <Button variant="secondary" size="lg" active   onClick={() => showPopUp()}>
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
      <div className="fw-bold">{dress[2]?.name}</div>
      Price:{dress[2]?.price}
      <Row>
      <Col xs={3} md={5}>
      <Image src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ckykef7ov0iiv3oo8fcg/air-force-1-07-shoe-xmpTzM.png" thumbnail />
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
      <div className="fw-bold">{dress[3]?.name}</div>
      Price:{dress[3]?.price}
      <Row>
      <Col xs={3} md={8}>
      <Image src="https://5.imimg.com/data5/NM/LX/MY-42532489/mens-black-jacket-500x500.jpg" thumbnail />
    </Col>
    </Row>
    <Button variant="secondary" size="lg" active   onClick={() => showPopUp()}>
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
      <div className="fw-bold">{dress[4]?.name}</div>
      Price:{dress[4]?.price}
      <Row>
      <Col xs={1} md={9}>
      <Image src="https://media.istockphoto.com/photos/white-tshirt-on-a-young-man-white-background-front-and-back-picture-id685885534?b=1&k=20&m=685885534&s=170667a&w=0&h=OivaW_DLaIqW3h0wqNheDBTMLoXuIqeC3B3coHQ_QUw=" thumbnail />
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
      <div className="fw-bold">{dress[5]?.name}</div>
      Price:{dress[5]?.price}
      <Row>
      <Col xs={3} md={5}>
      <Image src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sweatshirts-lead-1629206685.jpg?crop=1.00xw:0.895xh;0,0.0456xh&resize=980:*" thumbnail />
    </Col>
    </Row>
    <Button variant="secondary" size="lg" active onClick={() => showPopUp()}>
    Buy me</Button>
    </div>
    <Badge variant="primary" pill>
      shop with us
    </Badge>
  </ListGroup.Item>
</ListGroup>
    </>


}
export default Clothes;