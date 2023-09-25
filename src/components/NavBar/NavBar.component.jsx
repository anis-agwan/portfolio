import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./NavBar.style.css";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #121212;
  }
  a,
  .navbar-nav,
  .navbar-dark .nav-link {
    color: #e0e0e0;
    &:hover {
      color: #aeea00;
    }
  }

  .navbar-brand {
    font-size: 1em;
    color: #e0e0e0;
    &:hover {
      color: #aeea00;
    }
  }
  .navbar-toggle-icon {
    background-image: url("data:image/svg+xml;");
    color: #e0e0e0;
  }
`;

const NavBar = () => {
  return (
    <>
      <Styles>
        <Navbar
          fixed="top"
          collapseOnSelect
          expand="md"
          variant="dark"
          className="animate-navbar nav-theme justify-content-between"
        >
          <Navbar.Brand href="#home" className="brand">
            Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About Me</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    </>
  );
};

export default NavBar;
