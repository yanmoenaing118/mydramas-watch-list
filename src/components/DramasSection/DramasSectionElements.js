import styled from "styled-components";
import { Link } from "react-router-dom";

export const DramasContainer = styled.section`
  background-color: var(--color-gray-1);
  /* max-height: 800px; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13rem 0;

  @media screen and (max-width: 768px) {
    padding: 5rem 0;
  }
`;

export const DramasWrapper = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const DramasTitle = styled.h2`
  font-size: 48px;
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const DramaItems = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.2rem;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const DramaCard = styled.div`
  display: flex;
  max-height: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 1.1rem 1rem;
  border-radius: 8px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);

  &:hover > a {
    background-color: rgba(0, 225, 0, 0.2);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    color: var(--color-gray-3);
  }
`;

export const DramaLink = styled(Link)`
  margin-top: 1rem;
  text-decoration: none;
  color: var(--primary-color);
  transition: all 0.1s ease-in-out;
  padding: 0.8rem;
  border-radius: 4px;
  display: block;
`;

export const DramaIcon = styled.img`
  max-width: 180px;
  max-height: 110px;
  border-radius: 8px;
`;

export const DramaTitle = styled.p`
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  padding: 8px 0;
  color: #222;
`;

export const DramaSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  line-height: 1.4;
  padding: 4px 0;
  color: var(--color-gray-3);

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
