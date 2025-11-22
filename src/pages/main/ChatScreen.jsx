import React, { useState } from "react";
import "../../css/ChatScreen.css";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CallIcon from "@mui/icons-material/Call";
import SendIcon from "@mui/icons-material/Send";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import QrCodeScannerOutlinedIcon from '@mui/icons-material/QrCodeScannerOutlined';

function ChatScreen() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "ฉันกำลังเดินทางไปหาคุณ!", sender: "user" },
    { text: "โอเคค่ะ", sender: "other" },
  ]);

  const autoMessages = [
    "ฉันกำลังเดินทางไปหาคุณ!",
    "ฉันใกล้ถึงแล้ว!",
    "ฉันกำลังเดินทางไปหาคุณอีกครั้ง!",
  ];

  const sendAutoMessage = (text) => {
    setMessages([...messages, { text, sender: "user" }]);
    setMenuOpen(false);
  };

  const sendQRSummary = () => {
    const travelCard = {
      type: "card",
      name: "ภคพงศ์",
      amount: 100,
    };
    setMessages([...messages, { sender: "user", card: travelCard }]);
    setMenuOpen(false);
  };

  return (
    <div className="chat-container">
      {/* Header */}
      <div className="chat-header">
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
        <div className="chat-profile">
          <Avatar sx={{ width: 40, height: 40 }} />
          <span className="chat-name">ภคพงศ์</span>
        </div>
        <IconButton>
          <CallIcon />
        </IconButton>
      </div>

      {/* Chat body */}
      <div className="chat-body">
        {messages.map((msg, index) =>
          msg.card ? (
            <div key={index} className="chat-card user">
              <div className="card-title">ค่าเดินทาง</div>
              <div className="card-row">
                    <div className="card-name">{msg.card.name}</div>
                    <div className="card-amount">{msg.card.amount}</div>
              </div>
              <div className="card-button">QR Code</div>
            </div>
          ) : (
            <div key={index} className={`chat-bubble ${msg.sender}`}>
              {msg.text}
            </div>
          )
        )}
      </div>

      {/* Chat input */}
      <div className="chat-input">
        <div className="chat-menu-wrapper">
          <IconButton onClick={() => setMenuOpen(!menuOpen)}>
            <AddCircleOutlinedIcon />
          </IconButton>

          {menuOpen && (
            <div className="chat-menu-popup">
              <div className="chat-menu-item" onClick={() => setMenuOpen("auto")}>
                <span>Automatic Messages</span>
                <MessageOutlinedIcon className="chat-menu-icon" />
              </div>
              <div className="chat-menu-item">
                <span>Camera</span>
                <CameraAltOutlinedIcon className="chat-menu-icon" />
              </div>
              <div className="chat-menu-item">
                <span>Photos</span>
                <InsertPhotoOutlinedIcon className="chat-menu-icon" />
              </div>
              <div className="chat-menu-item" onClick={sendQRSummary}>
                <span>QR Summary</span>
                <QrCodeScannerOutlinedIcon className="chat-menu-icon" />
              </div>
            </div>
          )}

          {menuOpen === "auto" && (
            <div className="auto-message-popup">
              <div className="auto-message-title">* Automatic Messages *</div>
              {autoMessages.map((msg, i) => (
                <div key={i} className="auto-message-item" onClick={() => sendAutoMessage(msg)}>
                  {msg}
                </div>
              ))}
            </div>
          )}
        </div>

        <input type="text" placeholder="พิมพ์ข้อความ..." />
        <IconButton>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatScreen;
