import React, { useState } from "react";
import Phone from "../images/icons8-phone-20.png";
import Mail from "../images/icons8-important-mail-20.png";

import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    // <div>
    //   <div className="contact-address">
    //     <a href="#" className="phone m-2 p-2">
    //       <img src={Phone} alt="problem" />
    //       +(91) 9090909090{" "}
    //     </a>
    //     <a href="#" className="mail m-2 p-2">
    //       <img src={Mail} alt="problem" /> inquiry@deepakdeepz.com
    //     </a>
    //   </div>

    <Navbar light expand="lg" className="nav-bar">
      <Container className="themed-container" fluid="md" className="container">
        <NavbarBrand href="/" className="nav-brand">
          Reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar className="nav-item ml-auto">
            <NavItem>
              <NavLink href="/components/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
    // </div>
  );
};

export default Example;
