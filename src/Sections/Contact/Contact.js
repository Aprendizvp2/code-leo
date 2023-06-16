import React from "react";
import AOS from "aos";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

function Contact() {
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
      id="contact"
      data-aos="zoom-in"
      className="pt-20 sm:pb-20 pb-10 2xl:pl-20 2xl:pr-20 md:pl-10 md:pr-10 sm:pl-10 pl-8 pr-8"
    >
      <p className="2xl:text-10xl md:text-5xl text-4xl text-white font-bold">
        Contact
      </p>
      <div className="flex justify-center mt-10">
        <a href="https://www.facebook.com/leandronava.2000?mibextid=ZbWKwL/">
          <FacebookOutlinedIcon
            sx={{
              width: 50,
              height: 50,
              color: "white",
              transition: "transform 0.3s ease-in-out",
              margin: 1,
              ":hover": {
                color: "#B91C1C",
                transform: "translateY(-5px)",
              },
            }}
          />
        </a>
        <a href="https://github.com/Aprendizvp2">
          <GitHubIcon
            sx={{
              width: 50,
              height: 50,
              color: "white",
              transition: "transform 0.3s ease-in-out",
              margin: 1,
              ":hover": {
                color: "#B91C1C",
                transform: "translateY(-5px)",
              },
            }}
          />
        </a>
        <a href="mailto:leandro10161999@gmail.com">
          <EmailRoundedIcon
            sx={{
              width: 50,
              height: 50,
              color: "white",
              transition: "transform 0.3s ease-in-out",
              margin: 1,
              ":hover": {
                color: "#B91C1C",
                transform: "translateY(-5px)",
              },
            }}
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;
