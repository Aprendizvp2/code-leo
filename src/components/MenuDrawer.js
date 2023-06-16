import React from "react";
import { Drawer, IconButton, Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function MenuDrawer({ open, toggleMenuDrawer }) {
  return (
    <Drawer anchor="right" open={open} onClick={toggleMenuDrawer}>
      <Paper sx={{ backgroundColor: "black", height: "100%", borderRadius: 0 }}>
        <div className="items-start p-3">
          <IconButton onClose={toggleMenuDrawer}>
            <ArrowBackIcon className="text-white" />
          </IconButton>
        </div>
        <div className="flex flex-col items-center pl-16 pr-16">
          <a className="text-white hover:text-red-700 text-xl m-6" href="#home">
            Home
          </a>
          <a
            className="text-white hover:text-red-700 text-xl m-6"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="text-white hover:text-red-700 text-xl m-6"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </Paper>
    </Drawer>
  );
}
