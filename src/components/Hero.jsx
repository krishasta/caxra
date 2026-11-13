import React from 'react';
import { ArrowRight, Cpu, Settings, Recycle, CheckCircle2, Activity, Sparkles, Layers, ShieldCheck } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-[#101935] to-[#0c142b] text-white pt-16 pb-24 lg:pt-20 lg:pb-32">
      {/* Decorative background grid and glowing circles */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Radial ambient glow matching the logo's orange/amber swirl */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Story */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-xs sm:text-sm text-slate-200 shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="font-semibold text-amber-400">Engineering & Manufacturing Excellence</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 font-medium">Made in India</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Intelligent Composting &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-amber-200">
                Special Purpose Machines
              </span>
            </h1>

            {/* Official Company Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
              <strong className="text-white font-semibold">Caxra Machine Systems</strong> is an engineering and manufacturing company that designs, builds and supports automatic organic waste composting machines from <span className="text-amber-400 font-semibold">10 kg/day to 1000 kg/day</span>. We also deliver heavy-duty plastic recycle shredders, custom Special Purpose Machines (SPM), precision machine design, and IoT-based real-time monitoring solutions.
            </p>

            {/* Key Service Chips */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700">
                <Recycle className="w-3.5 h-3.5 text-emerald-400" />
                Automatic Composting (10–1000 kg/day)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700">
                <Settings className="w-3.5 h-3.5 text-amber-400" />
                Plastic Shredders & SPMs
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700">
                <Cpu className="w-3.5 h-3.5 text-blue-400" />
                IoT Telemetry & Analytics
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-xl shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Request Machine Specifications</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 transition-colors"
              >
                <span>Explore Products</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-800/80 text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-amber-400">10–1000</p>
                <p className="text-xs text-slate-400 mt-0.5">kg/day Capacities</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">85–90%</p>
                <p className="text-xs text-slate-400 mt-0.5">Volume Reduction</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400">24 Hrs</p>
                <p className="text-xs text-slate-400 mt-0.5">Rapid Cycle Time</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card: Machine Overview */}
              <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/70 rounded-2xl p-6 shadow-2xl backdrop-blur-xl space-y-6">
                
                {/* Visual Header with Logo Emblem */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-700/60">
                  <div className="flex items-center space-x-3">
                    <img 
                      src="/caxra-logo.png" 
                      alt="Caxra Logo" 
                      className="h-10 w-auto bg-white/10 p-1 rounded-lg backdrop-blur"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-wide">Caxra Smart Engine</h4>
                      <p className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                        IoT Telemetry Active
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-semibold text-amber-300 bg-amber-500/15 border border-amber-500/30 rounded-full">
                    SS 304 Grade
                  </span>
                </div>

                {/* Machine Interactive Illustration Card */}
                <div className="bg-slate-950/70 rounded-xl p-5 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>SYSTEM IDENTIFIER</span>
                    <span className="text-amber-400 font-bold">CMS-OWC-500</span>
                  </div>

                  {/* Graphic Progress & Diagnostics */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300">Automatic Aerobic Composting</span>
                        <span className="text-amber-400 font-semibold">Active Cycle (88%)</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                        <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-2.5 rounded-full w-[88%]"></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800">
                        <span className="text-[11px] text-slate-400 block">Digester Temp</span>
                        <span className="text-lg font-bold text-white">58.4°C</span>
                        <span className="text-[10px] text-emerald-400 block font-medium">Optimal Thermophilic</span>
                      </div>
                      <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800">
                        <span className="text-[11px] text-slate-400 block">Moisture Level</span>
                        <span className="text-lg font-bold text-white">52%</span>
                        <span className="text-[10px] text-blue-400 block font-medium">Auto-Regulated</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 text-[11px] text-slate-400 border-t border-slate-800/80">
                    <span className="flex items-center gap-1">
                      <Activity className="w-3.5 h-3.5 text-amber-400" />
                      Heater & Agitator Synchronized
                    </span>
                    <span className="text-emerald-400 font-semibold">Zero Odor System</span>
                  </div>
                </div>

                {/* Sub Features */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-start gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>Heavy Duty Planetary Gearbox</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>PLC + Cloud IoT Dashboard</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>In-Built Shredder Option</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>Turnkey On-Site Deployment</span>
                  </div>
                </div>

              </div>

              {/* Floating Pill Badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-white text-slate-800 py-2.5 px-4 rounded-xl shadow-xl border border-slate-100 items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                  ⚡
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 leading-tight">Energy Efficient Operation</p>
                  <p className="text-[11px] text-slate-500">Up to 40% lower power footprint</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

