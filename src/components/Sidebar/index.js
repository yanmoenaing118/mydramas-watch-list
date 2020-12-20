import React from "react";
import {
  SidebarContainer,
  SidebarBtnWrapper,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
} from "./SidebarElements";
export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink href="/#korean" onClick={() => toggleSidebar()}>
            Korean
          </SidebarLink>
          <SidebarLink href="/#chinese" onClick={() => toggleSidebar()}>
            Chinese
          </SidebarLink>
          <SidebarLink href="/#thai" onClick={() => toggleSidebar()}>
            Thailand
          </SidebarLink>
          <SidebarLink href="/#dramas" onClick={() => toggleSidebar()}>
            Dramas
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrapper>
          <SidebarRoute href="/signin">Sign in</SidebarRoute>
        </SidebarBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
