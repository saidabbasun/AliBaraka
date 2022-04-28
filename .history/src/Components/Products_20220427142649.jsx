import React from "react";
import "../Style/Products.scss";
import Product2 from '../assets/Images/Products2.png';
import { Card } from "react-bootstrap";
export default function Praducts() {
  return (
    <div>
      <div className="container">
        <div className="row" >
          <div className="col-12">
            <div className="TitleWrapper col-6">
            <h4 className="ProductsTitle ">our production</h4>
          <p className="ProductsDescription">"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work</p>
            </div>
            <div  className="ProductCard">
  <img className="CardImg" variant="left" src={Product2} />
  <Card.Body >
    <p className="CardTitle">Card Title</p>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</div>
    
          </div>
        </div>
      </div>
    </div>
  );
}
