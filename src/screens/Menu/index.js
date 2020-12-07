import React from "react";
import "./styles.css";
import { Nav, Navbar } from "react-bootstrap";
import { ReactComponent as Logo } from "../../assets/sitio-la-vida.svg";

export default function bootstrapMenu() {
  return (
    <Navbar className="menu" collapseOnSelect expand="lg" bg="light" variant="outline-light">
      <Navbar.Brand href="/">
        <Logo
          alt=""
          width="20"
          height="20"
          className="d-inline-block align-top"
        />
        {/* <Navbar.Text>Malha RJNF</Navbar.Text> */}
        Sítio La Vida
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" >Acomodações</Nav.Link>
          <Nav.Link href="/">Lazer</Nav.Link>
          <Nav.Link href="/">Celebrações</Nav.Link>
          <Nav.Link href="/">Destino</Nav.Link>
          <Nav.Link href="/">Quem somos</Nav.Link>
          <Nav.Link href="/">Contato</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
