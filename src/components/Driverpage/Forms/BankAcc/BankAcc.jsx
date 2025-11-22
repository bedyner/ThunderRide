import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
 import "../BankAcc/BankAcc.css";

export default function BankAcc() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    ownerName: "",
    address: "",
    accountNumber: "",
    bankNameOrSwift: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted form:", form);
    alert("ส่งข้อมูลเรียบร้อย (เดโม)!");
    navigate("/next-step");
  };

  return (
    <div className="bank-form-wrapper">
      <form className="bank-form" onSubmit={handleSubmit}>
        <h1 className="form-title">ข้อมูลบัญชีธนาคาร</h1>
        <p className="form-subtitle">
          โปรดกรอกข้อมูลด้านล่างหรือแนบเอกสารธนาคารที่ด้านล่าง
        </p>

        <div className="form-group">
          <label htmlFor="ownerName">
            ชื่อเจ้าของบัญชีธนาคาร<span className="required">*</span>
          </label>
          <input
            id="ownerName"
            name="ownerName"
            type="text"
            placeholder="ระบุชื่อ–นามสกุล"
            value={form.ownerName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">
            ที่อยู่<span className="required">*</span>
          </label>
          <input
            id="address"
            name="address"
            type="text"
            placeholder="บ้านเลขที่, ถนน, เขต/อำเภอ, จังหวัด, รหัสไปรษณีย์"
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="accountNumber">
            หมายเลขบัญชีธนาคาร<span className="required">*</span>
          </label>
          <input
            id="accountNumber"
            name="accountNumber"
            type="text"
            placeholder="หมายเลขบัญชีธนาคาร รูปแบบ IBAN หรืออื่นๆ"
            value={form.accountNumber}
            onChange={handleChange}
            required
            inputMode="numeric"
          />
          <small className="hint">
            หมายเลขบัญชีธนาคาร รูปแบบ IBAN หรืออื่นๆ
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="bankNameOrSwift">
            ชื่อธนาคารหรือ BIC/SWIFT<span className="required">*</span>
          </label>
          <input
            id="bankNameOrSwift"
            name="bankNameOrSwift"
            type="text"
            placeholder="หากมีโปรดใส่ชื่อธนาคาร"
            value={form.bankNameOrSwift}
            onChange={handleChange}
            required
          />
          <small className="hint">หากมีโปรด ใส่ชื่อธนาคาร</small>
        </div>

        <div className="consent-block">
          <h2 className="consent-title">การยินยอมและข้อมูลสำคัญ</h2>
          <p className="consent-text">
            การยินยอมแบ่งปันข้อมูลส่วนบุคคลของคุณกับผู้ให้บริการตรวจสอบของ name ในประเทศไทย เมื่อคลิก “ส่ง” คุณยืนยันว่าคุณได้ให้และเข้าใจประกาศความเป็นส่วนตัวของพาร์ทเนอร์ที่แบ่งปัน name เพื่อเปิดใช้งานบริการตรวจสอบชื่อเจ้าของบัญชีให้กับผู้ให้บริการตรวจสอบชื่อ ผู้ให้บริการตรวจสอบชื่ออาจรวมถึงวิสาหกิจอุตสาหกรรม ธนาคารแห่งประเทศไทย และ ธปท. ซึ่งอาจรวมถึงการตรวจสอบประวัติธุรกรรมของคุณในประเทศไทย และการยืนยันตัวตนของคุณ โปรแกรมนี้อาจรวมถึงการตรวจสอบประวัติของคุณจากฐานข้อมูลของธนาคารแห่งประเทศไทยหรือประวัติจากฐานข้อมูลของธปท.
          </p>

          <h3 className="consent-subtitle">ข้อจำกัดความรับผิดชอบ</h3>
          <p className="consent-text">
            โปรดทราบว่า Thunder Ride กำลังดำเนินข้อมูลกับบุคคลอิสระ และพาร์ทเนอร์ที่ให้บริการตรวจสอบชื่อบุคคล ซึ่งอาจมีข้อจำกัดเกี่ยวกับผู้ให้บริการตรวจสอบประวัติ การยืนยันตัวตนของคุณ Thunder Ride แสดงให้เห็นว่าคำขอไม่รับผิดชอบต่อวิธีที่ผู้ให้บริการตรวจสอบชื่อหรือพาร์ทเนอร์ใช้หรือแบ่งปันข้อมูลของคุณในการให้บริการตรวจสอบชื่อ
          </p>

          <h3 className="consent-subtitle">ผลกระทบจากการไม่ให้ความยินยอมของคุณ</h3>
          <p className="consent-text">
            คุณมีสิทธิ์ที่จะไม่ให้คำยินยอมส่งข้อมูล หากไม่มีการยินยอมตรวจสอบชื่อเจ้าของบัญชีธนาคารผ่านการแบ่งปันข้อมูลกับผู้ให้บริการตรวจสอบประวัติของบุคคลอิสระ อาจส่งผลให้บัญชีของคุณถูกระงับการใช้งาน
          </p>
        </div>

        <div className="actions">
          <button type="submit" className="next-btn">Next</button>
        </div>
      </form>
    </div>
  );
}
