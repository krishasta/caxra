import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Recycle, 
  Settings, 
  Cpu, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  Utensils, 
  Hotel, 
  Hospital, 
  GraduationCap,
  Sparkles,
  Zap,
  Layers
} from 'lucide-react';

export default function HomePage({ onOpenQuote }) {
  // Section 1: Core Machines & Systems Portfolio
  const machines = [
    {
      id: 'owc',
      badge: 'Flagship Series',
      title: 'Automatic Organic Waste Composters (OWC)',
      capacity: '10 kg/day to 1000 kg/day',
      desc: 'Rapid 24-hour in-vessel aerobic composting with food-grade SS 304 contact chamber, heavy-duty planetary speed reduction drive, and zero-odor activated carbon filtration.',
      bullets: [
        '85% to 90% organic waste volume reduction in 24 hours',
        'Food-grade heavy gauge Stainless Steel (SS 304) construction',
        'Thermostat regulated PID heating jacket & multi-stage exhaust',
        'Capacities: 10, 25, 50, 100, 250, 500, 1000 kg/day'
      ],
      linkText: 'Configure Models & Sizing',
      linkUrl: '/products',
      isPrimary: true
    },
    {
      id: 'shredder',
      badge: 'High Torque',
      title: 'Industrial Plastic Recycle Shredders',
      capacity: '20 kg/hr to 500 kg/hr',
      desc: 'Heavy-duty single and twin-shaft shredders engineered for tough size reduction of PET bottles, HDPE containers, rigid plastics, films, and packaging waste.',
      bullets: [
        'Hardened alloy steel blades (D2 / EN31 tool steel)',
        'Automatic overload reverse rotation logic to prevent jamming',
        'Heavy-duty industrial gearbox for 24/7 continuous duty',
        'Customizable output screen sizes (6mm to 40mm)'
      ],
      linkText: 'Explore Shredder Specs',
      linkUrl: '/products',
      isPrimary: false
    },
    {
      id: 'spm',
      badge: 'Custom SPM',
      title: 'Special Purpose Machines (SPM)',
      capacity: 'Turnkey Automation',
      desc: 'Bespoke automated machinery engineered around your specific manufacturing process — assembly automation, cutting, punching, conveying, and precision fixtures.',
      bullets: [
        'Siemens / Delta / Mitsubishi PLC & HMI automation',
        'Pneumatic, hydraulic, and servo-electric motion options',
        'Rugged fabricated machine frames with vibration dampening',
        'Turnkey factory acceptance test (FAT) & site commissioning'
      ],
      linkText: 'Custom SPM Consultation',
      linkUrl: '/contact',
      isPrimary: false
    },
    {
      id: 'iot',
      badge: 'Industry 4.0',
      title: 'IoT-Based Smart Monitoring Solutions',
      capacity: 'Cloud Connected',
      desc: 'Real-time telemetry and predictive maintenance. Embedded controllers track chamber temperatures, motor currents, cycles, and send automated mobile alerts.',
      bullets: [
        'Live temperature and moisture sensor data streaming',
        'Cloud web dashboard and mobile app remote monitoring',
        'Automated SMS/Email alerts for maintenance & fault triggers',
        'Historical cycle logs and waste reduction compliance reports'
      ],
      linkText: 'View IoT Solutions',
      linkUrl: '/contact',
      isPrimary: false
    }
  ];

  // Section 2: Industries & Facilities Served
  const industries = [
    {
      icon: <Hotel className="w-6 h-6 text-[#ff7026]" />,
      title: 'Hotels & Resorts',
      desc: 'Commercial kitchens, luxury resorts, banquet halls & food waste management.'
    },
    {
      icon: <Building2 className="w-6 h-6 text-[#ff7026]" />,
      title: 'Gated Townships & Societies',
      desc: 'Residential apartment complexes from 50 to 1000+ flats with on-site composting.'
    },
    {
      icon: <Utensils className="w-6 h-6 text-[#ff7026]" />,
      title: 'IT Parks & Corporate Canteens',
      desc: 'Multi-tenant business campuses, cafeteria dining halls & green compliance.'
    },
    {
      icon: <Hospital className="w-6 h-6 text-[#ff7026]" />,
      title: 'Hospitals & Healthcare',
      desc: 'Sanitary on-site dietary and kitchen waste management with zero foul odor.'
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-[#ff7026]" />,
      title: 'Universities & Campuses',
      desc: 'Student hostels, college canteens, and educational institutions.'
    },
    {
      icon: <Recycle className="w-6 h-6 text-[#ff7026]" />,
      title: 'Municipalities & Produce Markets',
      desc: 'Wholesale APMC vegetable mandis, ward transfer stations & central facilities.'
    }
  ];

  return (
    <div className="bg-white text-[#1f2853]">
      
      {/* =========================================================================
          MAIN HERO SECTION (Okuma Split Style in Soft Light Orange)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200">
        
        {/* Clean Diagonal Cut on the Right in Clean Light Orange */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[54%] hidden md:block z-0 pointer-events-none">
          <div 
            className="w-full h-full relative overflow-hidden transition-all duration-300"
            style={{
              clipPath: 'polygon(16% 0%, 100% 0%, 100% 100%, 0% 100%)',
              background: 'linear-gradient(135deg, #fff1e5 0%, #fed7aa 45%, #fdb26b 100%)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/20 pointer-events-none"></div>
          </div>
        </div>

        {/* Mobile Background Fallback */}
        <div className="md:hidden absolute inset-0 z-0 bg-gradient-to-b from-white via-white to-orange-50/80"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[580px] lg:min-h-[640px] py-12 lg:py-16">
            
            {/* Left Column: Bold Typography & Exact Copy */}
            <div className="lg:col-span-6 space-y-5 text-left pr-0 lg:pr-6">
              
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#ff7026]">
                <span>SERIES CMS-OWC</span>
                <span className="text-slate-300">•</span>
                <span>AUTOMATIC COMPOSTING</span>
              </div>

              <div className="space-y-0">
                <h1 className="text-4xl sm:text-6xl lg:text-6xl font-black text-[#1f2853] tracking-tight leading-[1.0] font-industrial uppercase">
                  CAXRA
                </h1>
                <h2 className="text-4xl sm:text-6xl lg:text-6xl font-black text-[#1f2853] tracking-tight leading-[1.0] font-industrial uppercase">
                  OWC-SERIES
                </h2>
              </div>

              <p className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                Open Possibilities for Smart, On-Site Waste-to-Resource Conversion.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-xl">
                <strong className="text-slate-900 font-semibold">Caxra Machine Systems</strong> is an engineering and manufacturing company that designs, builds and supports automatic organic waste composting machines from <span className="text-[#ff7026] font-bold">10 kg/day to 1000 kg/day</span>. It also delivers plastic recycle shredders, special purpose machines (SPM), custom machine design and IoT-based monitoring solutions.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  to="/products"
                  className="px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-white caxra-gradient caxra-glow hover:opacity-95 transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>EXPLORE PRODUCTS</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={onOpenQuote}
                  className="px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-[#1f2853] bg-white hover:bg-slate-50 border-2 border-[#1f2853] transition-colors shadow-2xs cursor-pointer"
                >
                  REQUEST A QUOTE
                </button>
              </div>

              {/* Key Quick Stats */}
              <div className="pt-4 grid grid-cols-3 gap-2 sm:flex sm:items-center sm:gap-8 border-t border-slate-200 text-xs">
                <div>
                  <span className="font-extrabold text-[#1f2853] text-sm sm:text-base block font-industrial">10–1000 KG</span>
                  <span className="text-slate-500 font-medium text-[11px] sm:text-xs">Daily Capacities</span>
                </div>
                <div>
                  <span className="font-extrabold text-[#ff7026] text-sm sm:text-base block font-industrial">24 HOURS</span>
                  <span className="text-slate-500 font-medium text-[11px] sm:text-xs">Thermophilic Cycle</span>
                </div>
                <div>
                  <span className="font-extrabold text-emerald-600 text-sm sm:text-base block font-industrial">85–90%</span>
                  <span className="text-slate-500 font-medium text-[11px] sm:text-xs">Volume Reduction</span>
                </div>
              </div>

            </div>

            {/* Right Column: 3D Composter Machine with Live Waste Digestion */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="w-full h-[480px] sm:h-[540px] lg:h-[600px] relative overflow-hidden flex items-center justify-center">
                <iframe
                  src="/3d-hero.html"
                  title="Caxra 3D Composter Machine - Waste Digestion"
                  className="w-full h-full border-0 relative z-10 pointer-events-auto"
                  loading="eager"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: OUR MACHINES & ENGINEERED SYSTEMS
          ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#ff7026]">
                Industrial Machinery Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1f2853] font-industrial tracking-tight uppercase mt-1">
                Our Machines & Systems
              </h2>
            </div>
            <Link
              to="/products"
              className="text-xs font-bold text-[#ff7026] hover:underline uppercase tracking-wider flex items-center gap-1.5"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {machines.map((m) => (
              <div
                key={m.id}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-7 sm:p-9 flex flex-col justify-between hover:shadow-xl hover:border-orange-200 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-white text-[#ff7026] border border-orange-200 shadow-2xs">
                      {m.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                      {m.capacity}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#1f2853] font-industrial uppercase mb-2 group-hover:text-[#ff7026] transition-colors">
                    {m.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {m.desc}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    {m.bullets.map((b, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#ff7026] flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-4">
                  <Link
                    to={m.linkUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1f2853] hover:text-[#ff7026] uppercase tracking-wider font-industrial transition-colors"
                  >
                    <span>{m.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={onOpenQuote}
                    className="px-5 py-2.5 rounded-full text-xs font-bold text-white caxra-gradient shadow-xs hover:shadow-md transition-all cursor-pointer"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: INDUSTRIES & FACILITIES WE SERVE
          ========================================================================= */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#ff7026]">
              Industries Served
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1f2853] font-industrial tracking-tight uppercase mt-1">
              Engineered for Every Facility
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Eliminate daily wet organic waste hauling fees, logistical bottlenecks, and landfill emissions right on-site.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-[#ff7026] hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#ff7026] flex items-center justify-center flex-shrink-0 border border-orange-100">
                  {ind.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#1f2853] text-base font-industrial uppercase">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Consultation CTA Banner */}
          <div className="mt-14 bg-gradient-to-r from-[#1f2853] to-[#2d3a77] rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#ff9900]">
                Custom Sizing & Evaluation
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
                Ready to Setup On-Site Composting or Machinery?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Speak directly with a Caxra application engineer for waste audits, electrical ratings, space footprint layouts, and turnkey proposals.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenQuote}
                className="px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white caxra-gradient shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Request Instant Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <Link
                to="/products"
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
              >
                Explore Models
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
