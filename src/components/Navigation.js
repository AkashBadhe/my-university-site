import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';


const Navigation = ({ siteTitle }) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#"><Link to="/">Home</Link></Navbar.Brand>
    <Nav className="mr-auto">
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>

)

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
