import React from 'react'
import '../Style/Blog.scss'
import { Card, Accordion } from "react-bootstrap";
import Flag from '../assets/Images/Flag.png'
import BlogStories from './BlogStories';
export default function Blog() {
  return (
    <div>
  <div className="container" id='blog'>
      <div className="BlogWrapper">
      <img  className='Flag' src={Flag} alt="Flag" />
          <Card className=" BlogCard  border-0">
          
            <div className="TitleWrapper mx-auto col-10">
              <h4 className=" BlogTitle">See why we are trusted the world over </h4>
              <p className="ProductsDescription">
              The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency.
              </p>
           
            </div>
            <Accordion className='accordion'>
  <Accordion.Item eventKey="0">
    <Accordion.Header ><p>Do you provide customer support?</p></Accordion.Header>
   
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore 
     
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item  eventKey="1">
    <Accordion.Header >How much traffic can the hosting handle?</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
     
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Do you have any questions for us?</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
     
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header> What is your return policy?</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
     
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
          </Card>
      </div>
<BlogStories/>
         </div>
    </div>
  )
}
