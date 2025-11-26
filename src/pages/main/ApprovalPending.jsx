import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/ApprovalPending.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function ApprovalPending() {
  const navigate = useNavigate();
  const [showContinue, setShowContinue] = useState(false);

  useEffect(() => {
    // Show Continue button after 10 seconds
    const timer = setTimeout(() => {
      setShowContinue(true);
    }, 10000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    navigate("/application-accepted");
  };

  return (
    <div className="approval-container">
      <div className="approval-header"></div>
      
      <div className="approval-content">
        <div className="approval-icon">
          <CheckCircleIcon sx={{ fontSize: 80, color: "#ECBD35" }} />
        </div>
        
        <h1 className="approval-title">กำลังรอการอนุมัติ !!</h1>
        
        <p className="approval-subtitle">
          กำลังรอการอนุมัติ (ประมาณ 1-2 ชม.)
        </p>
        
        <p className="approval-description">
          กรุณาลองใหม่ภายหลัง
        </p>
      </div>
      
      <div className="approval-footer">
        {showContinue && (
          <button className="continue-button" onClick={handleContinue}>
            Continue
            <span className="arrow">›</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default ApprovalPending;
