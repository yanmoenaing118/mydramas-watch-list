import React, { useState } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
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
  buttonLabel1,

  lightText,
  lightBg,
}) {
  const [myspy, setMyspy] = useState(false);
  const renderCols = () => {
    if (imgStart) {
      return (
        <>
          <Column1>
            <ImgWrapper>
              <Fade left>
                <Img src={img} />
              </Fade>
            </ImgWrapper>
          </Column1>
          <Column2>
            <TopLine>{topLine}</TopLine>
            <Heading lightText={lightText ? 1 : 0}>{headline}</Heading>
            <Subtitle lightText={lightText ? 1 : 0}>{description}</Subtitle>
            <BtnWrap>
              <Button primary={true}>
                <Link href="/">{buttonLabel1}</Link>
              </Button>
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
              <Button primary={true}>
                <Link href="/">{buttonLabel1}</Link>
              </Button>
            </BtnWrap>
          </Column1>
          <Column2>
            <ImgWrapper>
              <Fade right>
                <Img src={img} />
              </Fade>
            </ImgWrapper>
          </Column2>
        </>
      );
    }
  };
  return (
    <InfoContainer id={id} lightBg={lightBg ? 1 : 0}>
      <InfoWrapper onMouseEnter={(e) => setMyspy(!myspy)}>
        <InfoRow>{renderCols()}</InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
}
