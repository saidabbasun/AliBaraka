import React from 'react'
import '../Style/Contact.scss'
import {Card} from 'react-bootstrap'
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
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
    </div>
  )
}
