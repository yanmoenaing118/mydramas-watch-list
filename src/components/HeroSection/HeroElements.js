import styled from "styled-components";
const bgImage = require("./../../images/lar-1.jpeg").default;

export const HeroContainer = styled.section`
  position: relative;
  z-index: 1;
  height: 760px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  background-image: url(${bgImage});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  &::before {
    content: "";
    position: absolute;
    z-index: 4;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(55, 62, 52);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.7) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;

export const HeroContent = styled.div`
  position: relative;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 5;
  color: var(--white);
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
`;

export const HeroH1 = styled.h1`
  font-size: 40px;
  margin-left: 24px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  margin-left: 24px;
  font-size: 28px;
  position: relative;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 36px;
  margin-left: 24px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
`;
