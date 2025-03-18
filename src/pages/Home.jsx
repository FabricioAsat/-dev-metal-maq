import { Body } from "../components/body/Body";
import { Intro } from "../components/homePage/Intro";
import { IntroAboutUs } from "../components/homePage/IntroAboutUs";
import { IntroServices } from "../components/homePage/IntroServices";
import { IntroProducts } from "../components/homePage/IntroProducts";

export const Home = () => {
  return (
    <Body>
      <Intro />
      <IntroAboutUs />
      <IntroServices />
      <IntroProducts />
    </Body>
  );
};
