import React from 'react';
import './MainApp.css';

export default function MainApp() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="app-name">ThunderRide</div>
        <nav className="nav-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign up</button>
          <div className="menu-icon">☰</div>
        </nav>
      </header>

      {/* Request a Ride */}
      <section className="ride-request">
        <h2>Request a ride</h2>
        <div className="input-group">
          <input type="text" id="pickup" placeholder="Pickup location" />
        </div>
        <div className="input-group">
          <input type="text" id="destination" placeholder="Destination" />
        </div>
        
        <div className="date-time-container">
            <div className="row">
             {/* Date Section */}
                <div className="column">
                    <label className="label">Date</label>
                    <div className="input-group">
                    <span className="icon"></span>
                    <button className="input-button">Today</button>
                </div>
            </div>

            {/* Time Section */}
            <div className="column">
                <label className="label">Time</label>
                <div className="input-group">
                    <span className="icon"></span>
                     <select>
                        <option>Now</option>
                        <option>Later</option>
                     </select>
                </div>
            </div>
        </div>

            {/* Confirm Button */}
            <button className="confirm-button">Confirms</button>
            </div>
      </section>

      {/* Driver Promo */}
      <section className="driver-promo">
        <h3>Turn your car into an income</h3>
        <p>
          Join our platform and earn by giving rides on your schedule. Register your car once, and start driving with full control—your time, your rules, your earnings.
        </p>
        <div className="promo-actions">
          <button className="get-started-btn">Get Started</button>
          <a href="#" className="signin-link">Already have account? Sign in now.</a>
        </div>
      </section>
      <h3>Ride with us.</h3>
        <p>
          Your safe, easy, and reliable way to get where you need to go. With trusted drivers and clear pricing, you can relax and enjoy the journey every time.
        </p>
        <div className="promo-actions">
          <button className="get-started-btn">Log in to your account</button>
          <a href="#" className="signin-link">Create an account.</a>
        </div>

        <h3>We value your safety.</h3>
        <p>
          Your safety comes first. Every driver is verified, every ride is tracked, and every trip is protected so you can ride with peace of mind, every time.
        </p>


      {/* Footer */}
      <footer className="footer">
        <h3>ThunderRide</h3>
      </footer>
    </div>
  );
}
