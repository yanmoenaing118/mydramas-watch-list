import React from "react";
import { Fade } from "react-reveal";
import { Button } from "../ButtonElements";
import Video from "./../../videos/video 2.mp4";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from "./HeroElements";

export default function HeroSection() {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop>
          <source src={Video} type="video/mp4" />
        </VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>
          <Fade top>The Dramas I have watched</Fade>
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
            Go to Dramas
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}
