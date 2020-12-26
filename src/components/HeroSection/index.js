import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { Button } from "../ButtonElements";

import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from "./HeroElements";

export default function HeroSection() {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroH1>
          <Fade top>Drama Heaven</Fade>
        </HeroH1>
        <HeroP>
          <Fade bottom>
            I have been drugged down into the world of asian dramas since the
            start of Covid-19. Since then, I have watched a lot of dramas from
            South Korea, China (mostly ancient dramas) and Thailand.
          </Fade>
        </HeroP>
        <HeroBtnWrapper>
          <Button primary big bigFont>
            <Link to="/dramas/kdramas">Go to dramas</Link>
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}
