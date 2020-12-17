import styled from "styled-components";

export const InfoContainer = styled.section`
  width: 100%;
  background-color: ${({ lightBg }) =>
    lightBg ? "var(--color-gray-1)" : "var(--color-gray-3)"};
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const InfoWrapper = styled.div`
  max-width: 1110px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding: 10rem 24px;

  @media screen and (max-width: 768px) {
    padding: 8rem 24px;
  }

  @media screen and (max-width: 480px) {
    padding: 5rem 24px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: "col1 col2";
  align-items: center;

  grid-column-gap: 24px;

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
`;

export const Column2 = styled.div`
  grid-area: col2;
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
`;

export const Img = styled.img`
  width: 90%;
  height: auto;
  outline: 3px solid var(--primary-color);
  outline-offset: 24px;

  @media screen and (max-width: 768px) {
    outline-offset: 16px;
  }

  @media screen and (max-width: 480px) {
    outline-offset: 10px;
  }
`;

export const TopLine = styled.p`
  color: var(--primary-color);
  font-size: 24px;
  text-transform: uuppercase;
  font-weight: 600;
  margin-bottom: 16px;
  margin-top: 28px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Heading = styled.h1`
  font-size: 48px;
  margin-bottom: 30px;
  color: ${({ lightText }) =>
    lightText ? "var(--color-gray-0)" : "var(--color-gray-3)"};

  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 24px;
  }
`;

export const Subtitle = styled.p`
  color: ${({ lightText }) =>
    lightText ? "var(--color-gray-0)" : "var(--color-gray-3)"};
  font-size: 18px;
  line-height: 1.7;
  letter-spacing: 0.3px;
`;

export const BtnWrap = styled.div`
  margin-top: 38px;
  margin-bottom: 28px;
`;
