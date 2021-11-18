import { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

const Checkout = (props) => {

  let initialCheck = {
    username: '',
    phone: '',
    address: ''
  }

  const [check, setCheck] = useState(initialCheck)

  const handleChange = (event) => {
    var modifiedValue = event.target.value
    check[event.target.id] = modifiedValue
    setCheck(check)
  }

  const currentCheck = props.currentCheck

  if (currentCheck && currentCheck != check) {
    setCheck(currentCheck)
  }

  const handleClose = () => props.action.hidePopUp()

  const handleSubmit = async (event) => {
    <a href='/final'></a>
    handleClose()
  }


  return <>
    <Modal.Dialog size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton onClick={handleClose}>
        <Modal.Title>Checkout</Modal.Title>
      </Modal.Header>
      <Modal.Body><Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>username</Form.Label>
          <Form.Control type="text" placeholder="Enter  username" value={check.username} onChange={(e) => handleChange(e)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Enter phone no" value={check.phone} onChange={(e) => { handleChange(e) }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter Address" value={check.address} onChange={(e) => { handleChange(e) }} />
        </Form.Group>
      </Form></Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit} href= '/final'>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  </>
}
    

export default Checkout ;