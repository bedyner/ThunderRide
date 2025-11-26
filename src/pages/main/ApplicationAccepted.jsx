import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/ApplicationAccepted.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function ApplicationAccepted() {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Navigate to dashboard or main page
    navigate("/dashboard");
  };

  return (
    <div className="accepted-container">
      <div className="accepted-header"></div>
      
      <div className="accepted-content">
        <div className="accepted-icon">
          <CheckCircleIcon sx={{ fontSize: 80, color: "#ECBD35" }} />
        </div>
        
        <h1 className="accepted-title">ยินดีต้อนรับ !!</h1>
        
        <p className="accepted-description">
          ระบบลงทะเบียนเสร็จสมบูรณ์แล้ว สามารถเริ่มงานได้ทันที
        </p>
      </div>
      
      <div className="accepted-footer">
        <button className="continue-button" onClick={handleContinue}>
          Continue
          <span className="arrow">›</span>
        </button>
      </div>
    </div>
  );
}

export default ApplicationAccepted;
