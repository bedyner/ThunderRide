import React, { useState, useRef } from "react";

import "../../css/DriverPickup.css";


import Avatar from "@mui/material/Avatar";

import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import CallIcon from '@mui/icons-material/Call';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';;

function DriverPickup() {
  const [online, setOnline] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);

  // Gesture drag (ปัดขึ้น/ลงเพื่อเปิด/ปิด panel)
  const handleDrag = (e) => {
    const panel = panelRef.current;
    if (!panel) return;

    const startY = e.clientY || e.touches[0].clientY;

    const move = (ev) => {
      const currentY = ev.clientY || ev.touches[0].clientY;
      const diff = currentY - startY;

      if (diff > 50) setPanelOpen(false);
      else if (diff < -50) setPanelOpen(true);
    };

    const end = () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", end);
      document.removeEventListener("touchmove", move);
      document.removeEventListener("touchend", end);
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", end);
    document.addEventListener("touchmove", move);
    document.addEventListener("touchend", end);
  };

  return (
    <div className="dashboard-container">
      {/* พื้นที่แผนที่ */}
      <div className="map-area">
        <div>[แผนที่แสดงตำแหน่งคนขับ]</div>
      </div>

      <div className="top-right-avatar">
        <Avatar
          alt="Somnam N."
          src="/static/images/avatar/1.jpg"
          sx={{ width: 55, height: 55 }}
        />
      </div>

      {/* แถบ pop-up ด้านล่าง */}
      <div
        ref={panelRef}
        className={`driver-panel ${panelOpen ? "open" : "closed"}`}
        onMouseDown={handleDrag}
        onTouchStart={handleDrag}
      >
        {/* สถานะออนไลน์ */}
        <div className="customer-status">
          <span className="customer">
           Customer
          </span>
        </div>

        {/* ข้อมูลลูกค้า */}
        <div className="customer-info">
          <div className="customer-card">
            <div className="avatar">
              <Avatar
                alt="ภคพงศ์"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 55, height: 55 }}
              />
            </div>
            <div className="customer-details">
              <h2>ภคพงศ์</h2>
              <p>095-XXXXXXX</p>
              <div className="customer-btn">
                <button className="decline-btn"  onClick={() => setPanelOpen(false)}>
                    Decline ride
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ปุ่มต่างๆ */}
        <div className="start-ride-section">
            <div className="actions-container">
                <button className="action-btn">
                    <span className="action-icon">
                    <ChatBubbleOutlinedIcon/>
                    </span>
                    <span className="action-label">Chat</span>
                </button>

                <button className="action-btn">
                    <span className="action-icon">
                    <CallIcon />
                    </span>
                    <span className="action-label">Call</span>
                </button>

                <button className="action-btn">
                    <span className="action-icon">
                    <CheckCircleIcon />
                    </span>
                    <span className="action-label">Check</span>
                </button>
            </div>
        </div>
            <div className="route-summary">
              <div className="pickup-section">
                <h3>Pick-up point</h3>
                <p className="route-detail">🕒 4 min &nbsp;&nbsp; 📍 0.8 km</p>
              </div>

              <div className="dropoff-section">
                <h3>Drop-off : MBK CENTER</h3>
                <p className="route-detail">🕒 15 min &nbsp;&nbsp; 📍 3.4 km</p>
                <button className="view-location-btn">View location</button>
              </div>
          </div>
          <div className="fare-summary">
            <p className="fare-label">Total fare</p>
            <p className="fare-amount">฿100.00</p>
          </div>
     </div>
    </div>
  );
}

export default DriverPickup;
