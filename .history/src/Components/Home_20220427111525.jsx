import React from 'react'
import '../Style/Home.scss'
import Header from './Header'
import HomeImg from '../assets/Images/HomeImg.png'
import {
 Card,
  Button
} from "react-bootstrap";
export default function Home() {
  return (

   

<Card className=" border-0 bg-dark text-white ">
 
  <Card.Img src={HomeImg} alt="Card image" />
  
  <Card.ImgOverlay className='container d-flex flex-column justify-content-center'>
  <Header />
  <div>

  </div>

  
  </Card.ImgOverlay>
</Card> 

  )
}
