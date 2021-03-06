import React from 'react';
import Logo from '../assets/Images/Logo.png';
import C from '../assets/Images/C.png';
import M from '../assets/Images/M.png'
import '../Style/Footer.scss'

export default function Footer () {
  return (
      <>
      <div className="FooterFluid">
    <div className='container '>
        <div className="FooterWrap">

       
        <div className="WrapText">
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
         <ul>
             <li>About us</li>
             <li>Our team</li>
             <li>Frequent Questions</li>
             <li>Contact us</li>
         </ul>
        </div>
        <div className="ProductLink">
        <h4>Product</h4>
        <ul>
             <li>Plyonka</li>
             <li>Zajim</li>
             <li>Isitish x Sovutish</li>
             <li>Suv taqsimoti</li>
         </ul>
        </div>
        <div className="BlogLink">
        <h4>Blog</h4>
        <ul>
             <li>10X</li>
             <li>Gardening</li>
             <li>Melon</li>
             <li>Water dist</li>
         </ul>

        </div>
    </div>
           </div>
        </div>
        <div className="BottomTextWrap">
            <p className="text ">
            Все права защищены.
            </p>
            <div className="TextRight">
                <p className='text'>Разработано в</p>
                <div className="abba">
                <img src={C} alt="C" className="Icon" />
                <p className="text">abba coding</p>
                </div>
               <div className="abba">
               <img src={M} alt="C" className="Icon" />
                <p className="text">abba media</p>
               </div>
               
            </div>

        </div>
     
        </div>
    </div>
   
    </div>
     <div className="FooterImg"></div>
     </>
  )
}
