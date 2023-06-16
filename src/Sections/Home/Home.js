import React from "react";
import AOS from "aos";
import portfolioImageHome from "../../assets/images/portfolio-image-home.png";

function Home() {
  AOS.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 500,
    delay: 0,
    duration: 3000,
    easing: "ease",
    once: true,
    mirror: false,
    anchorPlacement: "top-bottom",
  });

  return (
    <div
      id="home"
      style={{ maxWidth: 1360, width: "100%", margin: "auto" }}
      className="md:pl-10 md:pr-10 sm:pl-10 pl-8 pr-8 pt-2"
    >
      <div className="sm:pt-40 pt-20">
        <div className="flex justify-around items-center sm:flex-row flex-col">
          <img data-aos="fade-right" src={portfolioImageHome} alt="home" className="w-96" />
          <div className="m-5">
            <p
              data-aos="fade-left"
              className="2xl:text-8xl md:text-4xl text-2xl text-red-600 font-bold pt-10 text-center"
            >
              Hello I'm Leandro
            </p>
            <p
              data-aos="fade-left"
              className="2xl:text-10xl md:text-5xl text-4xl text-white font-bold text-center"
            >
              React Native Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
