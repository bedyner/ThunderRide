import React, { useState } from "react";
import "../../css/ChatMenu.css";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MessageIcon from "@mui/icons-material/QuestionAnswer";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PhotoIcon from "@mui/icons-material/Photo";
import DescriptionIcon from "@mui/icons-material/Description";

function ChatMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="chat-menu-container">
      {/* ปุ่มเปิดเมนู */}
      <IconButton onClick={toggleMenu} className="menu-toggle-button">
        <AddCircleOutlineIcon fontSize="large" />
      </IconButton>

      {/* เมนูที่แสดงเมื่อเปิด */}
      {menuOpen && (
        <div className="chat-menu-popup">
          <div className="chat-menu-item">
            <MessageIcon className="chat-menu-icon" />
            <span>ข้อความอัตโนมัติ</span>
          </div>
          <div className="chat-menu-item">
            <CameraAltIcon className="chat-menu-icon" />
            <span>กล้อง</span>
          </div>
          <div className="chat-menu-item">
            <PhotoIcon className="chat-menu-icon" />
            <span>รูปภาพ</span>
          </div>
          <div className="chat-menu-item">
            <DescriptionIcon className="chat-menu-icon" />
            <span>ดูสรุป</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatMenu;
