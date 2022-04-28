import React, { useEffect, useState } from "react";
import "../Style/Header.scss";
import Logo from "../assets/Images/Frame.png";
import Phone from "../assets/Images/Telefon.svg";
import {
 
  Container,
  Form,
  
  Nav,
  Navbar,
  
} from "react-bootstrap";
export default function Header() {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, []);
  // const header=document.getElementById("HeaderTop")
  // if(this.scrollY>=100){
  //   header.classList.toggle('.Headerbg')
  // }
  return (
    <div className={`header ${
      small ? "small" : ""
    }`}>
    <Navbar  fluid className="HeaderNavbar" >
  <Container>
    <Navbar.Brand href="#home">
    <img src={Logo} alt="Logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
            <Nav  
              className="mx-auto  me-5"
           
            >
              <Nav.Link    className="me-3" href="#product"> Products</Nav.Link>
              <Nav.Link className="me-3"  href="#about">About us</Nav.Link>

              <Nav.Link className="me-3"  href="#blog">Blog</Nav.Link>
              <Nav.Link className="me-3"  href="#contact">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex mt-3 textGreen">
           <div className="phone me-2 ">
             <img src={Phone} alt="phone" />
           </div>
           
             <p>95-004-80-90 <br/>
             94-641-40-00</p>

            </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>


  );
}