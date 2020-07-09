import React, { useState } from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link} from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <Link className={"mx-3 link"} to="/restoran">Logo</Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link className={"mx-3 link"} to="/about">About</Link>
                        </NavItem>
                        <NavItem>
                            <Link className={"mx-3 link"} to="/menu">Menu</Link>
                        </NavItem>
                        <NavItem>
                            <Link className={"mx-3 link"} to="/contact">Contact</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;