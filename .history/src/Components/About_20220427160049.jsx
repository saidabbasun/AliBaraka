import React from 'react';
import '../Style/About.scss';
import Tractor from '../assets/Images/Tractor.png'
import AboutImg1 from '../assets/Images/AboutImg1.png'
import AboutImg2 from '../assets/Images/AboutImg2.png'
import { Card } from "react-bootstrap";
export default function About() {
  return (
    <div>
        <div className="container">
            <div className=" d-flex">
            <Card className="bg-white  border-0">
 
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

</Card>

</div>
            </div>
     

        </div>

    </div>
  )
}
