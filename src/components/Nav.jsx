import React, { useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

function NavButton(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="nav-button">
      <Navbar color="faded" light>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="Nav-items">
            <NavItem>
              <NavLink href="/components/" style={{ color: "white" }}>
                Components
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://github.com/reactstrap/reactstrap"
                style={{ color: "white" }}
              >
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavButton;
