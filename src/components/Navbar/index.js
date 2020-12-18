import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  Signin,
} from "./NavbarElements";

const Navbar = ({ toggleSidebar, isOpen }) => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo href="/#home">dramas</NavLogo>
        <MobileIcon onClick={toggleSidebar}>
          {isOpen ? (
            <AiOutlineClose size="22px" />
          ) : (
            <AiOutlineMenu size="22px" />
          )}
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink href="/#korean">Korean</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/#chinese">Chinese</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/#thai">Thailand</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/#drmas">Dramas</NavLink>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <Signin href="/signin">Sign in</Signin>
        </NavBtn>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
