import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../../css/DriverDashboard.css";
import "../../css/DriverPickup.css";
import "../../css/ChatScreen.css";

import Switch from "@mui/material/Switch";
import Avatar from "@mui/material/Avatar";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import CallIcon from '@mui/icons-material/Call';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SendIcon from "@mui/icons-material/Send";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import QrCodeScannerOutlinedIcon from '@mui/icons-material/QrCodeScannerOutlined';
import IconButton from "@mui/material/IconButton";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
import CarImg from "../../images/car_honda.png";

function DriverDashboard() {
  const [online, setOnline] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [showSearching, setShowSearching] = useState(false);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const [showAcceptPopup, setShowAcceptPopup] = useState(false);
  const [isRideActive, setIsRideActive] = useState(false);
  
  // Chat State
  const [showChat, setShowChat] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    { text: "สวัสดีครับ ฉันกำลังเดินทางไปหาคุณ !", sender: "user" },
    { text: "ค่ะ", sender: "other" },
  ]);

  // Pickup/Dropoff Status
  const [pickupCompleted, setPickupCompleted] = useState(false);
  const [dropoffCompleted, setDropoffCompleted] = useState(false);
  const [showPickupPopup, setShowPickupPopup] = useState(false);
  const [showDropoffPopup, setShowDropoffPopup] = useState(false);
  const [showSlideConfirm, setShowSlideConfirm] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [sliderCompleted, setSliderCompleted] = useState(false);

  const autoMessages = [
    "ฉันกำลังเดินทางไปหาคุณ !",
    "ฉันใกล้ถึงแล้ว !",
    "ฉันกำลังเดินทางไปหาคุณอีกครั้ง !",
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

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, sender: "user" }]);
      setInputText("");
    }
  };

  const handleCheckClick = () => {
    if (!pickupCompleted) {
      setShowPickupPopup(true);
    } else if (!dropoffCompleted) {
      setShowDropoffPopup(true);
    }
  };

  const handlePickupConfirm = () => {
    setPickupCompleted(true);
    setShowPickupPopup(false);
  };

  const handleDropoffConfirm = () => {
    setDropoffCompleted(true);
    setShowDropoffPopup(false);
  };

  const handleSlideComplete = () => {
    setSliderCompleted(true);
    // Wait a moment to show the completed state before closing
    setTimeout(() => {
      // Reset everything and go back to dashboard
      setIsRideActive(false);
      setPickupCompleted(false);
      setDropoffCompleted(false);
      setShowSlideConfirm(false);
      setSliderPosition(0);
      setSliderCompleted(false);
    }, 500);
  };

  const panelRef = useRef(null);
  const sliderRef = useRef(0);
  const navigate = useNavigate();
  
  const toggleOnline = () => {
    setOnline(!online);
  };

  useEffect(() => {
    let timer1, timer2;
    if (online && !isRideActive) {
      timer1 = setTimeout(() => {
        setShowSearching(true);
        timer2 = setTimeout(() => {
          setShowAcceptPopup(true);
        }, 5000);
      }, 2000);
    } else {
      setShowSearching(false);
      setShowAcceptPopup(false);
    }
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [online, isRideActive]);

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
      {/* =========================================
          SECTION 1: Chat Screen (Conditional)
          ========================================= 
          This section is rendered when 'showChat' is true.
          It replaces the entire dashboard view.
      */}
      {showChat ? (
        <div className="chat-container" style={{ height: '100%', background: '#fff' }}>
          {/* Header */}
          <div className="chat-header">
            <IconButton onClick={() => setShowChat(false)}>
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

            <input
              type="text"
              placeholder="พิมพ์ข้อความ..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <IconButton onClick={handleSendMessage}>
              <SendIcon />
            </IconButton>
          </div>
        </div>
      ) : (
        <>
          {/* =========================================
              SECTION 2: Map Area
              ========================================= 
          */}
          <div className="top-left-back-btn" onClick={() => navigate("/")}>
            <ArrowBackIosNewIcon />
          </div>
          <div className="map-area">
            <div>[แผนที่แสดงตำแหน่งคนขับ]</div>
          </div>

          {/* =========================================
              SECTION 3: Top Right Avatar
              ========================================= 
          */}
          <div className="top-right-avatar" onClick={() => navigate('/driver-profile')} style={{ cursor: 'pointer' }}>
            <Avatar
              alt="Somnam N."
              src="/static/images/avatar/1.jpg"
              sx={{ width: 55, height: 55 }}
            />
          </div>

          {/* =========================================
              SECTION 4: Draggable Panel
              ========================================= 
              Contains either the Dashboard Info or the Pickup Info
          */}
          <div
            ref={panelRef}
            className={`driver-panel ${panelOpen ? "open" : "closed"}`}
            onMouseDown={handleDrag}
            onTouchStart={handleDrag}
          >
            {!isRideActive ? (
              <>
                {/* --- Sub-section: Driver Dashboard Info --- */}
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
                      <h2>Somnam N.</h2> <p>095-XXXXXXX</p>
                      <div className="driver-rating">
                        <p>⭐ 4.9</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="vehicle-info">
                  <img src={CarImg} alt="Vehicle" className="vehicle-img" />
                  <div className="cardetail">
                    <h1>Honda CIVIC</h1> <h4>black</h4> <p>กข 1234</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* --- Sub-section: Pickup Info (Active Ride) --- */}
                <div className="customer-status">
                  <span className="customer">Customer</span>
                </div>

                <div className="customer-info">
                  <div className="customer-card">
                    <div className="avatar">
                      <Avatar alt="ภคพงศ์" src="/static/images/avatar/1.jpg" sx={{ width: 55, height: 55 }} />
                    </div>
                    <div className="customer-details">
                      <h2>ภคพงศ์</h2>
                      <p>095-XXXXXXX</p>
                    </div>
                    {!pickupCompleted && (
                      <div className="customer-btn">
                        <button className="decline-btn" onClick={() => setIsRideActive(false)}>Decline ride</button>
                      </div>
                    )}
                    {dropoffCompleted && (
                      <div className="customer-btn">
                        <button className="confirm-btn" onClick={() => setShowSlideConfirm(true)}>Confirm</button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="start-ride-section">
                  <div className="actions-container">
                    <button className="action-btn" onClick={() => setShowChat(true)}>
                      <span className="action-icon"><ChatBubbleOutlinedIcon /></span>
                      <span className="action-label">Chat</span>
                    </button>
                    {/* Clicking Call opens the Chat Screen as requested */}
                    <button className="action-btn" onClick={() => setShowChat(true)}>
                      <span className="action-icon"><CallIcon /></span>
                      <span className="action-label">Call</span>
                    </button>
                    <button className="action-btn" onClick={handleCheckClick}>
                      <span className="action-icon"><CheckCircleIcon /></span>
                      <span className="action-label">Check</span>
                    </button>
                  </div>
                </div>

                <div className="route-summary">
                  <div className="route-visual">
                    <div className={`circle top ${pickupCompleted ? 'filled' : ''}`}></div>
                    <div className="line"></div>
                    <div className={`circle bottom ${dropoffCompleted ? 'filled' : ''}`}></div>
                  </div>

                  <div className="route-details">
                    <div className="pickup-section">
                      <h3>Pick-up point</h3>
                      <p className="route-detail">
                        <AccessTimeIcon sx={{ fontSize: 16, marginRight: '4px' }} /> 4 min 
                        <PlaceIcon sx={{ fontSize: 16, marginLeft: '8px', marginRight: '4px' }} /> 0.8 km
                      </p>
                    </div>

                    <div className="dropoff-section">
                      <h3>Drop-off : MBK CENTER</h3>
                      <p className="route-detail">
                        <AccessTimeIcon sx={{ fontSize: 16, marginRight: '4px' }} /> 15 min 
                        <PlaceIcon sx={{ fontSize: 16, marginLeft: '8px', marginRight: '4px' }} /> 3.4 km
                      </p>
                      <button className="view-location-btn">View location</button>
                    </div>
                  </div>
                </div>

                <div className="fare-summary">
                  <p className="fare-label">Total fare :</p>
                  <p className="fare-amount">฿100.00</p>
                </div>
              </>
            )}
          </div>

          {/* =========================================
              SECTION 5: Overlays (Searching, Accept, Cancel)
              ========================================= 
          */}
          {showSearching && (
            <div className="searching-overlay">
              <div className="searching-popup">
                <div
                  className="close"
                  onClick={() => {
                    setShowSearching(false);
                    setShowAcceptPopup(false);
                    setOnline(false);
                  }}
                >
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
          {showAcceptPopup && (
            <div className="accept-overlay">
              <div className="accept-popup">
                {/* ปุ่ม Close มุมบนขวา */}
                <div className="close" onClick={() => {
                  // ปิด accept-popup ก่อน แล้วเปิด cancel-confirm
                  setShowAcceptPopup(false);
                  setShowCancelConfirm(true);
                }}>
                  <span className="icon">
                    <CloseIcon />
                  </span>
                </div>

                <div className="accept-avatar">
                  <Avatar alt="ภคพงศ์" src="/static/images/avatar/2.jpg" sx={{ width: 60, height: 60 }} />
                </div>
                <div className="accept-details">
                  <h2>ภคพงศ์</h2>
                  <p className="distance">0.8 km</p>
                </div>
                <button className="accept-btn" onClick={() => {
                  setShowAcceptPopup(false);
                  setShowSearching(false);
                  setIsRideActive(true);
                }}>Accept</button>
              </div>
            </div>
          )}

          {/* Cancel Confirm */}
          {showCancelConfirm && (
            <div className="cancel-overlay">
              <div className="cancel-popup">
                <p className="cancel-message">
                  Are you sure you want to cancel this pickup?
                </p>
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
                      setShowAcceptPopup(false);
                      setOnline(false);
                    }}
                  >
                    Sure
                  </button>
                </div>

              </div>

            </div>
          )}

          {/* =========================================
              SECTION 6: Pickup Confirmation Popup
              ========================================= 
          */}
          {showPickupPopup && (
            <div className="pickup-overlay">
              <div className="pickup-popup">
                <h2 className="pickup-title">You've arrived at the pickup point</h2>
                <p className="pickup-subtitle">Have you picked up the passenger?</p>
                <div className="pickup-buttons">
                  <button className="not-yet-btn" onClick={() => setShowPickupPopup(false)}>Not yet</button>
                  <button className="picked-up-btn" onClick={handlePickupConfirm}>Picked up</button>
                </div>
              </div>
            </div>
          )}

          {/* Dropoff Confirmation Popup */}
          {showDropoffPopup && (
            <div className="pickup-overlay">
              <div className="pickup-popup">
                <h2 className="pickup-title">You've arrived at the drop-off point</h2>
                <p className="pickup-subtitle">Have you dropped off the passenger?</p>
                <div className="pickup-buttons">
                  <button className="not-yet-btn" onClick={() => setShowDropoffPopup(false)}>Not yet</button>
                  <button className="picked-up-btn" onClick={handleDropoffConfirm}>Dropped off</button>
                </div>
              </div>
            </div>
          )}

          {/* Slide to Confirm Popup */}
          {showSlideConfirm && (
            <div className="pickup-overlay">
              <div className="slide-confirm-popup">
                <h2 className="slide-title">Complete this ride?</h2>
                <div className="slide-container">
                  <div className={`slide-track ${sliderCompleted ? 'completed' : ''}`}>
                    <div 
                      className="slide-button"
                      onMouseDown={(e) => {
                        const button = e.currentTarget;
                        const track = button.parentElement;
                        const startX = e.clientX;
                        const startLeft = sliderPosition;

                        const handleMouseMove = (moveEvent) => {
                          const deltaX = moveEvent.clientX - startX;
                          const newPosition = Math.max(0, Math.min(startLeft + deltaX, track.offsetWidth - button.offsetWidth));
                          sliderRef.current = newPosition;
                          setSliderPosition(newPosition);
                        };

                        const handleMouseUp = (upEvent) => {
                          const maxPosition = track.offsetWidth - button.offsetWidth;
                          const finalPosition = sliderRef.current;
                          
                          if (finalPosition >= maxPosition * 0.8) {
                            setSliderPosition(maxPosition); // Snap to end
                            handleSlideComplete();
                          } else {
                            setSliderPosition(0);
                            sliderRef.current = 0;
                          }
                          document.removeEventListener('mousemove', handleMouseMove);
                          document.removeEventListener('mouseup', handleMouseUp);
                        };

                        document.addEventListener('mousemove', handleMouseMove);
                        document.addEventListener('mouseup', handleMouseUp);
                      }}
                      onTouchStart={(e) => {
                        const button = e.currentTarget;
                        const track = button.parentElement;
                        const startX = e.touches[0].clientX;
                        const startLeft = sliderPosition;

                        const handleTouchMove = (moveEvent) => {
                          const deltaX = moveEvent.touches[0].clientX - startX;
                          const newPosition = Math.max(0, Math.min(startLeft + deltaX, track.offsetWidth - button.offsetWidth));
                          sliderRef.current = newPosition;
                          setSliderPosition(newPosition);
                        };

                        const handleTouchEnd = () => {
                          const maxPosition = track.offsetWidth - button.offsetWidth;
                          const finalPosition = sliderRef.current;
                          
                          if (finalPosition >= maxPosition * 0.8) {
                            setSliderPosition(maxPosition); // Snap to end
                            handleSlideComplete();
                          } else {
                            setSliderPosition(0);
                            sliderRef.current = 0;
                          }
                          document.removeEventListener('touchmove', handleTouchMove);
                          document.removeEventListener('touchend', handleTouchEnd);
                        };

                        document.addEventListener('touchmove', handleTouchMove);
                        document.addEventListener('touchend', handleTouchEnd);
                      }}
                      style={{ left: `${sliderPosition}px` }}
                    >
                      <span className="slide-arrow">›</span>
                    </div>
                    <span className="slide-text">Slide to confirm</span>
                  </div>
                </div>
                <button className="cancel-slide-btn" onClick={() => setShowSlideConfirm(false)}>Cancel</button>
              </div>
            </div>
          )}
        </>
      )}
      
    </div>
  );
}

export default DriverDashboard;
