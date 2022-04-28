import React from 'react';
import Logo from '../assets/Images/Logo.png'

export default function Footer () {
  return (
    <div className='container'>
        <div className="WrapFooter">
        <div className="WrapLeft">
           <img src={Logo} alt="Logo" />
           <p className='TextData'>
           Tashkent, Mustakillik St, 15 <br />
Tel: +998 99 000 00 00 <br />
E-mail: hello@alibaraka.com

           </p>
           </div>
           <div className="WrapRight">
    <div className="PageLink">
        <div className="AboutPage">

        </div>
        <div className="ProductPage">

        </div>
        <div className="BlogPage"></div>
    </div>
           </div>
        </div>
     
   
    </div>
  )
}
