import React from "react";
import "../Style/Products.scss";

import { Card } from "react-bootstrap";

export default function Praducts() {
  return (
    <div>
      <div className="container">
        <Card className="bg-dark text-white">
        
          <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    </div>
  );
}
