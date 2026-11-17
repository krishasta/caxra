import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Sparkles, Loader2 } from 'lucide-react';
import { sendInquiryToSales } from '../services/contactService';

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: 'Automatic Organic Waste Composter (10–1000 kg/day)',
    capacity: '100 kg/day',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    try {
      await sendInquiryToSales(formData);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setErrorMessage('Could not deliver via network. Please email info@caxra.in or call +91 99444 79115.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0e1329]/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-[#1f2853] hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#1f2853] font-heading">
              Quotation Request Received!
            </h3>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. A Caxra application engineer will contact you shortly with technical datasheets, CAD dimensions, and pricing for <strong>{formData.product}</strong> ({formData.capacity}).
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#1f2853] hover:bg-[#141b3b] transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/caxra-logo.png" 
                alt="Caxra Logo" 
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-lg font-bold text-[#1f2853] font-heading">
                  Request Machine Quotation
                </h3>
                <p className="text-[11px] text-[#ff7026] font-semibold">
                  Caxra Machine Systems • Engineering Desk
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-[11px] font-bold text-[#1f2853] uppercase mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#ff7026] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#1f2853] uppercase mb-1">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Company / Facility Name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#ff7026] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-[#1f2853] uppercase mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@organization.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#ff7026] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#1f2853] uppercase mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 99444 79115"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#ff7026] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-[#1f2853] uppercase mb-1">
                  Machine Category
                </label>
                <select
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-[#1f2853] focus:ring-2 focus:ring-[#ff7026] focus:outline-none"
                >
                  <option>Automatic Organic Waste Composter (10–1000 kg/day)</option>
                  <option>Plastic Recycle Shredder</option>
                  <option>Special Purpose Machine (SPM)</option>
                  <option>Custom Machine Design & Engineering</option>
                  <option>IoT Cloud Monitoring Solution</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#1f2853] uppercase mb-1">
                  Required Capacity
                </label>
                <select
                  value={formData.capacity}
                  onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-[#1f2853] focus:ring-2 focus:ring-[#ff7026] focus:outline-none"
                >
                  <option>10 kg / day</option>
                  <option>25 kg / day</option>
                  <option>50 kg / day</option>
                  <option>100 kg / day</option>
                  <option>250 kg / day</option>
                  <option>500 kg / day</option>
                  <option>1000 kg / day</option>
                  <option>Custom SPM Specification</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#1f2853] uppercase mb-1">
                Project Notes / Custom Requirements
              </label>
              <textarea
                rows={2}
                placeholder="Mention installation location, electrical connection, or special waste properties..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#ff7026] focus:outline-none"
              ></textarea>
            </div>

            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white caxra-gradient caxra-glow hover:opacity-95 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Sending to info@caxra.in...</span>
                </>
              ) : (
                <>
                  <span>Submit & Receive Price Proposal</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>

            <p className="text-[10px] text-center text-slate-500">
              🇮🇳 Designed & Made in India • Direct factory pricing & warranty
            </p>
          </form>
        )}

      </div>
    </div>
  );
}
