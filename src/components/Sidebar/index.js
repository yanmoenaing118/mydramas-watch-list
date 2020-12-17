import React from "react";
import {
  SidebarContainer,
  SidebarBtnWrapper,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
} from "./SidebarElements";
export default function Sidebar({ isOpen }) {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="discover">Discover</SidebarLink>
          <SidebarLink to="services">Services</SidebarLink>
          <SidebarLink to="register">Register</SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrapper>
          <SidebarRoute href="/signin">Sign in</SidebarRoute>
        </SidebarBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
