import React, { useState } from 'react';

import "./HelpDropdown.css";

import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

function HelpDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="help-container">
      <button className="help-button" onClick={toggleDropdown}>
        Help <span className="caret"><ExpandMoreRoundedIcon /></span>
      </button>
      {isOpen && (
        <div className="help-dropdown">
          <ul>
            <li>Help</li>
            <li>Log out</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HelpDropdown;
