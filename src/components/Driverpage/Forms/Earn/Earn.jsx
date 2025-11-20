import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../Earn/Earn.css";

const PROVINCES = [
  "กรุงเทพมหานคร","กระบี่","กาญจนบุรี","กาฬสินธุ์","กำแพงเพชร","ขอนแก่น","จันทบุรี","ฉะเชิงเทรา","ชลบุรี","ชัยนาท","ชัยภูมิ","ชุมพร",
  "เชียงราย","เชียงใหม่","ตรัง","ตราด","ตาก","นครนายก","นครปฐม","นครพนม","นครราชสีมา","นครศรีธรรมราช","นครสวรรค์","นนทบุรี",
  "นราธิวาส","น่าน","บึงกาฬ","บุรีรัมย์","ปทุมธานี","ประจวบคีรีขันธ์","ปราจีนบุรี","ปัตตานี","พะเยา","พระนครศรีอยุธยา","พังงา",
  "พัทลุง","พิจิตร","พิษณุโลก","เพชรบุรี","เพชรบูรณ์","แพร่","ภูเก็ต","มหาสารคาม","มุกดาหาร","แม่ฮ่องสอน","ยโสธร","ยะลา",
  "ร้อยเอ็ด","ระนอง","ระยอง","ราชบุรี","ลพบุรี","ลำปาง","ลำพูน","เลย","ศรีสะเกษ","สกลนคร","สงขลา","สตูล","สมุทรปราการ",
  "สมุทรสงคราม","สมุทรสาคร","สระแก้ว","สระบุรี","สิงห์บุรี","สุโขทัย","สุพรรณบุรี","สุราษฎร์ธานี","สุรินทร์","หนองคาย",
  "หนองบัวลำภู","อ่างทอง","อำนาจเจริญ","อุดรธานี","อุตรดิตถ์","อุทัยธานี","อุบลราชธานี"
];

export default function Earn() {
  const navigate = useNavigate(); 
  const [city, setCity] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedCity, setSelectedCity] = useState(false);

  const filteredProvinces = PROVINCES.filter(p => p.includes(city));

  function handleCityChange(e) {
    const value = e.target.value;
    setCity(value);
    if (value === "") {
      setSelectedCity(false);
    }
  }

  function handleCitySelect(p) {
    setCity(p);
    setSelectedCity(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      city,
      firstName,
      lastName,
      mobile: `+66${mobile}`
    };
    console.log("Submitted:", payload);
    navigate("/form"); 
  }

  return (
    <div className="container">
      <h2 className="form-title">💰 Earn with (Name)</h2>
      <p className="form-subtitle">
        Sign up as a driver-partner by providing us information below.
      </p>
      <form className="form" onSubmit={handleSubmit}>
        
        {/* จังหวัด */}
        <div className="form-group">
          <label className="label">Where would you like to earn?</label>
          <input
            type="text"
            className="input"
            value={city}
            onChange={handleCityChange}
            placeholder="พิมพ์ชื่อจังหวัด"
          />
          {!selectedCity && city.trim() !== "" && (
            <ul className="listbox">
              {filteredProvinces.map(p => (
                <li
                  key={p}
                  className="option"
                  onClick={() => handleCitySelect(p)}
                >
                  {p}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* ชื่อ-นามสกุล */}
        <div className="form-row">
          <div className="form-group">
            <label className="label">First name</label>
            <input
              type="text"
              className="input"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="label">Last name</label>
            <input
              type="text"
              className="input"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </div>
        </div>

        {/* เบอร์มือถือ */}
        <div className="form-group">
          <label className="label">Mobile number</label>
          <div className="phone-row">
            <span className="phone-prefix">+66</span>
            <input
              type="text"
              className="input phone-input"
              value={mobile}
              onChange={e => setMobile(e.target.value.replace(/\D+/g, ""))}
              placeholder="09XXXXXXXX"
            />
          </div>
        </div>

        {/* Disclaimer */}
        <p className="disclaimer">
          By proceeding, I agree that Uber or its representatives may contact me
          by email, phone, or SMS (including by automatic telephone dialing
          system) at the email address or number I provide, including for
          marketing purposes.
        </p>

        {/* ปุ่ม Next */}
        <button type="submit" className="btn-primary">Next</button>
      </form>
    </div>
  );
}
