import React from 'react';
import Logo from '../assets/Images/Logo.png'

export default function Footer () {
  return (
    <div className='container'>
        <div className="WrapFooter">
        <div className="WrapLeft">
           <img src={Logo} alt="Logo" />
           <p>
           Tashkent, Mustakillik St, 15 
Tel: +998 99 000 00 00
E-mail: hello@alibaraka.com

           </p>
           </div>
           <div className="WrapRight">
   
           </div>
        </div>
     
   
    </div>
  )
}
