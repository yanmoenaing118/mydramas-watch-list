import React from "react";
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
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop>
          <source src={Video} type="video/mp4" />
        </VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>The Dramas I have watched</HeroH1>
        <HeroP>
          I have been drugged down into the world of asian dramas since the
          start of Covid-19. Since then, I have watched a lot of dramas from
          South Korea, China (mostly ancient dramas) and Thailand.
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
