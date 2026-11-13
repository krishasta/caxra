import React, { useState, useRef } from 'react';
import { 
  RotateCw, 
  Eye, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Layers,
  Zap,
  Activity,
  Sliders,
  Maximize2
} from 'lucide-react';

export default function ProductsPage({ onOpenQuote }) {
  // Standard Composting Capacities from 10 kg/day to 1000 kg/day
  const capacities = [
    {
      kg: 10,
      model: 'CMS-OWC-010',
      label: '10 kg/day',
      subtitle: 'Compact Commercial Composter',
      scale: { sx: 0.68, sy: 0.70, sz: 0.68 },
      dimensions: '850 × 650 × 900 mm',
      footprint: '0.55 m²',
      weight: '~180 kg',
      power: '0.5 HP Single Phase 230V',
      heater: '1.0 kW Ceramic Band Jacket',
      cycleTime: '24 Hours',
      reduction: '85% to 90%',
      chamber: 'SS 304 Food Grade',
      applications: ['Eco Villas', 'School Canteens', 'Executive Guesthouses', 'Cafes & Bakeries'],
      badge: 'Compact Urban'
    },
    {
      kg: 25,
      model: 'CMS-OWC-025',
      label: '25 kg/day',
      subtitle: 'Commercial Food Waste Composter',
      scale: { sx: 0.82, sy: 0.84, sz: 0.82 },
      dimensions: '1000 × 800 × 1100 mm',
      footprint: '0.80 m²',
      weight: '~260 kg',
      power: '1.0 HP Single / 3-Phase',
      heater: '1.5 kW Ceramic Band Jacket',
      cycleTime: '24 Hours',
      reduction: '85% to 90%',
      chamber: 'SS 304 Food Grade',
      applications: ['Restaurants & Fast Food', 'Boutique Hotels', 'Mid-size Canteens', 'Clinics'],
      badge: 'Commercial'
    },
    {
      kg: 50,
      model: 'CMS-OWC-050',
      label: '50 kg/day',
      subtitle: 'Institutional Composting System',
      scale: { sx: 1.0, sy: 1.0, sz: 1.0 },
      dimensions: '1200 × 1000 × 1300 mm',
      footprint: '1.20 m²',
      weight: '~420 kg',
      power: '2.0 HP Helical Geared Motor',
      heater: '2.5 kW Ceramic Band Jacket',
      cycleTime: '24 Hours',
      reduction: '85% to 90%',
      chamber: 'SS 304 Food Grade',
      applications: ['Hotels & Banquets', 'Colleges & Hostels', 'Societies (50–100 Flats)', 'Corporate Canteens'],
      badge: 'Most Popular'
    },
    {
      kg: 100,
      model: 'CMS-OWC-100',
      label: '100 kg/day',
      subtitle: 'High-Capacity On-Site Composter',
      scale: { sx: 1.25, sy: 1.15, sz: 1.22 },
      dimensions: '1550 × 1200 × 1450 mm',
      footprint: '1.86 m²',
      weight: '~650 kg',
      power: '3.0 HP Heavy Geared Motor',
      heater: '4.0 kW Ceramic Band Jacket',
      cycleTime: '24 Hours',
      reduction: '85% to 90%',
      chamber: 'SS 304 Food Grade',
      applications: ['IT Tech Parks', 'Gated Communities (200–400 Flats)', 'Hospitals', 'Central Kitchens'],
      badge: 'High Demand'
    },
    {
      kg: 250,
      model: 'CMS-OWC-250',
      label: '250 kg/day',
      subtitle: 'Heavy-Duty Bulk Waste Composter',
      scale: { sx: 1.55, sy: 1.28, sz: 1.45 },
      dimensions: '2000 × 1400 × 1650 mm',
      footprint: '2.80 m²',
      weight: '~1100 kg',
      power: '5.0 HP Planetary Heavy Drive',
      heater: '6.0 kW Ceramic Band Jacket',
      cycleTime: '24 Hours',
      reduction: '85% to 90%',
      chamber: 'SS 304 Food Grade',
      applications: ['Mega Townships', 'Convention Centers', 'Resorts', 'Wholesale Markets'],
      badge: 'Heavy Duty'
    },
    {
      kg: 500,
      model: 'CMS-OWC-500',
      label: '500 kg/day',
      subtitle: 'Municipal & Industrial Composter',
      scale: { sx: 1.85, sy: 1.44, sz: 1.68 },
      dimensions: '2600 × 1700 × 1850 mm',
      footprint: '4.42 m²',
      weight: '~1900 kg',
      power: '7.5 HP Industrial Planetary Drive',
      heater: '9.0 kW Ceramic Band Jacket',
      cycleTime: '24 Hours',
      reduction: '85% to 90%',
      chamber: 'SS 304 Food Grade',
      applications: ['Municipal Ward Transfer Stations', 'APMC Mandis', 'University Campuses', 'Industrial Hubs'],
      badge: 'Municipal Grade'
    },
    {
      kg: 1000,
      model: 'CMS-OWC-1000',
      label: '1000 kg/day',
      subtitle: 'Centralized Mega Waste Processing Plant',
      scale: { sx: 2.20, sy: 1.62, sz: 1.95 },
      dimensions: '3300 × 2000 × 2100 mm',
      footprint: '6.60 m²',
      weight: '~3200 kg',
      power: '10.0 HP Planetary Helical Geared Motor',
      heater: '14.0 kW Ceramic Band Jacket',
      cycleTime: '24 Hours',
      reduction: '85% to 90%',
      chamber: 'SS 304 Food Grade',
      applications: ['Central Solid Waste Facilities', 'Agro-Food Processing Plants', 'Mega Zonal Composting'],
      badge: 'Mega Industrial'
    }
  ];

  const [selectedKg, setSelectedKg] = useState(50);
  const [activeView, setActiveView] = useState('iso');
  const [isRotating, setIsRotating] = useState(true);
  const [isLidOpen, setIsLidOpen] = useState(false);
  const iframeRef = useRef(null);

  const currentCap = capacities.find(c => c.kg === selectedKg) || capacities[2];

  // Send message to 3D configurator iframe
  const sendCapacityToIframe = (cap) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage({
        type: 'SET_CAPACITY',
        model: cap.model,
        capacity: cap.label,
        sx: cap.scale.sx,
        sy: cap.scale.sy,
        sz: cap.scale.sz
      }, '*');
    }
  };

  const handleSelectCapacity = (cap) => {
    setSelectedKg(cap.kg);
    sendCapacityToIframe(cap);
  };

  const handleIframeLoaded = () => {
    sendCapacityToIframe(currentCap);
  };

  const set3DView = (viewName) => {
    setActiveView(viewName);
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage({
        type: 'SET_VIEW',
        view: viewName
      }, '*');
    }
  };

  const handleToggleRotate = () => {
    setIsRotating(!isRotating);
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage({
        type: 'TOGGLE_ROTATE'
      }, '*');
    }
  };

  const handleToggleLid = () => {
    setIsLidOpen(!isLidOpen);
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage({
        type: 'TOGGLE_LID'
      }, '*');
    }
  };

  const handleResetView = () => {
    setActiveView('iso');
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage({
        type: 'RESET_VIEW'
      }, '*');
    }
  };

  return (
    <div className="bg-white min-h-screen text-[#1f2853]">

      {/* Main Flagship 3D Configurator Stage */}
      <section className="pt-6 sm:pt-8 pb-14 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Sleek Segmented Capacity Selector Track */}
          <div className="mb-6 bg-slate-100/80 p-1.5 sm:p-2 rounded-2xl sm:rounded-full border border-slate-200/80 shadow-inner">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-1.5">
              {capacities.map((cap) => {
                const isSelected = cap.kg === selectedKg;
                return (
                  <button
                    key={cap.kg}
                    onClick={() => handleSelectCapacity(cap)}
                    className={`py-2.5 px-3 rounded-xl sm:rounded-full text-center transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-[#1f2853] text-white shadow-md font-bold'
                        : 'text-slate-600 hover:text-[#1f2853] hover:bg-white/80 font-semibold'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-1.5">
                      <span className="text-sm sm:text-base font-extrabold tracking-tight">
                        {cap.kg} <span className="text-xs font-semibold">KG</span>
                      </span>
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff7026] animate-pulse"></span>
                      )}
                    </div>
                    <div className={`text-[10px] font-mono tracking-wide ${isSelected ? 'text-[#ff9900]' : 'text-slate-400'}`}>
                      {cap.model}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Unified 3D Studio & Live Specification Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden p-6 sm:p-8 lg:p-10">

            {/* Left 3D Viewport (Col 7 / 12) */}
            <div className="lg:col-span-7 flex flex-col justify-between relative bg-gradient-to-b from-slate-50/60 to-orange-50/20 rounded-2xl border border-slate-200/60 p-4 sm:p-6 overflow-hidden">
              
              {/* Overlay Top Bar */}
              <div className="flex items-center justify-between gap-2 z-10 mb-2">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 text-[#1f2853] font-bold text-xs shadow-2xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block mr-1.5"></span>
                    {currentCap.model}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-orange-50 text-[#ff7026] font-semibold text-xs border border-orange-200">
                    Scale: {currentCap.scale.sx}x
                  </span>
                </div>

                <div className="text-xs font-medium text-slate-500 bg-white/80 px-3 py-1 rounded-full border border-slate-200/60">
                  {currentCap.dimensions}
                </div>
              </div>

              {/* 3D Model Canvas Viewport */}
              <div className="w-full h-[440px] sm:h-[500px] lg:h-[540px] relative">
                <iframe
                  ref={iframeRef}
                  src="/3d-configurator.html"
                  title="Caxra 3D Product Configurator"
                  className="w-full h-full border-0 rounded-xl"
                  onLoad={handleIframeLoaded}
                />
              </div>

              {/* Sleek Floating Bottom Controls Toolbar */}
              <div className="mt-3 pt-3 border-t border-slate-200/70 flex items-center justify-between flex-wrap gap-2 z-10">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {[
                    { id: 'iso', label: 'Isometric' },
                    { id: 'front', label: 'Front' },
                    { id: 'top', label: 'Top View' },
                  ].map(v => (
                    <button
                      key={v.id}
                      onClick={() => set3DView(v.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        activeView === v.id
                          ? 'bg-[#1f2853] text-white shadow-xs'
                          : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      {v.label}
                    </button>
                  ))}

                  <button
                    onClick={handleResetView}
                    className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 bg-white hover:bg-slate-100 border border-slate-200 cursor-pointer flex items-center gap-1"
                    title="Reset Camera"
                  >
                    <RotateCw className="w-3 h-3" />
                    Reset
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleToggleRotate}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      isRotating
                        ? 'bg-[#ff7026] text-white shadow-2xs'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {isRotating ? 'Rotating' : 'Auto Rotate'}
                  </button>

                  <button
                    onClick={handleToggleLid}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      isLidOpen
                        ? 'bg-[#1f2853] text-white'
                        : 'bg-orange-50 text-[#ff7026] hover:bg-orange-100 border border-orange-200'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    {isLidOpen ? 'Close Lid' : 'Open Lid'}
                  </button>
                </div>
              </div>

            </div>

            {/* Right Specification & Engineering Details (Col 5 / 12) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Product Header */}
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#ff7026] mb-1">
                  <span>AUTOMATIC COMPOSTING</span>
                  <span className="text-slate-300">•</span>
                  <span>{currentCap.badge}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-black text-[#1f2853] font-industrial tracking-tight">
                  {currentCap.model}
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  {currentCap.subtitle}
                </p>
              </div>

              {/* 4 Big Key Metric Callout Tiles */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Capacity
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-[#1f2853] font-heading mt-0.5 block">
                    {currentCap.kg} <span className="text-xs font-bold text-[#ff7026]">kg/day</span>
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">Daily organic waste</span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Digestion Cycle
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-[#1f2853] font-heading mt-0.5 block">
                    24 <span className="text-xs font-bold text-emerald-600">Hours</span>
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">Thermophilic aerobic</span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Volume Reduction
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-[#1f2853] font-heading mt-0.5 block">
                    85–90<span className="text-xs font-bold text-[#ff7026]">%</span>
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">Pathogen-free output</span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Floor Footprint
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-[#1f2853] font-heading mt-0.5 block">
                    {currentCap.footprint}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">Compact floor area</span>
                </div>
              </div>

              {/* Key Technical Specs List */}
              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Dimensions (L × W × H)</span>
                  <span className="font-bold text-[#1f2853] font-mono">{currentCap.dimensions}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Drive Motor & Transmission</span>
                  <span className="font-bold text-[#1f2853]">{currentCap.power}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Heating Jacket Load</span>
                  <span className="font-bold text-[#1f2853]">{currentCap.heater}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Internal Tank Material</span>
                  <span className="font-bold text-[#1f2853]">{currentCap.chamber}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Total Machine Weight</span>
                  <span className="font-bold text-[#1f2853]">{currentCap.weight}</span>
                </div>
              </div>

              {/* Recommended Applications */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Suitable For:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentCap.applications.map((app, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-medium"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Action */}
              <div className="pt-2 space-y-3">
                <button
                  onClick={onOpenQuote}
                  className="w-full py-3.5 px-6 rounded-xl caxra-gradient text-white text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Request Official Quotation for {currentCap.model}
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    1 Year Comprehensive Warranty
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-[#ff7026]" />
                    Pan-India Service & AMC
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Side-by-Side Model Comparison Table */}
          <div className="mt-12 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff7026]">
                  Standard Composter Series
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1f2853] font-heading mt-0.5">
                  Full Composting Range Comparison (10 – 1000 kg/day)
                </h2>
              </div>
              <p className="text-xs text-slate-500">
                Click any model row to switch and preview in 3D above.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase tracking-wider text-[11px]">
                    <th className="py-3 px-3">Model</th>
                    <th className="py-3 px-3">Daily Capacity</th>
                    <th className="py-3 px-3">Dimensions (L × W × H)</th>
                    <th className="py-3 px-3">Motor Rating</th>
                    <th className="py-3 px-3">Heater Load</th>
                    <th className="py-3 px-3">Footprint</th>
                    <th className="py-3 px-3 text-right">3D Preview</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {capacities.map((row) => {
                    const isActive = row.kg === selectedKg;
                    return (
                      <tr
                        key={row.kg}
                        onClick={() => handleSelectCapacity(row)}
                        className={`transition-colors cursor-pointer ${
                          isActive
                            ? 'bg-orange-50/70 font-semibold text-[#1f2853]'
                            : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <td className="py-3.5 px-3 font-mono font-bold text-[#1f2853]">
                          {row.model}
                        </td>
                        <td className="py-3.5 px-3 font-bold text-[#ff7026]">
                          {row.label}
                        </td>
                        <td className="py-3.5 px-3 font-mono">{row.dimensions}</td>
                        <td className="py-3.5 px-3">{row.power}</td>
                        <td className="py-3.5 px-3">{row.heater}</td>
                        <td className="py-3.5 px-3">{row.footprint}</td>
                        <td className="py-3.5 px-3 text-right">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelectCapacity(row);
                            }}
                            className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all ${
                              isActive
                                ? 'bg-[#ff7026] text-white shadow-2xs'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                          >
                            {isActive ? 'Active in 3D' : 'Select'}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* Engineering Consultation Banner */}
      <section className="bg-gradient-to-r from-[#1f2853] to-[#2b376b] py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">
            Need Custom Sizing or an SPM Machine?
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Caxra designs and manufactures automatic composting machines, plastic shredders, Special Purpose Machines (SPM), and IoT telemetry solutions.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="py-3 px-7 rounded-xl bg-gradient-to-r from-[#ff7026] to-[#ff9900] text-white text-xs sm:text-sm font-bold shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              Request Custom Machine Proposal
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
