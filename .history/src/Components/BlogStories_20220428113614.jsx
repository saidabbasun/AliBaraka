import React from 'react'
import  "../Style/BlogStories.scss";

import { Card } from "react-bootstrap";
export default function BlogStories() {
  return (
    <div className='StoriesWrapper  row'> 
             <div className="StoryLeft col-6">
             <p className='ImgTopText  '>How our client made <br/> 10x revenue</p>
             <div className="ImgWrapper mt-5 ">
       
       <Card className='StoriesImgCard border-0 '>
 <Card.Body>
   <Card.Title className='mb-4 CardStoryTitle'>"I learned so much, even as a professional".</Card.Title>
  
   <Card.Text className='CardStoryText mb-4'>
   "Ut vehicula lacus a lacus tempor, nec viverra justo condimentum. Integer eu urna dapibus, scelerisque nisl non, semper ipsum. Etiam dolor arcu, tincidunt a arcu eget."
   </Card.Text>
   <Card.Subtitle className="mb-2 CardStorySubtitle">Juan Huang</Card.Subtitle>
 </Card.Body>
</Card>
<button className="BlogSoriesBtn"> more stories </button>
       </div>
      
             </div>
             <div className="StoryRight col-6">
                <h2 className='StoriesTitle '>
                Other successful stories
                </h2>
             </div>
    
    </div>
  )
}
