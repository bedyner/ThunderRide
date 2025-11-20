import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ เพิ่มบรรทัดนี้
import "./LegForm.css";

export default function LegForm() {
  const navigate = useNavigate();

  const [nationalId, setNationalId] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [hasTaxiLicense, setHasTaxiLicense] = useState(false);
  const [taxiLicenseNumber, setTaxiLicenseNumber] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      nationalId,
      licenseNumber,
      hasTaxiLicense,
      taxiLicenseNumber: hasTaxiLicense ? taxiLicenseNumber : null,
    };

    console.log("Submitted:", payload);
    navigate("/form3");
  }

  return (
    <div className="legal-container">
      <h2 className="legal-title">เอกสาร / ใบอนุญาตสำคัญทางกฎหมาย</h2>
      <p className="legal-subtitle">
        เราจะเก็บเลขประจำตัวประชาชนและรายละเอียดใบอนุญาตอื่นของคุณไว้เป็นความลับ
      </p>
      <form className="legal-form" onSubmit={handleSubmit}>
        {/* เลขบัตรประชาชน 13 หลัก */}
        <div className="legal-group">
          <label className="legal-label">เลขประจำตัวประชาชน</label>
          <input
            type="text"
            className="legal-input"
            value={nationalId}
            onChange={(e) =>
              setNationalId(e.target.value.replace(/\D+/g, "").slice(0, 13))
            }
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={13}
            placeholder="กรอกเลขบัตรประชาชน 13 หลัก"
          />
        </div>

        {/* ใบอนุญาตขับรถ 6 หลัก */}
        <div className="legal-group">
          <label className="legal-label">ใบอนุญาตฉบับนี้</label>
          <input
            type="text"
            className="legal-input"
            value={licenseNumber}
            onChange={(e) =>
              setLicenseNumber(e.target.value.replace(/\D+/g, "").slice(0, 8))
            }
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={8}
            placeholder="กรอกเลขใบอนุญาต 8 หลัก"
          />
        </div>

        <div className="legal-checkbox">
          <input
            type="checkbox"
            id="taxiLicense"
            checked={hasTaxiLicense}
            onChange={(e) => setHasTaxiLicense(e.target.checked)}
          />
          <label htmlFor="taxiLicense">
            ฉันมีใบอนุญาตขับรถสาธารณะ (แท็กซี่)
          </label>
        </div>

        {/* ใบอนุญาตสาธารณะ 6 หลัก */}
        {hasTaxiLicense && (
          <div className="legal-group">
            <label className="legal-label">
              ใบอนุญาตขับรถสาธารณะ (แท็กซี่)
            </label>
            <input
              type="text"
              className="legal-input"
              value={taxiLicenseNumber}
              onChange={(e) =>
                setTaxiLicenseNumber(
                  e.target.value.replace(/\D+/g, "").slice(0, 8)
                )
              }
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={8}
              placeholder="กรอกเลขใบอนุญาตสาธารณะ 8 หลัก"
            />
          </div>
        )}

        <button type="submit" className="legal-btn">
          Next
        </button>
      </form>
    </div>
  );
}
