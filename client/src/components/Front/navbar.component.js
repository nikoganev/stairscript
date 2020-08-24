import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  Navbar, Nav  }from 'react-bootstrap';
import '../../App.css';

export default class NavFront extends Component {

  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" className="pt-0" style={{zIndex:"1",opacity:"0.75"}}>


          <Navbar.Brand href="/" className="text-white" style={{fontSize:"1.5rem"}}>StairScript</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="ml-auto">
              <Link to="/login" className="nav-link text-white" style={{fontSize:"1.25rem"}}>Login</Link>
              <Link to="/register" className="nav-link text-white" style={{fontSize:"1.25rem"}}>Register</Link>
            </Nav>
          </Navbar.Collapse>


      </Navbar>



    );
  }
}
