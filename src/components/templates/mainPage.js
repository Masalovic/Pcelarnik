// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { ParallaxProvider } from "react-scroll-parallax";
// import Navbar from "../atoms/navbar";
// import HomeSection from "../organisms/homeSection";

// const useScrollToSection = () => {
//   const location = useLocation();

//   useEffect(() => {
//     const hash = location.hash;

//     const scrollToElement = () => {
//       if (hash) {
//         const id = hash.replace("#", "");
//         const element = document.getElementById(id);

//         if (element) {
//           element.scrollIntoView({ behavior: "smooth" });
//         } else {
//           setTimeout(scrollToElement, 100);
//         }
//       }
//     };

//     scrollToElement();
//   }, [location]);
// };

// export default function MainPage() {
//   useScrollToSection();
//   return (
//     <ParallaxProvider>
//       <div className="main-page">
//         <div className="navbar">
//           <Navbar />
//         </div>

//         <section id="home">
//           <HomeSection />
//         </section>
//       </div>
//     </ParallaxProvider>
//   );
// }
