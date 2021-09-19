import React from "react";
import Avatar from "@mui/material/Avatar";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

function StatusBarTopUser() {
  return (
    <div className="top-users">
      <div className="top-users__avatar-name">
        <Avatar
          alt="Remy Sharp"
          src="https://cafefcdn.com/thumb_w/650/203337114487263232/2021/8/28/photo1630119914849-16301199150061205830569.jpg"
          sx={{ width: 45, height: 45 }}
        />
        <div className="top-users__name">
          <span className="top-users__name--real-name">Ronaldo</span>
          <span className="top-users__name--user-name">@cristiano</span>
        </div>
      </div>
      <div className="top-users__rate">
        <span className="top-users__rate--count">40</span>
        <ArrowUpwardRoundedIcon />
      </div>
    </div>
  );
}

export default StatusBarTopUser;
