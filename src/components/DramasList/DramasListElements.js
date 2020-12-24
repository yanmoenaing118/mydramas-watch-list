import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export const DramasListContainer = styled.div`
  background-color: var(--color-gray-1);
  width: 100%;
`;

export const DramasListWrapper = styled.div`
  width: 100%;
  max-width: 1110px;
  padding: 24px 0;
  margin-left: auto;
  margin-right: auto;
`;

export const DramasListInfoWrapper = styled.div`
  position: relative;
  padding: 0 24px;
`;

export const DramasListH1 = styled.h1`
  font-size: 43px;
  font-style: normal;
  font-weight: 400;
  line-height: 54px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--primary-color);
  margin: 8px 0;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const DramasListP = styled.p`
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  font-weight: normal;
  color: var(--color-gray-3);

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const DramasWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: 2rem;
  margin-top: 2rem;
  padding: 0 24px;
`;

export const DramaCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;

  padding: 1rem;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  background-color: var(--white);
`;

export const DramaPicture = styled.img`
  width: 80%;
  height: auto;
  border-radius: 5px;
`;

export const DramaTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: var(--color-gray-3);
  text-align: center;
  margin-top: 0.6rem;
`;

export const DramaRating = styled.div`
  text-align: center;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0.4rem 0;
`;

export const DramaRatingText = styled.div`
  text-transform: uppercase;
  margin-right: 1rem;
`;

export const DramaRatingStars = styled.div``;

export const Star = styled(FaStar)``;

export const DramaLinkWrapper = styled.div`
  text-align: center;
`;

export const DramaLink = styled(Link)`
  text-decoration: none;
  color: var(--primary-color);
  display: block;
  padding: 0.4rem 0;
`;
