import React from 'react';
import '../Style/About.scss';
import { Card } from "react-bootstrap";
export default function About() {
  return (
    <div>
<Card className="bg-white text-white border-0">
 
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
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
