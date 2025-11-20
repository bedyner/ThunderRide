// components/BankAccountForm.jsx
import React, { useMemo } from "react";

export default function BillTy2({ data, onChange, onNext }) {
  const requiredFilled = useMemo(() => {
    const {
      billingType,
      companyName,
      address,
      registrationCode,
      vatNumber,
      bankAccountHolderName,
      bankAccountNumber,
    } = data;
    const requiredBase =
      billingType &&
      companyName &&
      address &&
      registrationCode &&
      vatNumber &&
      bankAccountHolderName &&
      bankAccountNumber;
    const vatInvoiceOk =
      !data.hasOutstandingVat || (data.hasOutstandingVat && data.vatInvoiceNumber);
    return Boolean(requiredBase && vatInvoiceOk);
  }, [data]);

  const update = (field, value) => onChange({ ...data, [field]: value });

  return (
    <div>
      <h2 className="title">ข้อมูลบัญชีธนาคาร</h2>

      <div className="grid">
        <div className="form-group">
          <label>
            ประเภทการเรียกเก็บเงิน<span className="req">*</span>
          </label>
          <select
            value={data.billingType}
            onChange={(e) => update("billingType", e.target.value)}
          >
            <option value="">-- เลือกประเภท --</option>
            <option value="บริษัท">บริษัท</option>
            <option value="บุคคลธรรมดา">บุคคลธรรมดา</option>
          </select>
          <small className="hint">บริษัท / บุคคลธรรมดา</small>
        </div>

        <div className="form-group">
          <label>
            ชื่อบริษัท<span className="req">*</span>
          </label>
          <input
            type="text"
            placeholder="เช่น บริษัท เอ บี ซี จำกัด"
            value={data.companyName}
            onChange={(e) => update("companyName", e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>
            ที่อยู่<span className="req">*</span>
          </label>
          <textarea
            rows={3}
            placeholder="บ้านเลขที่ ถนน แขวง/ตำบล เขต/อำเภอ จังหวัด รหัสไปรษณีย์"
            value={data.address}
            onChange={(e) => update("address", e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>
            รหัสลงทะเบียน<span className="req">*</span>
          </label>
          <input
            type="text"
            placeholder="เช่น REG-2025-001"
            value={data.registrationCode}
            onChange={(e) => update("registrationCode", e.target.value)}
          />
        </div>

        <div className="form-group checkbox-row">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={data.hasOutstandingVat}
              onChange={(e) => update("hasOutstandingVat", e.target.checked)}
            />
            ภาษีมูลค่าเพิ่มที่ค้างจ่าย
          </label>
          <small className="hint">ติ๊กถูกถ้ามีภาษีมูลค่าเพิ่มค้างจ่าย</small>
        </div>

        <div className="form-group">
          <label>
            หมายเลขสำหรับภาษีมูลค่าเพิ่ม<span className="req">*</span>
          </label>
          <input
            type="text"
            placeholder="เลขประจำตัวผู้เสียภาษี"
            value={data.vatNumber}
            onChange={(e) => update("vatNumber", e.target.value)}
          />
        </div>

        {data.hasOutstandingVat && (
          <div className="form-group">
            <label>
              หมายเลขกำกับภาษีมูลค่าเพิ่ม<span className="req">*</span>
            </label>
            <input
              type="text"
              placeholder="เลขใบกำกับภาษีมูลค่าเพิ่ม"
              value={data.vatInvoiceNumber || ""}
              onChange={(e) => update("vatInvoiceNumber", e.target.value)}
            />
            <small className="hint">
              ช่องนี้จะแสดงเมื่อมีภาษีมูลค่าเพิ่มค้างจ่าย
            </small>
          </div>
        )}

        <div className="form-group">
          <label>
            ชื่อเจ้าของบัญชีธนาคาร<span className="req">*</span>
          </label>
          <input
            type="text"
            placeholder="ชื่อ-นามสกุล"
            value={data.bankAccountHolderName}
            onChange={(e) => update("bankAccountHolderName", e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>
            หมายเลขบัญชีธนาคาร<span className="req">*</span>
          </label>
          <input
            type="text"
            placeholder="เช่น 123-4-56789-0"
            value={data.bankAccountNumber}
            onChange={(e) => update("bankAccountNumber", e.target.value)}
          />
          <small className="hint">รองรับรูปแบบทั่วไปของบัญชีธนาคาร</small>
        </div>
      </div>

      <div className="actions">
        <button
          className="btn primary"
          onClick={onNext}
          disabled={!requiredFilled}
          title={!requiredFilled ? "กรอกข้อมูลที่มี * ให้ครบก่อน" : "ไปต่อ"}
        >
          Next
        </button>
      </div>
    </div>
  );
}
