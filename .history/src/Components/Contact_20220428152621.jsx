import React from 'react'
import '../Style/Contact.scss'
import CricleContact from '../assets/Images/CricleContact.png'
import  Kub from '../assets/Images/Kub.png'
import {Card,Form,Col,Row} from 'react-bootstrap'
import ContactImg from '../assets/Images/ContactImg.png'
export default function Contact() {
  return (
    <div className='container ' id='contact'>
        <img src={Kub} alt=""  className='Kub'/>
        <Card  className='ContactCard m-auto  border-0 '>
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
    
    style={{ height: '60px', backgroundColor:'#E7E7E7'   }}
  />
    </Form.Group>

    <Form.Group as={Col} >
    <Form.Control
    
    type="text"
    placeholder="Enter phone tel"
    style={{ height: '60px',backgroundColor:'#E7E7E7' }}
  
  />
    </Form.Group>
  </Row>
    <Form.Group className="mb-3" >
    <Form.Control
      as="textarea"
      placeholder="Enter your subject"
      style={{ minHeight: '140px',backgroundColor:'#E7E7E7' }}
      
    />
  </Form.Group>
</Form>

   </div>
   
  </Card.Body>
  <a href="#"  >
      <button className='SendBtn m-auto'>
      SEND MESSAGE
      </button>
  </a>
</Card>

<img src={CricleContact} alt="" className='CricleContact'/>
    </div>
  )
}
