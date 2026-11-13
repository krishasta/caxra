import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageSquare, ArrowRight, ShieldCheck, Loader2 } from 'lucide-react';
import { sendInquiryToSales } from '../services/contactService';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    product: 'Automatic Composting Machine (10–1000 kg/day)',
    wasteCapacity: '50 kg/day',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    try {
      await sendInquiryToSales(formData);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setErrorMessage('Could not deliver automatically via network. Please email sales@caxra.in or call +91 99444 79115.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#ff7026] text-xs font-bold uppercase tracking-wider mb-4">
            Factory & Sales Support
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1f2853] font-heading tracking-tight">
            Connect With Our Engineering Desk
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Request machinery quotes, CAD drawings, electrical load schedules, or schedule an on-site waste assessment.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#1f2853] font-heading">
                    Caxra Machine Systems
                  </h2>
                  <p className="text-xs font-semibold text-[#ff7026] uppercase tracking-wider mt-1">
                    Engineering, Manufacturing & Support
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  We build smart, on-site organic waste composting machines (10–1000 kg/day), plastic shredders, custom SPMs, and IoT solutions, designed and made in India.
                </p>

                <div className="space-y-4 pt-2 text-sm text-slate-700">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ff7026] flex items-center justify-center flex-shrink-0 mt-0.5 border border-orange-100">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold block text-[#1f2853]">Caxra Machine Systems Pvt Ltd</span>
                      <span className="text-slate-600 text-xs leading-relaxed">
                        29-3, Katoor Street, Kalapatti, Coimbatore - 641048, Tamil Nadu, India
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ff7026] flex items-center justify-center flex-shrink-0 mt-0.5 border border-orange-100">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold block text-[#1f2853]">Direct Sales & Application Desk</span>
                      <a href="tel:+919944479115" className="text-xs text-[#ff7026] hover:underline font-bold block">
                        +91 99444 79115
                      </a>
                      <a href="tel:+918023456789" className="text-xs text-slate-500 hover:underline block">
                        +91 (080) 2345 6789 (Works Desk)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ff7026] flex items-center justify-center flex-shrink-0 mt-0.5 border border-orange-100">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold block text-[#1f2853]">Email Inquiries</span>
                      <a href="mailto:sales@caxra.in" className="text-xs text-[#ff7026] hover:underline font-bold block">
                        sales@caxra.in
                      </a>
                      <a href="mailto:engineering@caxra.in" className="text-xs text-slate-500 hover:underline block">
                        engineering@caxra.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ff7026] flex items-center justify-center flex-shrink-0 mt-0.5 border border-orange-100">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold block text-[#1f2853]">Working Hours</span>
                      <span className="text-xs text-slate-600 block">
                        Monday – Saturday: 9:00 AM – 6:30 PM IST
                      </span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Action */}
                <div className="pt-4 border-t border-slate-200">
                  <a
                    href="https://wa.me/919944479115?text=Hello%20Caxra%20Machine%20Systems,%20I%20am%20interested%20in%20your%20composting%20machines/SPMs"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp Directly</span>
                  </a>
                </div>

              </div>

            </div>

            {/* Right RFQ Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm">
                
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1f2853] font-heading">
                      Machinery Inquiry Submitted!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you, <strong>{formData.name}</strong>. Our application engineering team has received your inquiry for <strong>{formData.product}</strong> ({formData.wasteCapacity}) and will connect within 2 business hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          organization: '',
                          product: 'Automatic Composting Machine (10–1000 kg/day)',
                          wasteCapacity: '50 kg/day',
                          message: ''
                        });
                      }}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#1f2853] hover:bg-[#141b3b] transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h2 className="text-xl font-bold text-[#1f2853] font-heading">
                        Request Detailed Quotation & Technical Datasheet
                      </h2>
                      <p className="text-xs text-slate-500 mt-1">
                        Fill out the specifications below to receive official pricing, power requirements, and CAD footprints.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1f2853] uppercase mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rajesh Kumar"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ff7026] bg-white text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1f2853] uppercase mb-1.5">
                          Company / Society / Organization *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="e.g. Green Valley Tech Park / Taj Residency"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ff7026] bg-white text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1f2853] uppercase mb-1.5">
                          Official Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rajesh@organization.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ff7026] bg-white text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1f2853] uppercase mb-1.5">
                          Phone / Mobile *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 99444 79115"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ff7026] bg-white text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1f2853] uppercase mb-1.5">
                          Product Category
                        </label>
                        <select
                          value={formData.product}
                          onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ff7026] bg-white text-sm font-semibold text-[#1f2853]"
                        >
                          <option>Automatic Composting Machine (10–1000 kg/day)</option>
                          <option>Plastic Recycle Shredder</option>
                          <option>Special Purpose Machine (SPM)</option>
                          <option>Custom Machine Design & Engineering</option>
                          <option>IoT Smart Monitoring Controller</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1f2853] uppercase mb-1.5">
                          Required Daily Capacity
                        </label>
                        <select
                          value={formData.wasteCapacity}
                          onChange={(e) => setFormData({ ...formData, wasteCapacity: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ff7026] bg-white text-sm font-semibold text-[#1f2853]"
                        >
                          <option>10 kg / day (Villas / Small Cafeterias)</option>
                          <option>25 kg / day (Boutique Hotels / Clinics)</option>
                          <option>50 kg / day (Restaurants / 50 Flats)</option>
                          <option>100 kg / day (Societies / Dining Halls)</option>
                          <option>250 kg / day (Tech Parks / Resorts)</option>
                          <option>500 kg / day (Townships / Food Parks)</option>
                          <option>1000 kg / day (Municipal / Wholesale Mandi)</option>
                          <option>Custom SPM Specification</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1f2853] uppercase mb-1.5">
                        Specific Requirements / Project Notes
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Mention any site dimensions, electrical supply (3-phase/single phase), special waste composition..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ff7026] bg-white text-sm"
                      ></textarea>
                    </div>

                    {errorMessage && (
                      <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                        {errorMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white caxra-gradient caxra-glow hover:opacity-95 transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Dispatching Inquiry to sales@caxra.in...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Machinery Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-center text-slate-500">
                      🔒 Official technical datasheets and price schedules are sent directly from the Caxra engineering office.
                    </p>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
