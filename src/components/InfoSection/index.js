import React from "react";
import { Button } from "./../ButtonElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  BtnWrap,
  Column2,
  ImgWrapper,
  Img,
  Heading,
  TopLine,
  Subtitle,
} from "./InfoElements";
export default function InfoSection({
  id,
  img,
  imgStart,
  topLine,
  headline,
  description,
  buttonLabel,
  lightText,
  lightBg,
}) {
  const renderCols = () => {
    if (imgStart) {
      return (
        <>
          <Column1>
            <ImgWrapper>
              <Img src={img} />
            </ImgWrapper>
          </Column1>
          <Column2>
            <TopLine>{topLine}</TopLine>
            <Heading lightText={lightText ? 1 : 0}>{headline}</Heading>
            <Subtitle lightText={lightText ? 1 : 0}>{description}</Subtitle>
            <BtnWrap>
              <Button primary={true}>{buttonLabel}</Button>
            </BtnWrap>
          </Column2>
        </>
      );
    } else {
      return (
        <>
          <Column1>
            <TopLine>{topLine}</TopLine>
            <Heading lightText={lightText ? 1 : 0}>{headline}</Heading>
            <Subtitle lightText={lightText ? 1 : 0}>{description}</Subtitle>
            <BtnWrap>
              <Button primary={true}>{buttonLabel}</Button>
            </BtnWrap>
          </Column1>
          <Column2>
            <ImgWrapper>
              <Img src={img} />
            </ImgWrapper>
          </Column2>
        </>
      );
    }
  };
  return (
    <InfoContainer id={id} lightBg={lightBg ? 1 : 0}>
      <InfoWrapper>
        <InfoRow>{renderCols()}</InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
}
