import React, { Component } from "react";
import "components/pageNav.scss";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import Logo from "assets/icons/logo192.png";

export default class PageNav extends Component {
  render() {
    return (
      <>
        <style type="text/css">
          {`
    .navbar {
        background-image: linear-gradient(
            to right,
            #d95b1f,
            #b42b2d,
            #923755,
            #2c848a
          );
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
        </style>

        <div className="pageNav">
          <Navbar bg="dark" variant="dark" expand="sm">
            <Navbar.Brand href="/">
              <img src={Logo} width="40" />
              <h3>TUAN LE</h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </>
    );
  }
}
