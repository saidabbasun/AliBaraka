import React from 'react'
import '../Style/Blog.scss'
import { Card } from "react-bootstrap";
export default function Blog() {
  return (
    <div>
  <div className="container">
       
          <Card className="bg-white   border-0">
            <div className="TitleWrapper col-6">
              <h4 className=" text- ProductsTitle">See why we are trusted the world over </h4>
              <p className="ProductsDescription">
                "Your work is going to fill a large part of your life, and the
                only way to be truly satisfied is to do what you believe is
                great work. And the only way to do great work is to love what
                you do."
              </p>
           
            </div>
          </Card>
         </div>
    </div>
  )
}
