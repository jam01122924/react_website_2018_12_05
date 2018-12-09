import React from 'react';
import './header.component.css';
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

class Header extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="header-container">
        <Navbar inverse collapseOnSelect className="header-bar">
          <Navbar.Header>
            <Navbar.Brand className="header-brand">
              <a href="/">COMPANY LOGO</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="/"><Link to="/" className="header-link">Home</Link></NavItem>
              <NavItem eventKey={2} href="/test"><Link to="/test" className="header-link">Test</Link></NavItem>
              <NavDropdown eventKey={3} title="Demo" id="demoDropDown">
                <MenuItem eventKey={3.1} href="/demo/animation">Animation</MenuItem>
                <MenuItem eventKey={3.2} href="/demo/snippets">Snippets</MenuItem>
                <MenuItem eventKey={3.3} href="/demo/charts">Charts</MenuItem>
                <MenuItem eventKey={3.4} href="/demo/d3">D3</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.5}>Others</MenuItem>
              </NavDropdown>
              <NavDropdown eventKey={4} title="Dropdown" id="dropdownDropDown">
                <MenuItem eventKey={4.1}>Action</MenuItem>
                <MenuItem eventKey={4.2}>Another action</MenuItem>
                <MenuItem eventKey={4.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={4.4}>Separated link</MenuItem>
              </NavDropdown>
              <NavItem eventKey={5} href="/snippets"><Link to="/snippets" className="header-link">Snippets</Link></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
