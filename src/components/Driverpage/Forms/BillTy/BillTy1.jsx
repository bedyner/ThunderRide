import React, { useMemo } from "react";

export default function BillTy({ data = {}, onChange, onNext }) {
  const isCompany = data.billingType === "บริษัท";
  const isIndividual = data.billingType === "บุคคลธรรมดา";

  const requiredFilled = useMemo(() => {
    if (!data.billingType) return false;

    if (isIndividual) {
      return (
        data.address &&
        data.bankAccountHolderName &&
        data.bankAccountNumber &&
        data.bankName
      );
    }

    if (isCompany) {
      const {
        companyName,
        address,
        registrationCode,
        vatNumber,
        bankAccountHolderName,
        bankAccountNumber,
        bankName,
      } = data;

      const requiredBase =
        companyName &&
        address &&
        registrationCode &&
        vatNumber &&
        bankAccountHolderName &&
        bankAccountNumber &&
        bankName;

      const vatInvoiceOk =
        !data.hasOutstandingVat ||
        (data.hasOutstandingVat && data.vatInvoiceNumber);

      return Boolean(requiredBase && vatInvoiceOk);
    }

    return false;
  }, [data, isCompany, isIndividual]);

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

        {isCompany && (
          <>
            <div className="form-group">
              <label>
                ชื่อบริษัท<span className="req">*</span>
              </label>
              <input
                type="text"
                placeholder="เช่น บริษัท เอ บี ซี จำกัด"
                value={data.companyName || ""}
                onChange={(e) => update("companyName", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>
                รหัสลงทะเบียน<span className="req">*</span>
              </label>
              <input
                type="text"
                placeholder="เช่น REG-2025-001"
                value={data.registrationCode || ""}
                onChange={(e) => update("registrationCode", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>
                เลข VAT<span className="req">*</span>
              </label>
              <input
                type="text"
                placeholder="เลขภาษีมูลค่าเพิ่ม"
                value={data.vatNumber || ""}
                onChange={(e) => update("vatNumber", e.target.value)}
              />
            </div>

            <div className="form-group checkbox-row">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={data.hasOutstandingVat || false}
                  onChange={(e) => update("hasOutstandingVat", e.target.checked)}
                />
                ภาษีมูลค่าเพิ่มที่ค้างจ่าย
              </label>
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
              </div>
            )}
          </>
        )}

        {(isCompany || isIndividual) && (
          <>
            <div className="form-group">
              <label>
                ที่อยู่<span className="req">*</span>
              </label>
              <textarea
                rows={3}
                placeholder="บ้านเลขที่ ถนน แขวง/ตำบล เขต/อำเภอ จังหวัด รหัสไปรษณีย์"
                value={data.address || ""}
                onChange={(e) => update("address", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>
                ชื่อเจ้าของบัญชีธนาคาร<span className="req">*</span>
              </label>
              <input
                type="text"
                placeholder="ชื่อ-นามสกุล"
                value={data.bankAccountHolderName || ""}
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
                value={data.bankAccountNumber || ""}
                onChange={(e) => update("bankAccountNumber", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>
                ชื่อธนาคาร<span className="req">*</span>
              </label>
              <input
                type="text"
                placeholder="เช่น ธนาคารกรุงไทย"
                value={data.bankName || ""}
                onChange={(e) => update("bankName", e.target.value)}
              />
            </div>
          </>
        )}
      </div>

      <div className="actions">
        <button
          className="btn primary"
          onClick={onNext}
          disabled={!requiredFilled}
        >
          Next
        </button>
      </div>
    </div>
  );
}
