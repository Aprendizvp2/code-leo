import React, { cloneElement, useState } from "react";
import PropTypes from "prop-types";
import { AppBar, IconButton, useScrollTrigger } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import portfolioIconSmallWhite from "../assets/icons/portfolio-icon-small-white.png";
import portfolioIconSmall from "../assets/icons/portfolio-icon-small.png";
import MenuDrawer from "./MenuDrawer";
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

export default function SmallHeader(props) {
  const [openMenuDrawer, setOpenMenuDrawer] = useState(false);

  const handleOpenMenuDrawer = () => {
    setOpenMenuDrawer(!openMenuDrawer);
  };

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
                <img
                  src={portfolioIconSmallWhite}
                  className="w-12"
                  alt="icon"
                />
                <div>
                  <MenuDrawer
                    open={openMenuDrawer}
                    toggleMenuDrawer={handleOpenMenuDrawer}
                  />
                  <IconButton onClick={handleOpenMenuDrawer}>
                    <MenuIcon className="text-white" />
                  </IconButton>
                </div>
              </div>
            </AppBar>
          </ScrollColor>
        ) : (
          <ScrollColor>
            <AppBar
              className="2xl:pl-20 2xl:pr-20 md:pl-10 md:pr-10 pl-8 pr-8 pt-3 pb-3"
              position="fixed"
              elevation={0}
            >
              <div className="flex justify-between items-center">
                <img
                  src={portfolioIconSmall}
                  className="w-12"
                  alt="icon"
                />
                <div>
                  <MenuDrawer
                    open={openMenuDrawer}
                    toggleMenuDrawer={handleOpenMenuDrawer}
                  />
                  <IconButton onClick={handleOpenMenuDrawer}>
                    <MenuIcon className="text-red-700" />
                  </IconButton>
                </div>
              </div>
            </AppBar>
          </ScrollColor>
        )}
      </ElevationScroll>
    </>
  );
}
