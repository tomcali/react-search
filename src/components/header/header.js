import React, {Component} from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap';

export default class Header extends Component {
	render(){
		return (
				<div className='header'>
					<Navbar inverse collapseOnSelect>
				    <Navbar.Header>
				      <Navbar.Brand>
				        <a href="#">Web Search App</a>
				      </Navbar.Brand>
				      <Navbar.Toggle />
				    </Navbar.Header>
				    <Navbar.Collapse>
				      <Nav pullRight>
				        <NavItem href="#"></NavItem> // nav item possible
				        <NavItem href="#"></NavItem>  // nav item possible
				      </Nav>
				    </Navbar.Collapse>
				  </Navbar>
				</div>
			)
	}
}