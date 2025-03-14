import { Body } from "../components/body/Body";
import { Intro } from "../components/homePage/Intro";
import { IntroAboutUs } from "../components/homePage/IntroAboutUs";
import { IntroServices } from "../components/homePage/IntroServices";

export const Home = () => {
  return (
    <Body>
      <Intro />
      <IntroAboutUs />
      <IntroServices />
    </Body>
  );
};
