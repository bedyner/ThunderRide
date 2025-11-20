import React, { useState } from "react";



import BillTy from "../../components/Driverpage/Forms/BillTy/BillTy1";
import BillTy2 from "../../components/Driverpage/Forms/BillTy/BillTy2";
import BillTy3 from "../../components/Driverpage/Forms/BillTy/BillTy3";

export default function BillType() {
  const [step, setStep] = useState(1);

  // Aggregate form data across steps (could be sent to API later)
  const [formData, setFormData] = useState({
    billingType: "", // บริษัท / บุคคลธรรมดา
    companyName: "",
    address: "",
    registrationCode: "",
    hasOutstandingVat: false,
    vatNumber: "",
    vatInvoiceNumber: "",
    bankAccountHolderName: "",
    bankAccountNumber: "",
    bankNameOrSwift: "",
    consentGiven: false,
  });

  const goNext = () => setStep((s) => Math.min(s + 1, 3));
  const goBack = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="container">
      <div className="card">
        {step === 1 && (
          <BillTy
            data={formData}
            onChange={setFormData}
            onNext={goNext}
          />
        )}

        {step === 2 && (
          <BillTy2
            data={formData}
            onChange={setFormData}
            onBack={goBack}
            onNext={goNext}
          />
        )}

        {step === 3 && <BillTy3 data={formData} onBack={goBack} />}
      </div>
    </div>
  );
}