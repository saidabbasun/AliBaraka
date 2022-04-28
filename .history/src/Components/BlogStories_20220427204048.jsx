import React from 'react'
import  "../Style/BlogStories.scss";

import { Card } from "react-bootstrap";
export default function BlogStories() {
  return (
    <div className='StoriesWrapper'> 
        <p className='ImgTopText'>How our client made 10x revenue</p>
        <div className="ImgWrapper">
      
        <Card className='Stories'>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
  </Card.Body>
</Card>
        </div>
        
    </div>
  )
}
