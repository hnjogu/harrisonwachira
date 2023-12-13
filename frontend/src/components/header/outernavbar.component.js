import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'
import Container from "react-bootstrap/Container"


export default class Outernavbar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">News Web</Navbar.Brand>
                    <Nav className="me-auto">
                        {/* <Nav.Link href="/">Home</Nav.Link> */}
                        <Nav.Link href="/sign-in">Sign In</Nav.Link>
                        <Nav.Link href="/sign-up">Sign Up</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
         {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
      </div>
    )
  }
}