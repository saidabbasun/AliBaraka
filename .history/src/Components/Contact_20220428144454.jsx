import React from 'react'
import '../Style/Contact.scss'
import {Card,Form,Col,Row} from 'react-bootstrap'
import ContactImg from '../assets/Images/ContactImg.png'
export default function Contact() {
  return (
    <div>
        <Card  className='ContactCard'>
  <Card.Img variant="top" src={ContactImg} />
  <Card.Body>
    <Card.Title className='text-center ContactTitle fw-bold '>Still are you hesitating?</Card.Title>
    <Card.Text className='ContactText'>
    Your work is going to fill a large part of your life, and the only way to be truly satisfied.
    </Card.Text>
   <div className="InputWrap">
       <Form>
   <Row className="mb-3">
    <Form.Group as={Col} >
    <Form.Control
    className='BgControl'
    type="text"
    placeholder="Enter your name"  
    
    style={{ height: '60px' }}
  />
    </Form.Group>

    <Form.Group as={Col} >
    <Form.Control
    className='BgControl'
    type="text"
    placeholder="Enter phone tel"
    style={{ height: '60px' }}
  
  />
    </Form.Group>
  </Row>
    <Form.Group  className='mb-5BgControl'>
    <Form.Control
      as="textarea"
      placeholder="Enter your subject"
      style={{ height: '140px' }}
      
    />
  </Form.Group>
</Form>
   </div>
  </Card.Body>
</Card>
    </div>
  )
}
