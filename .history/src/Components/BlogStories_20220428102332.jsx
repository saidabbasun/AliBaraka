import React from 'react'
import  "../Style/BlogStories.scss";

import { Card } from "react-bootstrap";
export default function BlogStories() {
  return (
    <div className='StoriesWrapper'> 
        <p className='ImgTopText'>How our client made 10x revenue</p>
        <div className="ImgWrapper">
      
        <Card className='StoriesImgCard'>
  <Card.Body>
    <Card.Title className='mb-5'>Card Title</Card.Title>
   
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Subtitle className="mb-2 text-muted">Juan Huang</Card.Subtitle>
  </Card.Body>
</Card>
        </div>
        
    </div>
  )
}
