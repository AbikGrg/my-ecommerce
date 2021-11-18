import {Card,Button,Row} from 'react-bootstrap'

const Product=()=>{

  return<>
  <Row>
  <Card bg={"info"} text={"dark"}style={{ width: '21rem' }}>
  <Card.Img variant="top" src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/03/vastu-tips-electronic-1583902426-1583904794.jpg" />
  <Card.Body>
    <Card.Title>Electronic Devices</Card.Title>
    <Card.Text>
     All Electronic Products
    </Card.Text>
    <Button variant="dark"href='/electronicdevices'>View</Button>
  </Card.Body>
</Card>
<Card bg={"danger"} text={"dark"} style={{ width: '21rem' }}>
  <Card.Img variant="top" src="https://img.staticmb.com/mbimages/photo_dir/developer/original_images/54539/Vip-Housing-And-Properties-1388135776103-Deveolper-Logo.jpg" />
  <Card.Body>
    <Card.Title>Housing and Property</Card.Title>
    <Card.Text>
     Housing And Property
    </Card.Text>
    <Button variant="dark"href='/property'>View</Button>
  </Card.Body>
</Card>
<Card bg={"info"} text={"dark"} style={{ width: '21rem' }}>
  <Card.Img variant="top" src="https://www.thoughtco.com/thmb/bMpVlJO3cIbaDNa-z9WuOk7oFRo=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/close-up-of-clothes-hanging-in-row-739240657-5a78b11f8e1b6e003715c0ec.jpg" />
  <Card.Body>
    <Card.Title>Clothes</Card.Title>
    <Card.Text>
     All Men and Women Clothes
    </Card.Text>
    <Button variant="dark"href='/clothes'>View</Button>
  </Card.Body>
</Card>
<Card bg={"danger"} text={"dark"} style={{ width: '21rem' }}>
  <Card.Img variant="top" src="https://thumbs.dreamstime.com/z/sports-equipment-white-4114767.jpg" />
  <Card.Body>
    <Card.Title>Sports</Card.Title>
    <Card.Text>
     Sports wear 
    </Card.Text>
    <Button variant="dark"href='/sports'>View</Button>
  </Card.Body>
</Card>
</Row>
  </>
}
export default Product ;