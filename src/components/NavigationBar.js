import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function NavigationBar() {
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = event.target.elements.keyword.value.trim();

    if (keyword) {
      navigate(`/search?keyword=${keyword}`);
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Movies App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
          <Nav.Link as={Link} to="/popular" className="nav-link-custom">Popular</Nav.Link>
          <Nav.Link as={Link} to="/top-rated" className="nav-link-custom">Top Rated</Nav.Link>
          <Nav.Link as={Link} to="/upcoming" className="nav-link-custom">Upcoming</Nav.Link>
        </Nav>
        <Form onSubmit={handleSearch}>
          <Row className="align-items-center">
            <Col xs={8}>
              <FormControl type="text" name="keyword" placeholder="Search" className="mr-sm-2 w-100" />
            </Col>
            <Col xs={4}>
              <Button variant="outline-success" type="submit">Search</Button>
            </Col>
          </Row>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
