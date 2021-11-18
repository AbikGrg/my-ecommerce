import { useEffect,useState } from "react"
import Checkout from "../../Checkout"
import{Container,Row,ListGroup,Badge,Image,Col,Button} from 'react-bootstrap'
const Sports=()=>{
    let[ball,setBall]=useState(false)
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
     if (mode == 'delete') setBuyme(true); else setBall(true)
   }
   const hidePopUp=()=>{
     setCurrentCheck(null)
     setBall(false)
     setBuyme(false)
   }
    const Buyme=()=>{
     setBuyme(true)
    }
   
   
    return <>
  <Image src="https://t4.ftcdn.net/jpg/02/74/36/55/240_F_274365517_UUwN5XpIvnp4h2dk6WXTYquBgC5O2JWN.jpg" fluid />
<ListGroup as="ol" numbered>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">{ball[0]?.name}</div>
      Price:{ball[0]?.price}
      <Row>
      <Col xs={3} md={7}>
      <Image src="https://image.shutterstock.com/image-photo/basketball-ball-over-white-background-600w-1937884765.jpg" thumbnail />
    </Col>
    </Row>
    <Button variant="secondary" size="lg" active onClick={() => showPopUp()}>
    Buy me</Button>
    </div>
    
    { ball && < Checkout currentCheck={currentCheck} action={{hidePopUp}}/>}
    <Badge variant="primary" pill>
      shop with us
    </Badge>
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">{ball[1]?.name}</div>
      Price:{ball[1]?.price}
      <Row>
      <Col xs={3} md={5}>
      <Image src="https://cdn.wisden.com/wp-content/uploads/2019/03/Screen-Shot-2020-03-13-at-11.21.59-am-e1584098709326-925x530.jpg" thumbnail />
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
      <div className="fw-bold">{ball[2]?.name}</div>
      Price:{ball[2]?.price}
      <Row>
      <Col xs={3} md={5}>
      <Image src="https://thumbs.dreamstime.com/b/dumbbell-isolated-white-2931553.jpg" thumbnail />
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
      <div className="fw-bold">{ball[3]?.name}</div>
      Price:{ball[3]?.price}
      <Row>
      <Col xs={3} md={4}>
      <Image src="https://scontent.fktm7-1.fna.fbcdn.net/v/t1.6435-9/p960x960/44771200_1965929460195982_904352132071686144_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=36a2c1&_nc_ohc=aGxkB3NA_DkAX_v8DvP&_nc_ht=scontent.fktm7-1.fna&oh=2bbea1f26df6fc18cf25642d6b896443&oe=619C8938" thumbnail />
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
      <div className="fw-bold">{ball[4]?.name}</div>
      Price:{ball[4]?.price}
      <Row>
      <Col xs={1} md={3}>
      <Image src="https://m.media-amazon.com/images/I/71Lubg--OqL._AC_SL1466_.jpg" thumbnail />
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
      <div className="fw-bold">{ball[5]?.name}</div>
      Price:{ball[5]?.price}
      <Row>
      <Col xs={3} md={9}>
      <Image src="https://i.ytimg.com/vi/kHZN7t49X8Y/hqdefault.jpg" thumbnail />
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
export default Sports;