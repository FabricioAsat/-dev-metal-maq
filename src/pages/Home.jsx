import { Body } from "../components/body/Body";
import { Intro } from "../components/homePage/Intro";
import { IntroAboutUs } from "../components/homePage/IntroAboutUs";

export const Home = () => {
  return (
    <Body>
      <Intro />
      <IntroAboutUs />
    </Body>
  );
};
