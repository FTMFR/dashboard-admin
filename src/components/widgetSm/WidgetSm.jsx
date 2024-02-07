import React from "react";
import "./widgetSm.scss";
import { VisibilityOffOutlined } from "@mui/icons-material";
import { newMembers } from "../../datas";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Users</span>
      <ul className="widgetSmList">
        {newMembers.map((user) => (
          <li className="widgetSmListItem">
            <img src="images/npm.png" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">{user.userName}</span>
              <span className="widgetSmUserTitle">{user.title}</span>
            </div>
            <button className="widgetSmButton">
              <VisibilityOffOutlined className="widgetSmIcon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
