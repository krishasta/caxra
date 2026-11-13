import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Factory, 
  Leaf, 
  Cpu, 
  Wrench, 
  Award, 
  CheckCircle, 
  ShieldCheck, 
  ArrowRight,
  Target,
  Sparkles,
  Users,
  CheckCircle2,
  Clock,
  Compass
} from 'lucide-react';

export default function AboutPage({ onOpenQuote }) {
  const pillars = [
    {
      icon: <Factory className="w-7 h-7 text-[#ff7026]" />,
      title: "In-House Precision Manufacturing",
      desc: "All structural chassis frames, precision transmission shafts, agitator blades, and heater jackets are engineered and fabricated in-house using heavy-gauge Stainless Steel (SS 304/316) and structural steel."
    },
    {
      icon: <Leaf className="w-7 h-7 text-emerald-500" />,
      title: "Clean-Tech Aerobic Composting",
      desc: "Engineered specifically to solve municipal, commercial, and industrial organic waste management with 85-90% volume reduction in an automated 24-hour thermophilic cycle."
    },
    {
      icon: <Cpu className="w-7 h-7 text-[#ff9900]" />,
      title: "IoT & Cloud Telemetry Systems",
      desc: "Embedded controllers track digestion temperature, moisture, agitator motor amperage, and cycles, streaming live analytics straight to client mobile and web portals."
    },
    {
      icon: <Wrench className="w-7 h-7 text-[#ff4e46]" />,
      title: "Custom SPMs & Automation",
      desc: "Tailored Special Purpose Machines designed for niche automation, plastic recycling shredders, sorting, feeding, and industrial production bottlenecks."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#ff7026] text-xs font-bold uppercase tracking-wider mb-4">
            About Caxra Machine Systems
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1f2853] font-heading tracking-tight">
            Engineering Precision Machines for a Cleaner Tomorrow
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We design, build, and support automatic organic waste composting machines (10–1000 kg/day), heavy shredders, and customized industrial SPMs — proudly in India.
          </p>
        </div>
      </section>

      {/* Main Corporate Story Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Corporate Identity Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="space-y-6">
                  
                  <div className="flex items-center gap-4">
                    <img 
                      src="/caxra-logo.png" 
                      alt="Caxra Machine Systems Logo" 
                      className="w-16 h-16 object-contain bg-white p-2 rounded-2xl shadow-sm border border-slate-200"
                    />
                    <div>
                      <h3 className="text-2xl font-bold font-heading text-[#1f2853]">Caxra</h3>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#ff7026] mt-0.5">
                        Machine Systems
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <span className="text-[11px] font-bold text-[#ff7026] uppercase tracking-wider block mb-1">
                      Our Identity & Summary
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed italic font-medium">
                      "Caxra Machine Systems builds smart, on-site organic waste composting machines (10–1000 kg/day), custom SPMs and IoT solutions, designed and made in India."
                    </p>
                  </div>

                  <div className="space-y-3 text-xs text-slate-700">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#ff7026] flex-shrink-0" />
                      <span>100% In-House Mechanical & Electrical Engineering</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#ff7026] flex-shrink-0" />
                      <span>Food-Grade SS 304 / 316 Stainless Steel Chambers</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#ff7026] flex-shrink-0" />
                      <span>Dedicated IoT Telemetry & Preventive Maintenance</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#ff7026] flex-shrink-0" />
                      <span>Nationwide Turnkey Deployment & Support</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-500 block">Manufacturing Base</span>
                      <span className="text-xs font-bold text-[#1f2853]">Bengaluru / Chennai Corridor, India</span>
                    </div>
                    <button
                      onClick={onOpenQuote}
                      className="px-4 py-2 rounded-xl caxra-gradient text-white text-xs font-bold shadow-md hover:opacity-95"
                    >
                      Consult Engineers
                    </button>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Column: Full Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-[#ff7026] uppercase tracking-wider">
                Corporate Profile
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1f2853] font-heading leading-tight">
                Sustainable Machinery Built for Decades of Heavy-Duty Operation
              </h2>
              
              <div className="prose text-slate-600 space-y-4 text-base leading-relaxed">
                <p className="text-lg font-semibold text-[#1f2853]">
                  <strong>Caxra Machine Systems</strong> is an engineering and manufacturing company that designs, builds and supports automatic organic waste composting machines from 10 kg/day to 1000 kg/day. It also delivers plastic recycle shredders, special purpose machines (SPM), custom machine design and IoT-based monitoring solutions.
                </p>
                <p>
                  We empower residential communities, hospitality chains, educational institutions, tech parks, and industrial manufacturers to achieve zero-landfill waste goals and automate mechanical processes with unmatched reliability.
                </p>
                <p>
                  From concept design, 3D CAD modeling, and FEA stress analysis to CNC machining, laser cutting, and final assembly, every machine is built with precision under one roof in India.
                </p>
              </div>

              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-200">
                <div>
                  <span className="text-2xl font-extrabold text-[#1f2853] font-heading block">10–1000</span>
                  <span className="text-xs text-slate-500 font-semibold">kg/day OWC Range</span>
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-[#ff7026] font-heading block">85-90%</span>
                  <span className="text-xs text-slate-500 font-semibold">Volume Reduction</span>
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-emerald-600 font-heading block">100%</span>
                  <span className="text-xs text-slate-500 font-semibold">Made in India</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4 Core Pillars Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#ff7026] uppercase tracking-wider">
              Engineering Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1f2853] font-heading mt-1">
              End-to-End Mechanical & Automation Expertise
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              We control every step of the product journey — from concept CAD drawings to long-term preventative maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((p, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs hover:shadow-lg hover:border-[#ff7026] transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1f2853] font-heading">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#141b3b] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="text-2xl font-bold font-heading text-white">
                Interested in our machines or custom SPM automation?
              </h3>
              <p className="text-slate-300 text-sm mt-1">
                Connect with our design engineering desk for custom specifications and turnkey quotes.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                to="/products"
                className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-[#1f2853] hover:bg-[#2b376d] border border-[#ff7026]/40 transition-colors"
              >
                Browse Products
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl text-xs font-bold text-white caxra-gradient caxra-glow hover:opacity-95 transition-all shadow-md"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
