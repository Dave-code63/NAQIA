import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CheckCircle2, FileText, CreditCard, Mail, Building, ShieldCheck, ArrowRight, Download, Loader2 } from "lucide-react";

export default function Portal() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    accountType: "importer",
    tin: "",
    companyName: "",
    email: "",
    otp: "",
    paymentMethod: "bsp",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successData, setSuccessData] = useState<any>(null);
  const [otpSent, setOtpSent] = useState(false);
  const [tinValid, setTinValid] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const validateTIN = async () => {
    if (formData.tin.length < 9) {
      setError("TIN must be at least 9 digits.");
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch("/api/validate-tin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tin: formData.tin }),
      });
      const data = await res.json();
      if (data.valid) {
        setFormData({ ...formData, companyName: data.companyName });
        setTinValid(true);
        setError("");
      } else {
        setError(data.error || "Invalid TIN.");
        setTinValid(false);
      }
    } catch (err) {
      setError("Failed to validate TIN. Please try again.");
    }
    setIsLoading(false);
  };

  const sendOTP = async () => {
    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      });
      const data = await res.json();
      if (data.success) {
        setOtpSent(true);
        setError("");
        alert("OTP sent to your email! (Check server console for demo)");
      } else {
        setError(data.error || "Failed to send OTP.");
      }
    } catch (err) {
      setError("Failed to send OTP. Please try again.");
    }
    setIsLoading(false);
  };

  const verifyOTP = async () => {
    if (formData.otp.length !== 6) {
      setError("OTP must be 6 digits.");
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, otp: formData.otp }),
      });
      const data = await res.json();
      if (data.success) {
        setEmailVerified(true);
        setError("");
      } else {
        setError(data.error || "Invalid OTP.");
      }
    } catch (err) {
      setError("Failed to verify OTP. Please try again.");
    }
    setIsLoading(false);
  };

  const handlePaymentAndRegister = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          amount: formData.accountType === "importer" ? 500 : 1000, // Kina
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccessData(data.data);
        setStep(4); // Success step
      } else {
        setError(data.error || "Registration failed.");
      }
    } catch (err) {
      setError("Payment processing failed. Please try again.");
    }
    setIsLoading(false);
  };

  const downloadPermit = () => {
    if (successData?.uuid) {
      window.open(`/api/permit/${successData.uuid}/pdf`, "_blank");
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">NAQIA Online Application Portal</h1>
            <p className="text-gray-600 mb-4">Register for your Importer or Supplier Membership Account</p>
            <p className="text-sm">
              Already have an account? <Link to="/login" className="text-green-700 font-bold hover:underline">Sign in here</Link>
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between relative">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 z-0"></div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-green-600 z-0 transition-all duration-500" style={{ width: `${((step - 1) / 3) * 100}%` }}></div>
              
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className={`relative z-10 flex flex-col items-center ${step >= s ? 'text-green-700' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 bg-white ${step >= s ? 'border-green-600 text-green-600' : 'border-gray-300 text-gray-400'} ${step === s ? 'ring-4 ring-green-100' : ''}`}>
                    {step > s ? <CheckCircle2 size={20} /> : s}
                  </div>
                  <span className="text-xs font-medium mt-2 hidden md:block">
                    {s === 1 ? 'Account Type' : s === 2 ? 'Business Details' : s === 3 ? 'Payment' : 'Complete'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-12">
              
              {error && (
                <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}

              {/* STEP 1: Account Type */}
              {step === 1 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Building className="mr-3 text-green-600" /> Select Account Type
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <label className={`cursor-pointer rounded-xl border-2 p-6 transition-all ${formData.accountType === 'importer' ? 'border-green-600 bg-green-50' : 'border-gray-200 hover:border-green-300'}`}>
                      <input type="radio" name="accountType" value="importer" className="sr-only" checked={formData.accountType === 'importer'} onChange={handleInputChange} />
                      <div className="flex justify-between items-start mb-4">
                        <div className="bg-green-100 p-3 rounded-lg text-green-700"><FileText size={24} /></div>
                        {formData.accountType === 'importer' && <CheckCircle2 className="text-green-600" />}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Importer Account</h3>
                      <p className="text-sm text-gray-600">For local PNG businesses importing regulated goods. Requires IPA Certificate.</p>
                      <div className="mt-4 text-green-700 font-bold">K500.00 / year</div>
                    </label>

                    <label className={`cursor-pointer rounded-xl border-2 p-6 transition-all ${formData.accountType === 'supplier' ? 'border-green-600 bg-green-50' : 'border-gray-200 hover:border-green-300'}`}>
                      <input type="radio" name="accountType" value="supplier" className="sr-only" checked={formData.accountType === 'supplier'} onChange={handleInputChange} />
                      <div className="flex justify-between items-start mb-4">
                        <div className="bg-blue-100 p-3 rounded-lg text-blue-700"><ShieldCheck size={24} /></div>
                        {formData.accountType === 'supplier' && <CheckCircle2 className="text-green-600" />}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Overseas Supplier</h3>
                      <p className="text-sm text-gray-600">For international manufacturers exporting to PNG. Requires Health Certifications.</p>
                      <div className="mt-4 text-green-700 font-bold">K1,000.00 / year</div>
                    </label>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button onClick={() => setStep(2)} className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center">
                      Continue <ArrowRight size={18} className="ml-2" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Business & Verification */}
              {step === 2 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Building className="mr-3 text-green-600" /> Business Details & Verification
                  </h2>

                  {/* TIN Validation */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">1. IRC TIN Verification</h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-grow">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tax Identification Number (TIN)</label>
                        <input 
                          type="text" 
                          name="tin" 
                          value={formData.tin} 
                          onChange={handleInputChange}
                          disabled={tinValid}
                          placeholder="e.g. 123456789" 
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 disabled:bg-gray-100"
                        />
                      </div>
                      <div className="flex items-end">
                        {!tinValid ? (
                          <button onClick={validateTIN} disabled={isLoading || !formData.tin} className="w-full md:w-auto bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center">
                            {isLoading ? <Loader2 className="animate-spin mr-2" size={18} /> : null}
                            Verify TIN
                          </button>
                        ) : (
                          <div className="w-full md:w-auto bg-green-100 text-green-800 font-bold py-3 px-6 rounded-lg flex items-center justify-center border border-green-200">
                            <CheckCircle2 className="mr-2" size={18} /> Verified
                          </div>
                        )}
                      </div>
                    </div>
                    {tinValid && (
                      <div className="mt-4 p-3 bg-white border border-green-200 rounded-lg text-sm">
                        <span className="text-gray-500">Registered Entity:</span> <strong className="text-gray-900">{formData.companyName}</strong>
                      </div>
                    )}
                  </div>

                  {/* Email OTP Verification */}
                  <div className={`bg-gray-50 p-6 rounded-xl border border-gray-200 transition-opacity ${!tinValid ? 'opacity-50 pointer-events-none' : ''}`}>
                    <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">2. Email Verification</h3>
                    
                    {!otpSent ? (
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-grow">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Official Email Address</label>
                          <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleInputChange}
                            placeholder="contact@company.com" 
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          />
                        </div>
                        <div className="flex items-end">
                          <button onClick={sendOTP} disabled={isLoading || !formData.email} className="w-full md:w-auto bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center">
                            {isLoading ? <Loader2 className="animate-spin mr-2" size={18} /> : <Mail className="mr-2" size={18} />}
                            Send OTP
                          </button>
                        </div>
                      </div>
                    ) : !emailVerified ? (
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-grow">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Enter 6-Digit OTP</label>
                          <input 
                            type="text" 
                            name="otp" 
                            value={formData.otp} 
                            onChange={handleInputChange}
                            placeholder="123456" 
                            maxLength={6}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 text-center tracking-widest text-lg font-mono"
                          />
                        </div>
                        <div className="flex items-end">
                          <button onClick={verifyOTP} disabled={isLoading || formData.otp.length !== 6} className="w-full md:w-auto bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center">
                            {isLoading ? <Loader2 className="animate-spin mr-2" size={18} /> : null}
                            Verify Code
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center text-green-700 font-bold bg-green-50 p-4 rounded-lg border border-green-200">
                        <CheckCircle2 className="mr-2" size={20} /> Email {formData.email} verified successfully.
                      </div>
                    )}
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button onClick={() => setStep(1)} className="text-gray-600 hover:text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors">
                      Back
                    </button>
                    <button 
                      onClick={() => setStep(3)} 
                      disabled={!tinValid || !emailVerified}
                      className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Proceed to Payment <ArrowRight size={18} className="ml-2" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Payment */}
              {step === 3 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <CreditCard className="mr-3 text-green-600" /> Payment Gateway
                  </h2>

                  <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl mb-8">
                    <h3 className="text-lg font-bold text-yellow-900 mb-2">Order Summary</h3>
                    <div className="flex justify-between text-yellow-800 mb-2">
                      <span>{formData.accountType === 'importer' ? 'Importer Membership (Annual)' : 'Supplier Membership (Annual)'}</span>
                      <span className="font-bold">K{formData.accountType === 'importer' ? '500.00' : '1,000.00'}</span>
                    </div>
                    <div className="flex justify-between text-yellow-800 border-t border-yellow-200 pt-2 mt-2">
                      <span className="font-bold">Total Due</span>
                      <span className="font-bold text-xl">K{formData.accountType === 'importer' ? '500.00' : '1,000.00'}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${formData.paymentMethod === 'bsp' ? 'border-green-600 bg-green-50' : 'border-gray-200 hover:bg-gray-50'}`}>
                      <input type="radio" name="paymentMethod" value="bsp" checked={formData.paymentMethod === 'bsp'} onChange={handleInputChange} className="w-5 h-5 text-green-600" />
                      <span className="ml-4 font-bold text-gray-900">BSP Pay</span>
                      <span className="ml-auto text-sm text-gray-500">Direct Bank Transfer</span>
                    </label>
                    <label className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${formData.paymentMethod === 'westpac' ? 'border-green-600 bg-green-50' : 'border-gray-200 hover:bg-gray-50'}`}>
                      <input type="radio" name="paymentMethod" value="westpac" checked={formData.paymentMethod === 'westpac'} onChange={handleInputChange} className="w-5 h-5 text-green-600" />
                      <span className="ml-4 font-bold text-gray-900">Westpac IPG</span>
                      <span className="ml-auto text-sm text-gray-500">Credit / Debit Card</span>
                    </label>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button onClick={() => setStep(2)} className="text-gray-600 hover:text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors">
                      Back
                    </button>
                    <button 
                      onClick={handlePaymentAndRegister} 
                      disabled={isLoading}
                      className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center disabled:opacity-50"
                    >
                      {isLoading ? <Loader2 className="animate-spin mr-2" size={18} /> : <CreditCard className="mr-2" size={18} />}
                      Pay & Complete Registration
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: Success */}
              {step === 4 && (
                <div className="text-center space-y-6 animate-in zoom-in duration-500 py-8">
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={48} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Registration Successful!</h2>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Your payment has been processed and your {formData.accountType} account is now active.
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 max-w-md mx-auto text-left space-y-3 my-8">
                    <div className="flex justify-between"><span className="text-gray-500">Entity:</span> <strong className="text-gray-900">{formData.companyName}</strong></div>
                    <div className="flex justify-between"><span className="text-gray-500">User ID:</span> <strong className="text-gray-900 font-mono">{successData?.userId}</strong></div>
                    <div className="flex justify-between"><span className="text-gray-500">Payment Ref:</span> <strong className="text-gray-900 font-mono">{successData?.paymentId}</strong></div>
                  </div>

                  <button 
                    onClick={downloadPermit}
                    className="bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold py-4 px-8 rounded-xl transition-colors inline-flex items-center shadow-lg transform hover:-translate-y-1"
                  >
                    <Download className="mr-2" size={24} /> Download Official Permit (PDF)
                  </button>
                  
                  <p className="text-sm text-gray-500 mt-6">
                    The permit includes a secure QR code for border verification.
                  </p>
                </div>
              )}

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
