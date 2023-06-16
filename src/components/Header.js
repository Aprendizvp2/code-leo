import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import { AppBar, useScrollTrigger } from "@mui/material";
import portfolioIcon from "../assets/icons/portfolio-icon.png";
import portfolioIconWhite from "../assets/icons/portfolio-icon-white.png";
import ScrollColor from "./ScrollColor";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Header(props) {
  const { window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return (
    <>
      <ElevationScroll {...props}>
        {trigger ? (
          <ScrollColor>
            <AppBar
              className="2xl:pl-20 2xl:pr-20 md:pl-10 md:pr-10 pl-8 pr-8 pt-3 pb-3"
              position="fixed"
              color="transparent"
              elevation={0}
            >
              <div className="flex justify-between items-center">
                <img src={portfolioIconWhite} className="w-20" alt="icon" />
                <div>
                  <a
                    className="text-white hover:text-black hover:bg-white p-3 rounded text-lg m-6 transition duration-300 ease-in-out"
                    href="#home"
                  >
                    Home
                  </a>
                  <a
                    className="text-white hover:text-black hover:bg-white p-3 rounded text-lg m-6 transition duration-300 ease-in-out"
                    href="#skills"
                  >
                    Skills
                  </a>
                  <a
                    className="text-white hover:text-black hover:bg-white p-3 rounded text-lg m-6 transition duration-300 ease-in-out"
                    href="#contact"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </AppBar>
          </ScrollColor>
        ) : (
          <ScrollColor>
            <AppBar
              className="2xl:pl-20 2xl:pr-20 md:pl-10 md:pr-10 pl-8 pr-8 pt-3 pb-3"
              position="fixed"
              color="transparent"
              elevation={0}
            >
              <div className="flex justify-between items-center">
                <img src={portfolioIcon} className="w-20" alt="icon" />
                <div>
                  <a
                    className="text-white hover:text-red-700 hover:bg-white p-3 rounded text-lg m-6 transition duration-300 ease-in-out"
                    href="#home"
                  >
                    Home
                  </a>
                  <a
                    className="text-white hover:text-red-700 hover:bg-white p-3 rounded text-lg m-6 transition duration-300 ease-in-out"
                    href="#skills"
                  >
                    Skills
                  </a>
                  <a
                    className="text-white hover:text-red-700 hover:bg-white p-3 rounded text-lg m-6 transition duration-300 ease-in-out"
                    href="#contact"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </AppBar>
          </ScrollColor>
        )}
      </ElevationScroll>
    </>
  );
}
