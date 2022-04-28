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
    <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#home">
    <img src={Logo} alt="Logo" />
    </Navbar.Brand>
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
    // <div className="Header ">
   
    //   <Navbar className="HeaderNavbar"  expand="lg"  >
    //     <Container fluid>
    //       <Navbar.Brand href="#home">
           
    //         <img src={Logo} alt="Logo" />
    //       </Navbar.Brand>
    //       <Navbar.Toggle aria-controls="navbarScroll" />
    //       <Navbar.Collapse  id="navbarScroll">
    //         <Nav  
    //           className="mx-auto  my-lg-0 me-5"
    //           style={{ maxHeight: "100px" }}
    //           navbarScroll
    //         >
    //           <Nav.Link    className="me-3" href="#product"> Products</Nav.Link>
    //           <Nav.Link className="me-3"  href="#about">About us</Nav.Link>

    //           <Nav.Link className="me-3"  href="#blog">Blog</Nav.Link>
    //           <Nav.Link className="me-3"  href="#contact">Contact</Nav.Link>
    //         </Nav>
    //         <Form className="d-flex mt-3 textGreen">
    //        <div className="phone me-2 ">
    //          <img src={Phone} alt="phone" />
    //        </div>
           
    //          <p>95-004-80-90 <br/>
    //          94-641-40-00</p>

    //         </Form>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    // </div>
  );
}
