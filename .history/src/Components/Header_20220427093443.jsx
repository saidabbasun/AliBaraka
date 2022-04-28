import React from 'react'
import '../Style/Header.scss'
import Logo from '../assets/Images/Frame.png';
import { Container, Navbar } from 'react-bootstrap';
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
<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
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
