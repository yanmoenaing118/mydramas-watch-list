import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObject,
  homeObjectTwo,
  homeObjectThree,
} from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => setOpenSidebar(!openSidebar);

  return (
    <>
      <Sidebar isOpen={openSidebar} toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} isOpen={openSidebar} />
      <HeroSection />
      <InfoSection {...homeObject} />
      <InfoSection {...homeObjectTwo} />
      <InfoSection {...homeObjectThree} />
    </>
  );
}
