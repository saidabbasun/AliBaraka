import React from 'react'
import  "../Style/BlogStories.scss";
import User from ''

export default function BlogStories() {
  return (
    <div className='StoriesWrapper'> 
        <p className='ImgTopText'>How our client made 10x revenue</p>
        <img src={User} alt="User" />
    </div>
  )
}
