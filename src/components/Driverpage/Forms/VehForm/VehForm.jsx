import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "./VehForm.css";


const VehForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    type: "",
    brand: "",
    model: "",
    year: "",
    license: "",
    color: "",
    province: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ รวมข้อมูลทั้งหมดเป็น object เดียว
    const payload = {
      type: formData.type,
      brand: formData.brand,
      model: formData.model,
      year: formData.year,
      license: formData.license,
      color: formData.color,
      province: formData.province,
    };

    // ✅ แสดงข้อมูลออกมาใน console
    console.log("Submitted Vehicle Data:", payload);

    // ✅ ไปหน้าใหม่หลังจาก submit
    navigate("/form2");
  };

  return (
    <div className="vehicle-form">
      <h2>รายละเอียดรถยนต์</h2>
      <p className="note">
        ผู้โดยสารจะเห็นเฉพาะชื่อและรายละเอียดรถยนต์ของคุณขณะโดยสาร
      </p>

      <form onSubmit={handleSubmit}>
        <label>ประเภทรถทั้งหมด</label>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="">เลือกประเภท</option>
          <option value="car">รถยนต์</option>
          <option value="taxi">รถแท็กซี่</option>
          <option value="car-for-ladies">รถสำหรับผู้หญิง</option>
          <option value="van">รถตู้</option>
          <option value="motorbike">มอเตอร์ไซค์ (วินด่วน)</option>
        </select>

        <label>ผู้ผลิต</label>
        <input
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          placeholder="เช่น Toyota, Honda"
        />

        <label>รุ่น</label>
        <input
          type="text"
          name="model"
          value={formData.model}
          onChange={handleChange}
          placeholder="เช่น Fortuner, Civic"
        />

        <label>ปีของรถ</label>
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
          placeholder="เช่น 2020"
        />

        <label>ป้ายทะเบียนรถ</label>
        <input
          type="text"
          name="license"
          value={formData.license}
          onChange={handleChange}
          placeholder="เช่น กข 1234"
        />

        <label>สีของรถ</label>
        <input
          type="text"
          name="color"
          value={formData.color}
          onChange={handleChange}
          placeholder="เช่น ขาว, ดำ"
        />

        <label>จังหวัดที่จดทะเบียน</label>
        <input
          type="text"
          name="province"
          value={formData.province}
          onChange={handleChange}
          placeholder="เช่น นนทบุรี"
        />

        <button type="submit" className="next-button">
          Next
        </button>
      </form>
    </div>
  );
};

export default VehForm;
