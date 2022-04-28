import React from 'react'
import '../Style/Header.scss'
import Logo from '../assets/Images/Frame.png';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
export default function Header() {
  return (
    <div >
          {/* <nav class="navbar navbar-expand-lg navbar-light container ">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold fs-4" href="#">
           <img src={Logo} alt="Logo" />
          </a>
            
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  Nav ">
             
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                About us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                Contact
                </a>
              </li>
            
            
            </ul> 
             <div className="Contact">
             <i className="fa-solid fa-phone-flip"></i> 
               
             <p>95-004-80-90 <br/>
94-641-40-00</p>
             </div>
         
          </div>
        </div>
      </nav> */}
<Navbar expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">   <img src={Logo} alt="Logo" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">   Products</Nav.Link>
        <Nav.Link href="#action2">About us</Nav.Link>
     
        <Nav.Link href="#" >
        Blog
        </Nav.Link>
        <Nav.Link href="#">
       Contact
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}
