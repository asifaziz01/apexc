import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Navbar, Nav, Container} from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header>
    <Navbar expand="lg" className="shadow">
      <Container>
        <Navbar.Brand href="#">Apex Coachings</Navbar.Brand>
        <Nav>
          <Nav.Link href="#login" className="btn btn-primary">Sign-In</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
