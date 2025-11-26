import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/ExpenseStats.css";

import IconButton from '@mui/material/IconButton';
import Avatar from "@mui/material/Avatar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DownloadIcon from "@mui/icons-material/Download";

function ExpenseStats() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Day");

  const tabs = ["Day", "Week", "Month", "Year"];
  const recentCustomers = [
    { name: "ทองดี", time: "10 Minutes Ago", amount: "+฿130.00" },
    { name: "สมศรี", time: "1 Hours Ago", amount: "+฿61.00" },
    { name: "มะกรูด", time: "1 Hours Ago", amount: "+฿94.00" },
  ];

  return (
    <div className="stats-container">
      {/* Header */}
      <div className="stats-header">
        <IconButton className="header-icon" onClick={() => navigate('/driver-profile')}>
          <ArrowBackIcon />
        </IconButton>
        <h2 className="stats-title">Statistics</h2>
        <IconButton className="header-icon">
          <DownloadIcon />
        </IconButton>
      </div>

      {/* Tabs */}
      <div className="stats-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "tab active" : "tab"}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Graph */}
      <div className="stats-graph">
        <svg className="graph-svg" viewBox="0 0 500 250" preserveAspectRatio="xMidYMid meet">
          {/* Gradient fill */}
          <defs>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#facc15" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#facc15" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          
          {/* Area fill */}
          <path
            d="M 0,120 Q 50,100 80,80 T 150,60 Q 200,50 250,70 T 350,100 Q 400,110 450,90 T 500,100 L 500,250 L 0,250 Z"
            fill="url(#areaGradient)"
          />
          
          {/* Line */}
          <path
            d="M 0,120 Q 50,100 80,80 T 150,60 Q 200,50 250,70 T 350,100 Q 400,110 450,90 T 500,100"
            fill="none"
            stroke="#facc15"
            strokeWidth="3"
          />
          
          {/* Dot at May */}
          <circle cx="150" cy="60" r="6" fill="#facc15" />
          
          {/* Vertical dashed line */}
          <line x1="150" y1="60" x2="150" y2="250" stroke="#d1d5db" strokeWidth="1" strokeDasharray="4,4" />
          
          {/* Month labels */}
          <text x="40" y="240" fontSize="14" fill="#9ca3af" textAnchor="middle">Apr</text>
          <text x="150" y="240" fontSize="14" fill="#facc15" fontWeight="600" textAnchor="middle">May</text>
          <text x="250" y="240" fontSize="14" fill="#9ca3af" textAnchor="middle">Jun</text>
          <text x="330" y="240" fontSize="14" fill="#9ca3af" textAnchor="middle">Jul</text>
          <text x="410" y="240" fontSize="14" fill="#9ca3af" textAnchor="middle">Aug</text>
          <text x="480" y="240" fontSize="14" fill="#9ca3af" textAnchor="middle">Sep</text>
        </svg>
        
        {/* Tooltip */}
        <div className="graph-tooltip">$1,230</div>
      </div>

      {/* Recent Customers */}
      <div className="stats-recent">
        <h3>Recent Customer</h3>
        {recentCustomers.map((item, index) => (
          <div key={index} className="customer-row">
            <div className="customer-info">
              <Avatar sx={{ width: 40, height: 40 }} />
              <div className="customer-text">
                <div className="customer-name">{item.name}</div>
                <div className="customer-time">{item.time}</div>
              </div>
            </div>
            <div className="customer-amount">{item.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseStats;
