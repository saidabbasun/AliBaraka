import React from 'react'
import  "../Style/BlogStories.scss";
import User from '../assets/Images/User.png'

export default function BlogStories() {
  return (
    <div className='StoriesWrapper'> 
        <p className='ImgTopText'>How our client made 10x revenue</p>
        <div className="ImgWrapper">
        <img src={User} alt="User" />
        </div>
        
    </div>
  )
}
