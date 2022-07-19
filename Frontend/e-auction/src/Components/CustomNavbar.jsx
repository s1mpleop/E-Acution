import React, { useState } from 'react';
import { NavLink as ReactLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} color ="dark" dark expand="md" >
        <NavbarBrand >Auction App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/sellers">Sellers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/products">Products</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Buyer Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink style={{color: 'black'}} tag={ReactLink} to="/buyers" >Byers</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink style={{color: 'black'}} tag={ReactLink} to="/bids" >Bids</NavLink>
                </DropdownItem>
                
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;