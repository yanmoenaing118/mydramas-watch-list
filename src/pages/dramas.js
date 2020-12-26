import React from "react";
import BreadCamp from "../components/BreadCamp";
import DramasList from "../components/DramasList";
import kdramas from "./../components/DramasList/kdramas_data";
import cdramas from "./../components/DramasList/cdramas_data";
import tdramas from "./../components/DramasList/tdramas_data";

export default function DramasPage({ title }) {
  let dramas = [];
  if (title === "korean") {
    dramas = [...kdramas];
  } else if (title === "chinese") {
    dramas = [...cdramas];
  } else if (title === "thailand") {
    dramas = [...tdramas];
  }
  return (
    <>
      <BreadCamp />
      <DramasList title={title} dramas={dramas} />
    </>
  );
}
