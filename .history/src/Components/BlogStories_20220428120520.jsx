import React, { useState } from 'react'
import  "../Style/BlogStories.scss";

import { Card,Collapse } from "react-bootstrap";
export default function BlogStories() {
    const [open, setOpen] = useState(false);
    const ListStory=[
        {id:1, Title:'Amateur'},
        {id:1, Title:'Beginner'},
        {id:1, Title:'Professional' }
    ]
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
                <h2 className='StoriesTitle mt-5'>
                Other successful stories
                </h2>
                {ListStory.map((data, ind)=>(
                    <div key={ind}>
    <hr/>
    <Card className=' border-0 '>
<Card.Body>
<Card.Title className=' StoryTitle'>{data.Title}</Card.Title>

<Card.Text className='StoryText '>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.
<Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
</Card.Text>
<Card.Subtitle
 onClick={
    // let acc = document.getElementsByClassName("skillsHeader");

    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let skillsList  = this.nextElementSibling;
        if (skillsList.style.height === "0") {
          skillsList.style.height = "100%";
        }
         else if(skillsList.style.height === "100%") {
          skillsList.style.height = "0";
        }
        else{
          skillsList.style.height = "100%";;
        }
      });
    };() => setOpen(!open)}
 aria-controls="example-collapse-text"
 aria-expanded={open}
className="StoryLink textmoted">More Information</Card.Subtitle>

    
     
   


</Card.Body>
</Card>
</div>
                ))}
            
             </div>
    
    </div>
  )
}
