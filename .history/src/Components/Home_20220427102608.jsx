import React from 'react'
import '../Style/Home.scss'
import Header from './Header'
import HomeImg from '../assets/Images/HomeImg.png'
import {
 Card
  
} from "react-bootstrap";
export default function Home() {
  return (

   

<Card className=" border-0 bg-dark text-white ">
 
  <Card.Img src={HomeImg} alt="Card image" />
 
  <Card.ImgOverlay className='container'>
  <Header/>
    <Card.Title d className='Titlex '>ВСЕ ДЛЯ ТЕПЛИЦ</Card.Title>
    <Card.Text>
    Here will be brief information about our company and some of advantages of our offers. Here will be brief information about our company.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card> 

  )
}
