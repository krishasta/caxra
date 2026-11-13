import React from 'react';
import { Cog, Wrench, Shield, CheckCircle, Cpu, Award, Factory, ArrowUpRight, Leaf, Sparkles } from 'lucide-react';

export default function About({ onOpenQuote }) {
  const capabilities = [
    {
      icon: <Factory className="w-6 h-6 text-orange-500" />,
      title: "In-House Engineering & Manufacturing",
      desc: "From concept design, 3D CAD modeling, FEA stress analysis to CNC machining and laser-cutting, every machine is built with precision under one roof."
    },
    {
      icon: <Leaf className="w-6 h-6 text-emerald-500" />,
      title: "Eco-Industrial Composting Tech",
      desc: "Engineered specifically to solve municipal, commercial, and industrial organic waste management with 85-90% volume reduction in 24 hours."
    },
    {
      icon: <Cpu className="w-6 h-6 text-blue-500" />,
      title: "IoT & Remote Cloud Telemetry",
      desc: "Embedded sensors track temperature, moisture, motor loads, and process cycles, relaying live analytics straight to client mobile and web dashboards."
    },
    {
      icon: <Wrench className="w-6 h-6 text-amber-500" />,
      title: "Custom SPMs & Prototyping",
      desc: "Tailored Special Purpose Machines designed for niche automation, plastic processing, sorting, feeding, and manufacturing bottlenecks."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
            About Caxra Machine Systems
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pioneering Intelligent Machinery & Sustainable Engineering
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            <strong className="text-slate-900">Caxra Machine Systems</strong> is an engineering and manufacturing company that designs, builds and supports automatic organic waste composting machines from 10 kg/day to 1000 kg/day. It also delivers plastic recycle shredders, special purpose machines (SPM), custom machine design and IoT-based monitoring solutions.
          </p>
        </div>

        {/* Content Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Visual/Identity Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#111a33] text-white rounded-3xl p-8 sm:p-10 shadow-2xl overflow-hidden border border-slate-800">
              
              {/* Decorative background swirl */}
              <div className="absolute -top-16 -right-16 w-52 h-52 bg-gradient-to-br from-orange-500/20 to-amber-500/0 rounded-full blur-2xl"></div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <img 
                    src="/caxra-logo.png" 
                    alt="Caxra Logo" 
                    className="w-16 h-16 object-contain bg-white/10 p-2 rounded-2xl backdrop-blur-md"
                  />
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-white">Caxra Machine Systems</h3>
                    <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mt-0.5">
                      Designed & Made in India
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  We empower residential communities, hospitality chains, educational institutions, tech parks, and industrial manufacturers to achieve <strong>zero-landfill waste goals</strong> and automate complex mechanical processes with unmatched reliability.
                </p>

                {/* Core Strengths */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">✓</div>
                    <span>Heavy-duty SS 304/316 contact chambers</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">✓</div>
                    <span>Proprietary odor management & multi-stage filtration</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">✓</div>
                    <span>End-to-end commissioning & nationwide AMC support</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">✓</div>
                    <span>Custom SPM mechanical & electrical automation</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block">Engineering Standard</span>
                    <span className="text-sm font-semibold text-white">ISO Compliant & Heavy-Duty</span>
                  </div>
                  <button 
                    onClick={onOpenQuote}
                    className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-xs font-semibold text-white transition-colors"
                  >
                    Consult Engineers
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right 4 Pillar Capabilities */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {capabilities.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Short Version Statement Bar */}
        <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-orange-200/70 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-orange-500/30">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block">Our Promise</span>
              <p className="text-slate-800 font-medium text-sm sm:text-base">
                "Caxra Machine Systems builds smart, on-site organic waste composting machines (10–1000 kg/day), custom SPMs and IoT solutions, designed and made in India."
              </p>
            </div>
          </div>
          <button
            onClick={onOpenQuote}
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold shadow-md transition-colors whitespace-nowrap"
          >
            Get Custom Proposal
          </button>
        </div>

      </div>
    </section>
  );
}

