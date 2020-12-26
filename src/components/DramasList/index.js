import React from "react";
import { extractLink } from "../../utils/utils";
import Zoom from "react-reveal/Zoom";

import {
  DramasListContainer,
  DramasListWrapper,
  DramasListInfoWrapper,
  DramasListH1,
  DramasListP,
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
  const dramasContent = dramas.map((drama) => {
    let detailLink = extractLink(drama.title);
    return (
      <Zoom key={drama.title} center>
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
            <DramaLink>{detailLink} Details</DramaLink>
          </DramaLinkWrapper>
        </DramaCard>
      </Zoom>
    );
  });
  return (
    <>
      <DramasListContainer>
        <DramasListWrapper>
          <DramasListInfoWrapper>
            <DramasListH1>The {title} dramas</DramasListH1>
            <DramasListP>
              The list of {title} dramas I have watched.{" "}
            </DramasListP>
          </DramasListInfoWrapper>

          <DramasWrapper>{dramasContent}</DramasWrapper>
        </DramasListWrapper>
      </DramasListContainer>
    </>
  );
}
