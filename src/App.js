import React from "react";
import "./App.css";
import HomeSection from "./components/organisms/homeSection";
import VideoSection from "./components/organisms/videoSection";

function App() {
  return (
    <div className="App">
      <section>
        <HomeSection />
      </section>
      <section>
        <VideoSection />
      </section>
    </div>
  );
}

export default App;
