import React from "react";

import {
  DramasListContainer,
  DramasListWrapper,
  BreadCampWrapper,
  DramasListInfoWrapper,
  DramasListH1,
  DramasListP,
  SearchIconWrapper,
  SearchIcon,
  DramasWrapper,
  DramaCard,
  DramaPicture,
  DramaTitle,
  DramaRating,
  DramaRatingText,
  DramaRatingStars,
  Star,
  DramaLinkWrapper,
  DramaLink,
} from "./DramasListElements";

export default function DramasList({ title, dramas }) {
  const dramasContent = dramas.map((drama) => (
    <DramaCard>
      <DramaPicture src={drama.picture} />
      <DramaTitle>{drama.title}</DramaTitle>
      <DramaRating>
        <DramaRatingText>my rating</DramaRatingText>
        <DramaRatingStars>
          <Star size="15px" fill={1 ? "gold" : "gray"} />
          <Star size="15px" fill={1 ? "gold" : "gray"} />
          <Star size="15px" fill={1 ? "gold" : "gray"} />
          <Star size="15px" fill={1 ? "gold" : "gray"} />
          <Star size="15px" fill={1 ? "gold" : "gray"} />
        </DramaRatingStars>
      </DramaRating>
      <DramaLinkWrapper>
        <DramaLink>C-L-O-Y Details</DramaLink>
      </DramaLinkWrapper>
    </DramaCard>
  ));
  return (
    <DramasListContainer>
      <DramasListWrapper>
        <BreadCampWrapper></BreadCampWrapper>
        <DramasListInfoWrapper>
          <DramasListH1>Korean dramas</DramasListH1>
          <DramasListP>A list of {title} dramas I have watched</DramasListP>
          <SearchIconWrapper>
            <SearchIcon fill="var(--color-gray-3)" />
          </SearchIconWrapper>
        </DramasListInfoWrapper>

        <DramasWrapper>{dramasContent}</DramasWrapper>
      </DramasListWrapper>
    </DramasListContainer>
  );
}
