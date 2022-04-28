import React from 'react';
import '../Style/About.scss';
import Tra
import { Card } from "react-bootstrap";
export default function About() {
  return (
    <div>
        <div className="container">
            
        <Card className="bg-white d-flex flex-column border-0">
 
        <div className="TitleWrapper col-6">
   <h4 className=' ProductsTitle'>little ABout our company </h4>
   <p className="ProductsDescription">
   "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do."
   </p>
   <div className="BtnWrapper">
   <button className="AboutBtn"> More About </button>
    <a href="#" className='Link'>OUR YOUTUBE</a>
   </div>
   
   </div>
   <div className="AboutImg">
       <img src= alt="" />
   </div>
</Card>

        </div>

    </div>
  )
}
