import React from 'react';
import navHeader from '../images/nav-header.png';
import spiderLogo from '../images/spider-logo.png';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function BootNav({ currPage, setCurrPage }) {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container id='nav-container'>
            <Navbar.Brand as="div">
                <img
                    width="auto"
                    height="30"
                    className="align-top spider-logo"
                    src={spiderLogo}
                    alt="Workflow"
                  />
                  <img
                    width="auto"
                    height="30"
                    className="align-top full-logo"
                    src={navHeader}
                    alt="Workflow"
                  />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    <Nav.Link href="#aboutme" onClick={() => setCurrPage('AboutMe')}>About Me</Nav.Link>
                    <Nav.Link href="#portfolio" onClick={() => setCurrPage('portfolio')}>Portfolio</Nav.Link>
                    <Nav.Link href="#resume" onClick={() => setCurrPage('resume')}>Resume</Nav.Link>
                    <Nav.Link href="#contact" onClick={() => setCurrPage('contact')}>Contact Me</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
};
