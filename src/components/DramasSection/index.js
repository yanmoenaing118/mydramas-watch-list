import React from "react";
import { Fade } from "react-reveal";
import Icon1 from "./../../images/cloy.jpg";
import Icon2 from "./../../images/lar.jpeg";
import Icon3 from "./../../images/mhil.jpg";
import {
  DramasContainer,
  DramasWrapper,
  DramasTitle,
  DramaItems,
  DramaCard,
  DramaIcon,
  DramaTitle,
  DramaSubtitle,
  DramaLink,
} from "./DramasSectionElements";
export default function Dramas() {
  return (
    <DramasContainer id="dramas">
      <DramasWrapper>
        <DramasTitle>My watch list</DramasTitle>
        <DramaItems>
          <Fade bottom delay={500}>
            <DramaCard>
              <DramaIcon src={Icon1} />
              <DramaTitle>Korean Dramas</DramaTitle>
              <DramaSubtitle>
                The stories and the plots are really awesome.
              </DramaSubtitle>
              <DramaLink to="/dramas/kdramas">View Kdramas</DramaLink>
            </DramaCard>
          </Fade>

          <Fade bottom delay={1000}>
            <DramaCard>
              <DramaIcon src={Icon2} />
              <DramaTitle>Chinese Dramas</DramaTitle>
              <DramaSubtitle>
                The romance between the casts is far beyond anything.
              </DramaSubtitle>
              <DramaLink to="/dramas/cdramas">View Kdramas</DramaLink>
            </DramaCard>
          </Fade>

          <Fade bottom delay={1500}>
            <DramaCard>
              <DramaIcon src={Icon3} />
              <DramaTitle>Thailand Dramas</DramaTitle>
              <DramaSubtitle>
                The stories and the plots are really awesome.
              </DramaSubtitle>
              <DramaLink to="/dramas/tdramas">View Kdramas</DramaLink>
            </DramaCard>
          </Fade>
        </DramaItems>
      </DramasWrapper>
    </DramasContainer>
  );
}