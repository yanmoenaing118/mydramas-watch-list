import React from "react";
import BreadCamp from "../components/BreadCamp";
import DramasList from "../components/DramasList";
import { dramas_list } from "./../components/DramasList/Dramas";

export default function DramasPage({ title }) {
  let dramas = [];
  if (title === "korean") {
    dramas = [...dramas_list.korean];
  } else if (title === "chinese") {
    dramas = [...dramas_list.chinese];
  } else if (title === "thailand") {
    dramas = [...dramas_list.thailand];
  }
  return (
    <>
      <BreadCamp />
      <DramasList title={title} dramas={dramas} />
    </>
  );
}
