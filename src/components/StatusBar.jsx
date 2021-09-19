import React from "react";
import StatusBarTopUser from "./StatusBarTopUser";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function StatusBar() {
  return (
    <div className="status-bar">
      <Button className="status-bar__button--question">
        <AddIcon />
        <span>New Question</span>
      </Button>
      <div className="status-bar__top-users">
        <h3 className="status-bar__top-users--title">Top Users</h3>
        <div className="status-bar__top-users--list">
          <StatusBarTopUser />
          <StatusBarTopUser />
          <StatusBarTopUser />
          <StatusBarTopUser />
          <StatusBarTopUser />
          <StatusBarTopUser />
          <StatusBarTopUser />
          <StatusBarTopUser />
          <StatusBarTopUser />
          <StatusBarTopUser />
        </div>
        <StatusBarTopUser />
      </div>
    </div>
  );
}

export default StatusBar;
