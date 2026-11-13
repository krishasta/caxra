import React from 'react';
import { ShieldCheck, Cpu, Clock, Award, Settings2, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs({ onOpenQuote }) {
  const points = [
    {
      icon: <Award className="w-6 h-6 text-orange-500" />,
      title: "100% In-House Engineering & Manufacturing",
      desc: "No third-party relabeling. We engineer our chassis, agitator blades, heating zones, and control panels in our own facility in India."
    },
    {
      icon: <Cpu className="w-6 h-6 text-amber-500" />,
      title: "Smart IoT & Cloud Diagnostics",
      desc: "Our machines can be monitored anywhere via smartphone or browser. Real-time temperature logs, fault alerts, and automated preventive maintenance."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      title: "Heavy-Duty SS 304 Construction",
      desc: "Food-grade stainless steel interior tanks protect against corrosive food acids and moisture, ensuring 10+ years of operational durability."
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: "Guaranteed 24-Hour Composting Cycle",
      desc: "Optimized thermophilic digestion accelerates microbial activity to turn wet kitchen food waste into rich organic compost within 24 hours."
    },
    {
      icon: <Settings2 className="w-6 h-6 text-purple-500" />,
      title: "Custom SPMs & Automation Capabilities",
      desc: "Need a custom shredder, conveyor feeder, automatic bin lifter, or specialized machine? Our design team creates tailored SPMs for your factory."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-rose-500" />,
      title: "Turnkey Installation & Reliable AMC Support",
      desc: "From electrical hookup and initial microbial seeding to operator training and regular preventative maintenance, we stand firmly behind every machine."
    }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
            Why Choose Caxra Machine Systems
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineering Reliability You Can Trust Every Single Day
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            We bridge the gap between heavy industrial mechanical engineering and smart digital telemetry to deliver machines that perform without downtime.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5">
                  {pt.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {pt.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-orange-600">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Engineering Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Quote Banner */}
        <div className="mt-16 bg-[#16213e] rounded-3xl p-8 sm:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Need a Custom Machine or SPM?
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Have unique requirements for composting, shredding, or automation?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Talk directly with our senior mechanical and automation engineers to evaluate your waste volume, cycle requirements, or factory automation specs.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="flex-shrink-0 px-8 py-4 rounded-xl font-bold text-sm text-slate-900 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 shadow-lg shadow-orange-500/25 transition-all duration-200 transform hover:scale-105"
          >
            Speak With an Engineer
          </button>
        </div>

      </div>
    </section>
  );
}

