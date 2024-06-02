import "../../styles/organisms/homeSection.scss";
import TextBlock from "../atoms/textBlock";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "../atoms/navbar";

const HomeSection = () => {
  return (
    <div className="home-section">
      <Navbar />
      <Parallax pages={1.5} style={{ top: "70px", left: "0" }} className="animation">
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="background"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="dark"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.65}>
          <div className="animation_layer parallax" id="medium"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.55}>
          <div className="animation_layer parallax" id="light"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.9} speed={0.25}>
          <TextBlock />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default HomeSection;
