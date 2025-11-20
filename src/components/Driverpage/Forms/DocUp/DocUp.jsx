import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FileGroup({ label, description, accept, onFileSelect }) {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
    onFileSelect(true);

    // preview เฉพาะรูป
    if (accept === 'image' && f.type.startsWith('image/')) {
      setPreviewUrl(URL.createObjectURL(f));
    } else {
      setPreviewUrl(null);
    }
  };

  const acceptAttr = accept === 'pdf' ? '.pdf' : 'image/jpeg,image/png,image/webp';

  return (
    <div style={{ marginBottom: 20 }}>
      <h3>{label}</h3>
      <p>{description}</p>
      <input type="file" accept={acceptAttr} onChange={handleFileChange} />
      {file && <p>เลือกไฟล์: {file.name}</p>}
      {previewUrl && <img src={previewUrl} alt="preview" style={{ maxWidth: 200 }} />}
    </div>
  );
}

export default function DocUp() {
  const navigate = useNavigate();
  const [status, setStatus] = useState({
    driverLicense: false,
    driverSelfie: false,
    publicDriverLicense: false,
    thaiIdCard: false,
    vehicleRegistration: false,
    mandatoryInsurance: false,
  });

  const allUploaded = Object.values(status).every(Boolean);

  const handleNext = () => {
    if (!allUploaded) {
      alert('กรุณาเลือกไฟล์ให้ครบทุกเอกสารก่อน');
      return;
    }
    // ไปหน้า form2
    navigate('/form4');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>อัปโหลดเอกสารสำคัญ</h2>

      <FileGroup
        label="ใบขับขี่"
        description="กรุณาอัปโหลดไฟล์ PDF ของใบขับขี่ที่ยังไม่หมดอายุ แสดงชื่อและรูปชัดเจน ออกโดยกรมการขนส่งทางบก (DLT)"
        accept="pdf"
        onFileSelect={(ok) => setStatus(s => ({ ...s, driverLicense: ok }))}
      />

      <FileGroup
        label="รูปหน้าคนขับหรือตัวเอง"
        description="อัปโหลดรูปโปรไฟล์ที่เห็นใบหน้าชัดเจน ตรงกับบัตรประชาชนและใบขับขี่ เป็นภาพล่าสุด สีชัด ไม่แก้ไข ไม่รวมคนอื่น"
        accept="image"
        onFileSelect={(ok) => setStatus(s => ({ ...s, driverSelfie: ok }))}
      />

      <FileGroup
        label="ใบขับขี่สาธารณะ"
        description="อัปโหลด PDF สแกนใบขับขี่สาธารณะ ออกโดย DLT ยังไม่หมดอายุ ข้อมูลสำคัญชัดเจน (ประเภท: 2, 3, 4 ตามข้อกำหนด)"
        accept="pdf"
        onFileSelect={(ok) => setStatus(s => ({ ...s, publicDriverLicense: ok }))}
      />

      <FileGroup
        label="บัตรประจำตัวประชาชน"
        description="อัปโหลด PDF สแกนบัตรประชาชนไทย ยังไม่หมดอายุ และข้อมูลชัดเจน (ไม่รับบัตรต่างชาติ)"
        accept="pdf"
        onFileSelect={(ok) => setStatus(s => ({ ...s, thaiIdCard: ok }))}
      />

      <FileGroup
        label="เอกสารการจดทะเบียนยานพาหนะ"
        description="อัปโหลด PDF สแกนทะเบียนรถ (หน้า-หลัง) ยังไม่หมดอายุ และข้อมูลชัดเจน"
        accept="pdf"
        onFileSelect={(ok) => setStatus(s => ({ ...s, vehicleRegistration: ok }))}
      />

      <FileGroup
        label="ประกันภาคบังคับ (พรบ.)"
        description="อัปโหลดเอกสารประกันภาคบังคับสำหรับรถรับจ้างผ่านระบบอิเล็กทรอนิกส์/เชิงพาณิชย์/รถรับจ้างสาธารณะ เนื้อหาและเงื่อนไขชัดเจน"
        accept="pdf"
        onFileSelect={(ok) => setStatus(s => ({ ...s, mandatoryInsurance: ok }))}
      />

      <hr />
      <button onClick={handleNext}>Next</button>
      {!allUploaded && <p style={{ color: 'red' }}>กรุณาเลือกไฟล์ให้ครบก่อนกด Next</p>}
    </div>
  );
}
