import React from "react";
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
  return (
    <div>
   
      <Navbar expand="lg">
        <Container >
          <Navbar.Brand href="#">
           
            <img src={Logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto  my-lg-0 me-5"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link   clas href="#action1"> Products</Nav.Link>
              <Nav.Link href="#action2">About us</Nav.Link>

              <Nav.Link href="#">Blog</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex ">
           <div className="phone me-3 ">
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
