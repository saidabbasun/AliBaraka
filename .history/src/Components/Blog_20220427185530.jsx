import React from 'react'
import '../Style/Blog.scss'
import { Card } from "react-bootstrap";
import Flag from '../assets/Images/Flag.png'
export default function Blog() {
  return (
    <div>
  <div className="container">
      
           <img src={Flag} alt="" />
          <Card className=" BlogCard  border-0">
            <div className="TitleWrapper  col-6">
              <h4 className=" BlogTitle">See why we are trusted the world over </h4>
              <p className="ProductsDescription">
              The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency.
              </p>
           
            </div>
          </Card>
         </div>
    </div>
  )
}
