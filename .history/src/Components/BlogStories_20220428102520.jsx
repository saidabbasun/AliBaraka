import React from 'react'
import  "../Style/BlogStories.scss";

import { Card } from "react-bootstrap";
export default function BlogStories() {
  return (
    <div className='StoriesWrapper'> 
        <p className='ImgTopText'>How our client made 10x revenue</p>
        <d  iv className="ImgWrapper">
      
        <Card className='StoriesImgCard'>
  <Card.Body>
    <Card.Title className='mb-5'>"I learned so much, even as a professional".</Card.Title>
   
    <Card.Text>
    "Ut vehicula lacus a lacus tempor, nec viverra justo condimentum. Integer eu urna dapibus, scelerisque nisl non, semper ipsum. Etiam dolor arcu, tincidunt a arcu eget."
    </Card.Text>
    <Card.Subtitle className="mb-2 text-muted">Juan Huang</Card.Subtitle>
  </Card.Body>
</Card>
        </d>
        
    </div>
  )
}
