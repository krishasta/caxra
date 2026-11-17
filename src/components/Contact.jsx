import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageSquare, ArrowRight, Loader2 } from 'lucide-react';
import { sendInquiryToSales } from '../services/contactService';

export default function Contact() {
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
      setErrorMessage('Could not deliver automatically via network. Please email info@caxra.in or call +91 99444 79115.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
            Contact & Request a Quote
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let's Discuss Your Machine Requirements
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Whether you need an on-site organic composter, an industrial shredder, or a custom special purpose machine, our engineering team is ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column: Direct Info & Location */}
          <div className="lg:col-span-5 space-y-8">

            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 space-y-6">
              <h3 className="text-xl font-bold text-slate-900">
                Caxra Machine Systems
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Engineering and manufacturing high-performance automatic composting machines, plastic recycle shredders, SPMs, and IoT telemetry solutions.
              </p>

              <div className="space-y-4 pt-2 text-sm text-slate-700">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-slate-900">Caxra Machine Systems Pvt Ltd</span>
                    <span className="text-slate-600 text-xs leading-relaxed">
                      29-3, Katoor Street, Kalapatti, Coimbatore - 641048, Tamil Nadu, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-slate-900">Direct Sales & Support</span>
                    <a href="tel:+919944479115" className="text-xs text-orange-600 hover:underline font-medium block">
                      +91 99444 79115
                    </a>
                    <a href="tel:+918023456789" className="text-xs text-slate-500 hover:underline block">
                      +91 (080) 2345 6789 (Office)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-slate-900">Email Inquiries</span>
                    <a href="mailto:info@caxra.in" className="text-xs text-orange-600 hover:underline font-medium block">
                      info@caxra.in
                    </a>
                    <a href="mailto:engineering@caxra.in" className="text-xs text-slate-500 hover:underline block">
                      engineering@caxra.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-slate-900">Operating Hours</span>
                    <span className="text-xs text-slate-600 block">
                      Monday – Saturday: 9:00 AM – 6:30 PM IST
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Action */}
              <div className="pt-4 border-t border-slate-200">
                <a
                  href="https://wa.me/919944479115?text=Hello%20Caxra%20Machine%20Systems,%20I%20am%20interested%20in%20your%20composting%20machines/SPMs"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Machine Quote Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-lg">

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Quote Request Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Our machine sales engineering team has received your inquiry for <strong>{formData.product}</strong> and will connect within 2 business hours.
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
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Request Detailed Specifications & Pricing
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out the form below and receive formal CAD layouts, electrical requirements, and pricing.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Company / Society / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Green Meadows Apartments / Taj Hotels"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rajesh@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone / Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 99444 79115"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Product of Interest
                      </label>
                      <select
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-sm font-medium"
                      >
                        <option>Automatic Composting Machine (10–1000 kg/day)</option>
                        <option>Plastic Recycle Shredder</option>
                        <option>Special Purpose Machine (SPM)</option>
                        <option>Custom Machine Design & Engineering</option>
                        <option>IoT Smart Monitoring Controller</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Required Daily Capacity
                      </label>
                      <select
                        value={formData.wasteCapacity}
                        onChange={(e) => setFormData({ ...formData, wasteCapacity: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-sm font-medium"
                      >
                        <option>10 kg / day (Villas / Small Cafeterias)</option>
                        <option>25 kg / day (Boutique Hotels / Clinics)</option>
                        <option>50 kg / day (Restaurants / 50 Flats)</option>
                        <option>100 kg / day (Societies / Dining Halls)</option>
                        <option>250 kg / day (Tech Parks / Resorts)</option>
                        <option>500 kg / day (Townships / Food Parks)</option>
                        <option>1000 kg / day (Municipal / Wholesale Mandi)</option>
                        <option>Custom / Not Sure (Need Audit)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Specific Requirements / Project Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mention any custom voltage requirements, space limitations, material shredding specs, or timeline..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-sm"
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
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-500/25 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending to info@caxra.in...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Machinery Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-500">
                    🔒 We respect your privacy. Technical drawings and pricing are shared strictly for evaluation.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

