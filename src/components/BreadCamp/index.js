import React from "react";

import {
  BreadCampContainer,
  BreadCampWrapper,
  BreadCampItems,
  BreadCampLink,
  BreadCampItem,
} from "./BreadCampElements";

export default function BreadCamp() {
  return (
    <BreadCampContainer>
      <BreadCampWrapper>
        <BreadCampItems>
          <BreadCampItem pos="left">
            <BreadCampLink to="/">Home</BreadCampLink>
          </BreadCampItem>
          <BreadCampItem>
            <BreadCampLink to="/dramas/kdramas">Korean</BreadCampLink>
          </BreadCampItem>
          <BreadCampItem>
            <BreadCampLink to="/dramas/cdramas">Chinese</BreadCampLink>
          </BreadCampItem>
          <BreadCampItem>
            <BreadCampLink to="/dramas/tdramas">Thailand</BreadCampLink>
          </BreadCampItem>
        </BreadCampItems>
      </BreadCampWrapper>
    </BreadCampContainer>
  );
}
