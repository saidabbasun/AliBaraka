import React from "react";
import "../Style/Products.scss";
import Product1 from '../assets/Images/Product1.png';
import Product2 from '../assets/Images/Product2.png';
import Product3 from '../assets/Images/Product3.png';
import Product4 from '../assets/Images/Product4.png';
import Product5 from '../assets/Images/Product5.png';
import Product6 from '../assets/Images/Product6.png';
import { Card } from "react-bootstrap";
export default function Praducts() {
  const ListCard=[
    {id:1, CardImg:Product1, CardTitle:'Asosiy Plyonka Turlari', CardText:'Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint.'},
    {id:1, CardImg:Product2, CardTitle:'Asosiy Zajim turlari', CardText:'Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint.'},
    {id:1, CardImg:Product3, CardTitle:'Tomchilab sug’orish tizimi', CardText:'Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint.'},
    {id:1, CardImg:Product4, CardTitle:'ISSIQXONANING sovutish TIZIMI', CardText:'Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint.'},
    {id:1, CardImg:Product5, CardTitle:'ISSIQXONANING ISITISH TIZIMI', CardText:'Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint.'},
    {id:1, CardImg:Product6, CardTitle:'QO’shimcha aksessuarlar', CardText:'Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint.'},
  ]
  return (

  

    <div>
      <div className="container">
        <div className="row" >
          <div className="col-12">
          
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
