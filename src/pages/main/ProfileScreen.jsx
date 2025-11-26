import React from "react";
import { useNavigate } from "react-router-dom";
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
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function ProfileScreen() {
  const navigate = useNavigate();
  
  const menuItems = [
    {
      icon: <PersonOutlineIcon />,
      title: "Profile",
      subtitle: "Profile informations",
      colorClass: "icon-green",
    },
    {
      icon: <BarChartIcon />,
      title: "Statistics",
      subtitle: "Check Statistic",
      colorClass: "icon-yellow",
    },
    {
      icon: <LockOutlinedIcon />,
      title: "Security",
      subtitle: "Account password and stuffs",
      colorClass: "icon-blue",
    },
    {
      icon: <PaymentOutlinedIcon />,
      title: "Payments",
      subtitle: "Manage payments",
      colorClass: "icon-purple",
    },
    {
      icon: <HistoryOutlinedIcon />,
      title: "History",
      subtitle: "Check your previous rides",
      colorClass: "icon-cyan",
    },
    {
      icon: <PaymentOutlinedIcon />,
      title: "Manage bank accounts & cards",
      subtitle: "Manage your payment methods",
      colorClass: "icon-orange",
    },
  ];

  return (
    <div className="profile-container">
      <div className="back-button">
        <IconButton onClick={() => navigate('/dashboard')}>
          <ArrowBackIcon />
        </IconButton>
      </div>
      <div className="profile-header">
        <div className="avatar-wrapper">
          <Avatar sx={{ width: 80, height: 80 }} />
          <IconButton className="edit-icon">
            <EditIcon />
          </IconButton>
        </div>
        <div className="profile-name">ภคพงศ์</div>
      </div>

      <div className="profile-section-title">Personal Info</div>

      <div className="profile-menu">
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            className={`menu-item ${item.title === "Log out" ? "logout-item" : ""}`}
            onClick={() => {
              if (item.title === "Statistics") {
                navigate('/expense-stats');
              } else if (item.title === "Profile") {
                navigate('/profile');
              }
            }}
            style={{ cursor: (item.title === "Statistics" || item.title === "Profile") ? 'pointer' : 'default' }}
          >
            <div className={`menu-icon ${item.colorClass}`}>
              {item.icon}
            </div>
            <div className="menu-text">
              <div className="menu-title">{item.title}</div>
              <div className="menu-subtitle">{item.subtitle}</div>
            </div>
            <div className="menu-arrow">
              <ChevronRightIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileScreen;
