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
    <Card.Title className='text-center'>Still are you hesitating?</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
    </div>
  )
}
