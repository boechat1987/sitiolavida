import React from "react";
import {Link} from "react-router-dom";
import "./styles.css";

/* import { ReactComponent as Logo } from "../../assets/sitio-la-vida.svg"; */

export default function bootstrapMenu() {
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  /* // toggler icon click event
  navToggler.addEventListener('onClick', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick)); */
}

// togglerClick function
function togglerClick() {
  /* navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open'); */
}

// navLinkClick function
function navLinkClick() {
  /* if(navMenu.classList.contains('open')) {
    navToggler.click();
  } */
}
  return (
    <header class="header-area">
  <div class="navbar-area">
    <div class="container">
      <nav class="site-navbar">
        <ul><li><Link to="#home" class="site-logo">logo</Link></li></ul>
        <ul>
          <li><Link to="#">Acomodações</Link></li>
          <li><Link href="#">Celebrações</Link></li>
          <li><Link href="#">Destino</Link></li>
          <li><Link href="#">Lazer</Link></li>
          <li><Link href="#">Contato</Link></li>
          <li><Link href="#">Quem somos</Link></li>
        </ul>
      </nav>
    </div>
  </div>
</header>
  );
}
