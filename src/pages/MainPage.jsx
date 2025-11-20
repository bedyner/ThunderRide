import { useNavigate } from "react-router-dom";
import Navbar from "../components/Mainpage/Navbar/Navbar";
import Footer from "../components/Mainpage/Footer/Footer";

import "./MainPage.css";

import LocationOnIcon from "@mui/icons-material/LocationOn";

import DriverImg from "../images/driver.png";

export const MainPage = () => {
  const navigate = useNavigate();
  return (
    <>
    
      <Navbar/>

        <div className="ride-container">
            <header className="ride-header">
            <h1>Request a ride</h1>
            </header>

            <section className="ride-form">
            {/* Pickup Location */}
            <div className="input-group">
                <span className="icon">
                {" "}
                <LocationOnIcon />{" "}
                </span>
                <input type="text" placeholder="Pickup Location" />
                <button className="detect-btn">
                <i class="bi bi-send-fill"></i>
                </button>
            </div>

            {/* Destination */}
            <div className="input-group">
                <span className="icon">
                {" "}
                <LocationOnIcon />{" "}
                </span>
                <input type="text" placeholder="Destination" />
            </div>

            {/* Confirm */}
            <button className="confirm-btn">Confirms</button>
            </section>
        </div>

        <div className="main-container">
            {/* Driver Section */}
            <section className="driver-section">
            <div className="driver-text">
                <h2>Turn your car into an income</h2>
                <p>
                Join our platform and earn by giving rides on your schedule.
                Register your car once, and start driving with full control—your
                time, your rules, your earnings.
                </p>
                <img src={DriverImg} alt="Driver promo" className="section-img" />
                <div className="action-row1">
                    <button className="primary-btn1" onClick={() => navigate("/signup")}>
                    Get Started
                    </button>
                    <p className="link-text1">
                    <a href="#">Already have account? Sign in now</a>
                    </p>
                </div>
            </div>
            </section>

            {/* Rider Section */}
            <section className="rider-section">
            <div className="rider-text">
                <h2>Ride with us</h2>
                <img src={DriverImg} alt="Ride with us" className="section-img" />
                <p>
                Your safe, easy, and reliable way to get where you need to go.
                With trusted drivers and clear pricing, you can relax and enjoy
                the journey every time.
                </p>
                 <div className="action-row">
                    <button className="primary-btn" onClick={() => navigate("/login")}>
                    Log in to your account
                    </button>
                    <p className="link-text">
                    <a href="#">Create an account</a>
                    </p>
                </div>
            </div>
            </section>

            {/* Become a Driver Section */}
            <section className="become-driver-section">
            <div className="become-driver-text">
                <h2>Become a driver</h2>
                <img src={DriverImg} alt="Ride with us" className="section-img" />
                <p>
                Apply to become a driver today and start a stable career with good
                income, flexible hours, and full support from our professional
                team.
                </p>
                <div className="action-row">
                    <button className="primary-btn" onClick={() => navigate("/earn")}>
                    Apply Now
                    </button>
                    <p className="link-text">
                        <a href="#">Sign in and start driving today</a>
                    </p>
                </div>
            </div>
            </section>

            {/* Safety Section */}
            <section className="safety-section">
            <h2>We value your safety.</h2>
            <p>
                Your safety comes first. Every driver is verified, every ride is
                tracked, and every trip is protected so you can ride with peace of
                mind, every time.
            </p>
            </section>
        </div>

      <Footer />
    </>
  );
};
