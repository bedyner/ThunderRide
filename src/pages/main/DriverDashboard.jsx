import React, { useState, useRef, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import "../../css/DriverDashboard.css";

import Switch from "@mui/material/Switch";
import Avatar from "@mui/material/Avatar";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";

function DriverDashboard() {
  const [online, setOnline] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [showSearching, setShowSearching] = useState(false);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const [showAcceptPopup, setShowAcceptPopup] = useState(false);
  const panelRef = useRef(null);

   const navigate = useNavigate();

  const toggleOnline = () => {
    setOnline(!online);
  };

  useEffect(() => {
    let timer;
    if (online) {
      timer = setTimeout(() => {
        setShowSearching(true);
      }, 2000);
    } else {
      setShowSearching(false);
      setShowAcceptPopup(false);
    }
    return () => clearTimeout(timer);
  }, [online]);

  useEffect(() => {
    let acceptTimer;
    if (showSearching) {
      acceptTimer = setTimeout(() => {
        setShowAcceptPopup(true);
      }, 5000);
    } else {
      setShowAcceptPopup(false);
    }
    return () => clearTimeout(acceptTimer);
  }, [showSearching]);

  const handleDrag = (e) => {
    const panel = panelRef.current;
    if (!panel) return;
    const startY = e.clientY || e.touches[0].clientY;

    const move = (ev) => {
      const currentY = ev.clientY || ev.touches[0].clientY;
      const diff = currentY - startY;
      if (diff > 50) {
        setPanelOpen(false);
      } else if (diff < -50) {
        setPanelOpen(true);
      }
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

      <div
        ref={panelRef}
        className={`driver-panel ${panelOpen ? "open" : "closed"}`}
        onMouseDown={handleDrag}
        onTouchStart={handleDrag}
      >
        <div className="status-floating">
          <span className="status-label">
            {online ? "Online" : "Tap to go online"}
          </span>
          <Switch checked={online} onChange={toggleOnline} color="success" />
        </div>

        <div className="driver-info">
          <div className="driver-card">
            <div className="avatar">
              <Avatar
                alt="Somnam N."
                src="/static/images/avatar/1.jpg"
                sx={{ width: 55, height: 55 }}
              />
            </div>
            <div className="driver-details">
              <h2>Somnam N.</h2>
              <p>095-XXXXXXX</p>
              <div className="driver-rating">
                <p>⭐ 4.9</p>
              </div>
            </div>
          </div>
        </div>

        <div className="vehicle-info">
          <div className="cardetail">
            <h1>Honda CIVIC</h1>
            <h4>black</h4>
            <p>กข 1234</p>
          </div>
        </div>
      </div>

      {showSearching && (
        <div className="searching-overlay">
          <div className="searching-popup">
            <div className="close" onClick={() => setShowCancelConfirm(true)}>
              <span className="icon">
                <CloseIcon />
              </span>
            </div>
            <p>Searching...</p>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <CircularProgress />
            </Box>
          </div>
        </div>
      )}

      {showCancelConfirm && (
        <div className="cancel-overlay">
          <div className="cancel-popup">
            <div className="cancel-buttons">
              <button
                className="keep-btn"
                onClick={() => setShowCancelConfirm(false)}
              >
                Keep ride
              </button>
              <button
                className="cancel-btn"
                onClick={() => {
                  setShowCancelConfirm(false);
                  setShowSearching(false);
                  setOnline(false);
                }}
              >
                Cancel pickup
              </button>
            </div>
            <p className="cancel-message">
              Are you sure you want to cancel this pickup?
            </p>
          </div>
        </div>
      )}

      {showAcceptPopup && (
        <div className="accept-overlay">
          <div className="accept-popup">
            <p className="accept-name">ภคพงศ์</p>
            <p className="accept-distance">0.8 km</p>
            <button className="accept-btn"  onClick={() => navigate("/driver-pickup")}>
              Accept
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DriverDashboard;
