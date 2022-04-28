import React from "react";
import "../Style/Products.scss";
import Product1 from '../assets/Images/Product2.png';
import Product2 from '../assets/Images/Product2.png';
import Product3 from '../assets/Images/Product2.png';
import Product4 from '../assets/Images/Product2.png';
import Product5 from '../assets/Images/Product2.png';
import Product2 from '../assets/Images/Product2.png';
import { Card } from "react-bootstrap";
export default function Praducts() {
  const ListCard=[
    {id:1, CardImg:Product2, CardTitle:'Asosiy Plyonka Turlari', CardText:'Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint.'},
    {id:1, CardImg:Product2, CardTitle:'Asosiy Plyonka Turlari', CardText:'Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint.'},
    {id:1, CardImg:Product2, CardTitle:'Asosiy Plyonka Turlari', CardText:'Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint.'},
    {id:1, CardImg:Product2, CardTitle:'Asosiy Plyonka Turlari', CardText:'Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint.'},
    {id:1, CardImg:Product2, CardTitle:'Asosiy Plyonka Turlari', CardText:'Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint.'},
    {id:1, CardImg:Product2, CardTitle:'Asosiy Plyonka Turlari', CardText:'Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint.'},
  ]
  return (

  

    <div>
      <div className="container">
        <div className="row" >
          <div className="col-12">
            <div className="TitleWrapper col-6">
            <h4 className="ProductsTitle ">our production</h4>
          <p className="ProductsDescription">"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work</p>
            </div>
            <div className="CardWrapper">
             { ListCard.map((data, ind)=>(
        <div  key={ind} className="ProductCard">
        <img className="CardImg"  src={data.CardImg} />
        <Card.Body >
          <p className="CardTitle">{data.CardTitle}</p>
          <p className="CardText">
           {data.CardText}
          </p>
          
        </Card.Body>
      </div>
             ))}
    
            </div>

    
          </div>
        </div>
      </div>
    </div>
  );
}
