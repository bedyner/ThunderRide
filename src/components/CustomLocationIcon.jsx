import React from 'react';

const CustomLocationIcon = ({ style }) => {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      {/* Left rectangle */}
      <rect x="2" y="2" width="9" height="25" rx="2" fill="#ECBD35"/>
      {/* Right rectangle */}
      <rect x="13" y="2" width="9" height="25" rx="2" fill="#ECBD35"/>
      {/* Circle at bottom center */}
      <circle cx="12" cy="10" r="4" stroke="white" strokeWidth="2.5" fill="#ECBD35"/>    
    </svg>
  );
};

export default CustomLocationIcon;
