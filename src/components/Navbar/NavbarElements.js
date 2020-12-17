import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  font-family: var(--secondary-font);
  /* background-color: var(--primary-color); */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  margin-top: -100px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;
  /* box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1), 0 2px 5px rgba(0, 0, 0, 0.2); */

  @media screen and (max-width: 768px) {
    height: 60px;
  }
`;

export const NavContainer = styled.div`
  width: 100%;
  max-width: 1110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLogo = styled(LinkS)`
  text-decoration: none;
  color: var(--white);
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-left: 24px;
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-style: italic;
  position: relative;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 3.5px;
    background-color: var(--white);
    transform: translateX(3px) skew(14deg);
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    width: 70px;
    height: 60px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-gray-3);
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-left: -80px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 70px;
  margin-bottom: -4px;
`;

export const NavLink = styled(LinkS)`
  color: var(--white);
  font-size: 1rem;
  font-weight: 600;
  padding: 0 24px;
  height: 67px;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: border-bottom 0.1s ease-in;
  border-bottom: 4px solid transparent;
  cursor: pointer;

  &:hover {
    /* color: lightgreen; */
    border-bottom: 4px solid #fff;
  }
  &.active {
    border-bottom: 4px solid #ccc;
  }
`;

export const NavBtn = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Signin = styled(LinkR)`
  text-decoration: none;
  padding: 8px 36px;
  border-radius: 5px;
  background-color: var(--primary-color);
  color: var(--white);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
`;
