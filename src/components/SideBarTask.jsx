import React from "react";
import Button from "@mui/material/Button";

function SideBarTask({ icon, title }) {
  return (
    <Button className="side-bar__task">
      <div className="side-bar__task--icon">{icon}</div>
      <div className="side-bar__task--title">{title}</div>
    </Button>
  );
}

export default SideBarTask;
