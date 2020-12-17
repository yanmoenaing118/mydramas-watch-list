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
        <NavLogo to="home">dramas</NavLogo>
        <MobileIcon onClick={toggleSidebar}>
          {isOpen ? (
            <AiOutlineClose size="22px" />
          ) : (
            <AiOutlineMenu size="22px" />
          )}
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink to="/about">Korean</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/discover">Chinese</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/services">Thailand</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/about">About</NavLink>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <Signin to="/signin">Sign in</Signin>
        </NavBtn>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
