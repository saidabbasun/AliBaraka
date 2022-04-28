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
        <div className="AboutLink">
         <h4>About us</h4>
        </div>
        <div className="ProductLink">

        </div>
        <div className="BlogLink">

        </div>
    </div>
           </div>
        </div>
     
   
    </div>
  )
}
