import React from "react";
import SideBarTask from "./SideBarTask";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import ContactSupportRoundedIcon from "@mui/icons-material/ContactSupportRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";

function SideBar() {
  return (
    <div className="side-bar">
      <SideBarTask icon={<HomeRoundedIcon />} title={"Home"} />
      <SideBarTask icon={<ExploreRoundedIcon />} title={"Explore Questions"} />
      <SideBarTask
        icon={<ContactSupportRoundedIcon />}
        title={"My Questions"}
      />
      <SideBarTask icon={<QuestionAnswerRoundedIcon />} title={"My Answers"} />
    </div>
  );
}

export default SideBar;
