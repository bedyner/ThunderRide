import React from "react";
import "../../css/ProfileScreen.css";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import BarChartIcon from "@mui/icons-material/BarChart";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

function ProfileScreen() {
  const menuItems = [
    {
      icon: <PersonOutlineIcon />,
      title: "Profile",
      subtitle: "Profile informations",
    },
    {
      icon: <BarChartIcon />,
      title: "Statistics",
      subtitle: "Check Statistic",
    },
    {
      icon: <LockOutlinedIcon />,
      title: "Security",
      subtitle: "Account password and stuffs",
    },
    {
      icon: <PaymentOutlinedIcon />,
      title: "Payments",
      subtitle: "Manage payments",
    },
    {
      icon: <HistoryOutlinedIcon />,
      title: "History",
      subtitle: "Check your previous rides",
    },
    {
      icon: <LogoutIcon />,
      title: "Log out",
      subtitle: "Log out from your account",
    },
  ];

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="avatar-wrapper">
          <Avatar sx={{ width: 80, height: 80 }} />
          <IconButton className="edit-icon">
            <EditIcon />
          </IconButton>
        </div>
        <div className="profile-name">name</div>
      </div>

      <div className="profile-section-title">Personal Info</div>

      <div className="profile-menu">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <div className="menu-icon">{item.icon}</div>
            <div className="menu-text">
              <div className="menu-title">{item.title}</div>
              <div className="menu-subtitle">{item.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileScreen;
