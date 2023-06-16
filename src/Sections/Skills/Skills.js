import React from "react";
import AOS from "aos";
import { Card, Typography } from "@mui/material";
import porfolioIconJavascript from "../../assets/icons/portfolio-icon-javascript.png";
import porfolioIconReactJS from "../../assets/icons/portfolio-icon-react-js.png";
import porfolioIconReactNative from "../../assets/icons/portfolio-icon-react-native.png";
import porfolioIconRedux from "../../assets/icons/portfolio-icon-redux.png";
import porfolioIconTailwind from "../../assets/icons/portfolio-icon-tailwind.png";
import porfolioIconTypescript from "../../assets/icons/portfolio-icon-typescript.png";

const dataSkills = [
  { id: 1, skill: "Javascript", logo: porfolioIconJavascript },
  { id: 2, skill: "React JS", logo: porfolioIconReactJS },
  { id: 3, skill: "React Native", logo: porfolioIconReactNative },
  { id: 4, skill: "Redux", logo: porfolioIconRedux },
  { id: 5, skill: "Tailwind", logo: porfolioIconTailwind },
  { id: 6, skill: "Typescript", logo: porfolioIconTypescript },
];

function Skills() {
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
      id="skills"
      className="sm:pt-40 pt-20 sm:pb-20 pb-10 2xl:pl-20 2xl:pr-20 md:pl-10 md:pr-10 sm:pl-10 pl-8 pr-8"
    >
      <p
        data-aos="fade-in"
        data-aos-duration="1500"
        className="2xl:text-10xl md:text-5xl text-4xl text-white font-bold"
      >
        Skills
      </p>
      <div data-aos="fade-up" className="grid 2xl:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-x-4 gap-y-4 flex sm:flex-row flex-col mt-5">
        {dataSkills.map((e) => (
          <Card
            key={e.id}
            className="w-full"
            sx={{
              transition: "transform 0.3s ease-in-out",
              backgroundColor: "rgb(38 38 38)",
              ":hover": {
                transform: "translateY(-5px)",
              },
            }}
          >
            <div className="flex flex-row items-center p-5">
              <img src={e.logo} alt="javascript" className="mr-5 w-10" />
              <Typography variant="h6" className="text-white">
                {e.skill}
              </Typography>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Skills;
