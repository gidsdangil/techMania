import React from 'react';
import {Navbar, Nav, NavbarBrand, NavItem, NavLink, NavbarToggler, Collapse} from 'reactstrap';
import {Link} from 'react-router-dom';

  export default class NavBar extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: true
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {    
      return (
        <Navbar light>
            <NavbarBrand href="/">Smart No Rescreen Bin </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" tabs>
                <NavItem>
                  <NavLink tag={Link} to="/">View</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/config">Config</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
        </Navbar>
      );
    }
  }