import { useEffect,useState } from "react"
import{Container,Row,ListGroup,Badge,Image,Col,Button} from 'react-bootstrap'
import Checkout from "../../Checkout"
const Property=()=>{
    let[flats,setFlats]=useState(false)
    let[isBuyme,setBuyme]=useState(false)
    let[check,setCheck]=useState([])
    let[currentCheck,setCurrentCheck]=useState(null)
    useEffect (async ()=>{
      const check =await getCheck()
        setCheck(check)
       setCheck(check)
    },[check])
 const getCheck =async()=>{
   const response = await fetch ('http://localhost:3002/flats')
   return await response.json()
 }
   const showPopUp = (item, mode = null) => {
     if (item) setCurrentCheck(item); else setCurrentCheck(null)
     if (mode == 'delete') setBuyme(true); else setFlats(true)
   }
   const hidePopUp=()=>{
     setCurrentCheck(null)
     setFlats(false)
     setBuyme(false)
   }
    const Buyme=()=>{
     setBuyme(true)
    }
   
  
return <>
<Image src="http://onlinepublicity.in/FreeListingImages/01312018095302.jpg" fluid />

<ListGroup as="ol" numbered>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">{flats[0]?.title}</div>
      Price:{flats[0]?.price}
      <Row>
      <Col xs={3} md={4}>
      <Image src="https://www.neopropertynepal.com/uploads/img/building.jpg" thumbnail />
    </Col>
    </Row>
    <Button variant="secondary" size="lg" active onClick={() => showPopUp()}>
    Buy me</Button>
    </div>
    
    <Badge variant="primary" pill>
      shop with us
    </Badge>
    { flats && < Checkout currentCheck={currentCheck} action={{hidePopUp}}/>}
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">{flats[1]?.title}</div>
      Price:{flats[1]?.price}
      <Row>
      <Col xs={3} md={3}>
      <Image src="https://dalaydai.com/media/properties/house-for-sale-in-thapathali-kathmandu/Thapathali-home-2-1579595578.jpg" thumbnail />
    </Col>
    </Row>
    <Button variant="secondary" size="lg" active onClick={() => showPopUp()}>
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
      <div className="fw-bold">{flats[2]?.title}</div>
      Price:{flats[1]?.price}
      <Row>
      <Col xs={3} md={10}>
      <Image src="https://epropertynepal.com/system/photos/2354/original_28381016_1713391482055560_828254709_n.jpg?1519371842" thumbnail />
    </Col>
    </Row>
    <Button variant="secondary" size="lg" active onClick={() => showPopUp()}>
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
      <div className="fw-bold">{flats[3]?.title}</div>
      Price:{flats[3]?.price}
      <Row>
      <Col xs={3} md={5}>
      <Image src="https://www.neopropertynepal.com/uploads/img/1548917194-2019-01-31-0-land-2.jpg" thumbnail />
    </Col>
    </Row>
    <Button variant="secondary" size="lg" active onClick={() => showPopUp()}>
    Buy me</Button>
    </div>
    <Badge variant="primary" pill>
      shop with us
    </Badge>
    { flats && < Checkout currentCheck={currentCheck} action={{hidePopUp}}/>}
  </ListGroup.Item>
</ListGroup>

</>
}
export default Property;