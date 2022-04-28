import React from 'react'
import '../Style/Home.scss'
import Header from './Header'
import HomeImg from '../assets/Images/HomeImg.png'
import {
 Card
  
} from "react-bootstrap";
export default function Home() {
  return (
 <div className="hero">
   

<Card className=" border-0 bg-dark text-white">
 
  <Card.Img src={HomeImg} alt="Card image" />
 
  <Card.ImgOverlay>
  <Header/>
    <Card.Title className=''>ВСЕ ДЛЯ ТЕПЛИЦ</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card> 
</div>
  )
}
