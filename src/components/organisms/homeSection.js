import "../../styles/organisms/homeSection.scss";
import TextBlock from "../atoms/textBlock";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const HomeSection = () => {
  return (
    <div className="home-section">
      <Parallax pages={2} style={{ top: "0", left: "0" }} class="animation">
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="background"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div class="animation_layer parallax" id="dark"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.65}>
          <div class="animation_layer parallax" id="medium"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.55}>
          <div class="animation_layer parallax" id="light"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.25}>
          <TextBlock />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default HomeSection;
