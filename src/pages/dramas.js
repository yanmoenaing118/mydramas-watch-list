import React from "react";
import DramasList from "../components/DramasList";

const dramas = [
  {
    title: "Crash Landing On You",
    picture: require("./../images/cloy.jpg").default,
    rating: 5,
  },
  {
    title: "Love and Redemption",
    picture: require("./../images/lar.jpeg").default,
    rating: 5,
  },

  {
    title: "My Husband In Law",
    picture: require("./../images/mhil.jpg").default,
    rating: 5,
  },

  {
    title: "Love and Redemption",
    picture: require("./../images/lar.jpeg").default,
    rating: 5,
  },
  {
    title: "Crash Landing On You",
    picture: require("./../images/cloy.jpg").default,
    rating: 5,
  },
  {
    title: "Love and Redemption",
    picture: require("./../images/lar.jpeg").default,
    rating: 5,
  },

  {
    title: "My Husband In Law",
    picture: require("./../images/mhil.jpg").default,
    rating: 5,
  },

  {
    title: "Love and Redemption",
    picture: require("./../images/lar.jpeg").default,
    rating: 5,
  },
];

export default function DramasPage({ title }) {
  return (
    <>
      <DramasList title={title} dramas={dramas} />
    </>
  );
}
