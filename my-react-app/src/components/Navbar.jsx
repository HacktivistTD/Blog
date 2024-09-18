import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
    < div className='py-0 xl:py-12'>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img 
            className="d-inline-block align-top"
            src='/1.png'
            alt="logo"
            style={{ height: '100px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Row className="w-100">
            
            <Col xs={12} md={4} className="d-flex justify-content-md-end justify-content-center align-items-right">
              <Nav>
                <Nav.Link href="/write-article" className="text-warning fw-bold">Write Your Idea</Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;
