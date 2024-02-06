import React from "react";
import "./topBar.scss";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topBarIconContainer">
            <NotificationsNoneIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topBarIconContainer">
            <SettingsIcon />
          </div>

          <img src="images/npm.png" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
