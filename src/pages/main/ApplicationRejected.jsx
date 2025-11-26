import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/ApplicationRejected.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function ApplicationRejected() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleContinue = () => {
    // Navigate to form or retry page
    navigate("/earn");
  };

  return (
    <div className="rejected-container">
      <div className="rejected-header"></div>
      
      <div className="rejected-content">
        <h1 className="rejected-title">ลองใหม่อีกครั้ง !!</h1>
        
        <p className="rejected-description">
          ยืนยันตัวตนไม่สำเร็จ กรุณาตรวจสอบข้อมูลและลองใหม่อีกครั้ง
          <br />
          เช่น "ตรวจสอบชื่อ-นามสกุลให้ตรงกับบัตรประชาชน"
        </p>
      </div>
      
      <div className="rejected-footer">
        <button className="back-button-center" onClick={handleContinue}>
          <ArrowBackIcon sx={{ fontSize: 24 }} />
        </button>
      </div>
    </div>
  );
}

export default ApplicationRejected;
