import React from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand className='fw-bolder' href="#"><img style={{ width: '30px', height: '30px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" alt="" /> {' '}Microsoft</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='headhover' href="#action1">Microsoft 365</Nav.Link>
            <Nav.Link className='headhover' href="#action2">Teams</Nav.Link>
            <Nav.Link className='headhover' href="#action2">Copilot</Nav.Link>
            <Nav.Link className='headhover' href="#action2">Windows</Nav.Link>
            <Nav.Link className='headhover' href="#action2">Surface</Nav.Link>
            <Nav.Link className='headhover' href="#action2">Xbox</Nav.Link>
            <Nav.Link className='headhover' href="#action2">Support</Nav.Link>


          </Nav>

          <Form className="d-flex ">

            <NavDropdown className='me-4 headhover' title="All Microsoft" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Software</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Pc & Devices
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Other
              </NavDropdown.Item>
            </NavDropdown>

            <a style={{ textDecoration: 'none', color: 'black' }} href=""><i className="fa-solid fa-magnifying-glass fa-flip-horizontal ms-3 fa-lg"></i></a>
            <a style={{ textDecoration: 'none', color: 'black' }} href=""><i className="fa-solid fa-cart-shopping ms-3 fa-lg"></i></a>
            <a style={{ textDecoration: 'none', color: 'black' }} href=""><i className="fa-regular fa-user ms-3 fa-lg"></i></a>

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header