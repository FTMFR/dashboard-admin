import React from "react";
import { Link } from "react-router-dom";
import "./sideBar.css";
import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutlined,
  MessageOutlined,
  PermIdentity,
  Storefront,
  Timeline,
  TrendingUp,
} from "@mui/icons-material";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Dashboard</h3>
          <ul className="sideBarList">
            <Link className="link" to="/">
              <li className="sideBarListItem active">
                <LineStyle className="sideBarIcon" />
                Home
              </li>
            </Link>
            <li className="sideBarListItem">
              <Timeline className="sideBarIcon" />
              Analytics
            </li>
            <li className="sideBarListItem">
              <TrendingUp className="sideBarIcon" />
              Sales
            </li>
          </ul>
        </div>

        {/* 
        QUICK MENU
        */}
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Quick Menu</h3>
          <ul className="sideBarList">
            <Link className="link" to="/users">
              <li className="sideBarListItem active">
                <PermIdentity className="sideBarIcon" />
                Users
              </li>
            </Link>
            <Link className="link" to="/newUser">
              <li className="sideBarListItem">
                <Storefront className="sideBarIcon" />
                New User
              </li>
            </Link>
            <Link className="link" to="/products">
              <li className="sideBarListItem">
                <AttachMoney className="sideBarIcon" />
                Products
              </li>
            </Link>
            <li className="sideBarListItem">
              <BarChart className="sideBarIcon" />
              Transaction
            </li>
            <li className="sideBarListItem">
              <MailOutlined className="sideBarIcon" />
              Reports
            </li>
          </ul>
        </div>

        {/* 
        Notifications
        */}
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Notifications</h3>
          <ul className="sideBarList">
            <Link className="link" to="">
              <li className="sideBarListItem active">
                <DynamicFeed className="sideBarIcon" />
                Mail
              </li>
            </Link>
            <li className="sideBarListItem">
              <MailOutlined className="sideBarIcon" />
              New User
            </li>
            <li className="sideBarListItem">
              <AttachMoney className="sideBarIcon" />
              Products
            </li>
            <li className="sideBarListItem">
              <ChatBubbleOutline className="sideBarIcon" />
              Feedback
            </li>
            <li className="sideBarListItem">
              <MessageOutlined className="sideBarIcon" />
              Messages
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
