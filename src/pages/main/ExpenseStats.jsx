import React, { useState } from "react";
import "../../css/ExpenseStats.css";

import IconButton from '@mui/material/IconButton';
import Avatar from "@mui/material/Avatar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DownloadIcon from "@mui/icons-material/Download";

function ExpenseStats() {
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
        <IconButton className="header-icon">
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
        <div className="graph-placeholder">[กราฟแสดงค่าใช้จ่ายรายเดือน]</div>
        <div className="graph-label">May: $1,230</div>
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
