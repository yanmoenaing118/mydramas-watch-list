import React, { useEffect, useState } from "react";
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
  const [transparent, setTransparent] = useState(true);
  const handleNavbar = (e) => {
    if (window.scrollY > 240) {
      setTransparent(false);
    } else {
      setTransparent(true);
    }
  };
  window.addEventListener("scroll", handleNavbar);
  return (
    <Nav isTransparent={transparent}>
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
            <NavLink href="/#dramas">Dramas</NavLink>
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
