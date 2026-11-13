import React, { useState } from 'react';
import { Check, ArrowRight, Zap, Info, Flame, Droplets, Shield, Award } from 'lucide-react';

export default function CapacityMatrix({ onOpenQuote }) {
  const models = [
    {
      capacity: '10 kg/day',
      modelNumber: 'CMS-OWC-010',
      badge: 'Compact',
      idealFor: 'Small Cafeterias, Villas, Small Clinics, Quick Service Restaurants',
      wasteCapacityPerBatch: '10 kg / batch',
      curingTime: '24 Hours',
      motorPower: '1.0 HP Heavy-Duty Geared Motor',
      heaterPower: '1.5 kW Ceramic Band Heaters',
      dimensions: '850 x 600 x 950 mm',
      footprint: 'Approx. 6 sq. ft.',
      reduction: '85-90% by volume',
      recommended: false
    },
    {
      capacity: '25 kg/day',
      modelNumber: 'CMS-OWC-025',
      badge: 'Popular',
      idealFor: 'Boutique Hotels, 15-25 Apartments, Medium Canteens, Pre-schools',
      wasteCapacityPerBatch: '25 kg / batch',
      curingTime: '24 Hours',
      motorPower: '1.5 HP Helical Geared Motor',
      heaterPower: '2.0 kW Heaters',
      dimensions: '1100 x 750 x 1100 mm',
      footprint: 'Approx. 9 sq. ft.',
      reduction: '85-90% by volume',
      recommended: false
    },
    {
      capacity: '50 kg/day',
      modelNumber: 'CMS-OWC-050',
      badge: 'Best Value',
      idealFor: 'Restaurants, 50 Flats Residential Societies, Hostels, Hospitals',
      wasteCapacityPerBatch: '50 kg / batch',
      curingTime: '24 Hours',
      motorPower: '2.0 HP Helical Geared Motor',
      heaterPower: '3.0 kW Multi-zone Heaters',
      dimensions: '1350 x 850 x 1200 mm',
      footprint: 'Approx. 13 sq. ft.',
      reduction: '85-90% by volume',
      recommended: true
    },
    {
      capacity: '100 kg/day',
      modelNumber: 'CMS-OWC-100',
      badge: 'Commercial',
      idealFor: 'Large Restaurants, 100-150 Flats Societies, Corporate Dining Halls',
      wasteCapacityPerBatch: '100 kg / batch',
      curingTime: '24 Hours',
      motorPower: '3.0 HP Planetary Geared Motor',
      heaterPower: '4.5 kW Ceramic Band Heaters',
      dimensions: '1650 x 950 x 1350 mm',
      footprint: 'Approx. 18 sq. ft.',
      reduction: '85-90% by volume',
      recommended: false
    },
    {
      capacity: '250 kg/day',
      modelNumber: 'CMS-OWC-250',
      badge: 'Industrial',
      idealFor: 'Tech Parks, Gated Communities (250+ units), Large Resorts, Colleges',
      wasteCapacityPerBatch: '250 kg / batch',
      curingTime: '24 Hours',
      motorPower: '5.0 HP Heavy-Duty Planetary',
      heaterPower: '7.5 kW Multi-Stage Heaters',
      dimensions: '2100 x 1200 x 1550 mm',
      footprint: 'Approx. 28 sq. ft.',
      reduction: '85-90% by volume',
      recommended: false
    },
    {
      capacity: '500 kg/day',
      modelNumber: 'CMS-OWC-500',
      badge: 'Heavy Plant',
      idealFor: 'Mega Townships (500+ Flats), Convention Centers, Vegetable Markets',
      wasteCapacityPerBatch: '500 kg / batch',
      curingTime: '24 Hours',
      motorPower: '7.5 HP Planetary Drive',
      heaterPower: '12 kW Zone Controlled',
      dimensions: '2700 x 1450 x 1800 mm',
      footprint: 'Approx. 45 sq. ft.',
      reduction: '85-90% by volume',
      recommended: false
    },
    {
      capacity: '1000 kg/day',
      modelNumber: 'CMS-OWC-1000',
      badge: 'Municipal / Mega',
      idealFor: 'Municipal Wards, Wholesale Mandis, Industrial Mega Hubs, Food Parks',
      wasteCapacityPerBatch: '1000 kg / batch',
      curingTime: '24 Hours',
      motorPower: '12.5 HP Heavy Planetary',
      heaterPower: '20 kW Multi-zone Heaters',
      dimensions: '3600 x 1800 x 2200 mm',
      footprint: 'Approx. 72 sq. ft.',
      reduction: '85-90% by volume',
      recommended: false
    }
  ];

  const [selectedIdx, setSelectedIdx] = useState(2); // default to 50 kg/day

  const current = models[selectedIdx];

  return (
    <section id="capacities" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            Organic Waste Composting Range
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Composting Capacities from <span className="text-amber-400">10 kg/day to 1000 kg/day</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Choose your daily organic waste volume to see detailed technical specifications, power ratings, and dimensions.
          </p>

          {/* Quick Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {models.map((m, idx) => (
              <button
                key={m.modelNumber}
                onClick={() => setSelectedIdx(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedIdx === idx
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 scale-105'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                {m.capacity}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Capacity Detail Panel */}
        <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Specs Summary */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-3xl sm:text-4xl font-extrabold text-amber-400">
                  {current.capacity}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-700 text-slate-200">
                  Model: {current.modelNumber}
                </span>
                {current.recommended && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Most Popular Choice
                  </span>
                )}
              </div>

              {/* Ideal Applications */}
              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/60">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-1">
                  Ideal For:
                </span>
                <p className="text-sm text-slate-200 font-medium">
                  {current.idealFor}
                </p>
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-700/50">
                  <span className="text-slate-400 block">Digestion & Curing Time</span>
                  <span className="text-base font-bold text-white mt-0.5 block">{current.curingTime}</span>
                  <span className="text-[11px] text-emerald-400 font-medium">Automatic thermophilic cycle</span>
                </div>

                <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-700/50">
                  <span className="text-slate-400 block">Waste Volume Reduction</span>
                  <span className="text-base font-bold text-white mt-0.5 block">{current.reduction}</span>
                  <span className="text-[11px] text-amber-400 font-medium">Converts waste to organic manure</span>
                </div>

                <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-700/50">
                  <span className="text-slate-400 block">Drive Transmission</span>
                  <span className="text-sm font-bold text-white mt-0.5 block">{current.motorPower}</span>
                  <span className="text-[11px] text-slate-400">Heavy torque, continuous duty</span>
                </div>

                <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-700/50">
                  <span className="text-slate-400 block">Heating & Aeration</span>
                  <span className="text-sm font-bold text-white mt-0.5 block">{current.heaterPower}</span>
                  <span className="text-[11px] text-slate-400">Thermostat regulated PID control</span>
                </div>

                <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-700/50">
                  <span className="text-slate-400 block">Dimensions (L x W x H)</span>
                  <span className="text-sm font-bold text-white mt-0.5 block">{current.dimensions}</span>
                  <span className="text-[11px] text-slate-400">Compact footprint design</span>
                </div>

                <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-700/50">
                  <span className="text-slate-400 block">Space Required</span>
                  <span className="text-sm font-bold text-white mt-0.5 block">{current.footprint}</span>
                  <span className="text-[11px] text-slate-400">Allows comfortable operation</span>
                </div>
              </div>

            </div>

            {/* Right Action & Value Box */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-700 space-y-6">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">
                  Configuration Summary
                </span>
                <h4 className="text-xl font-bold text-white mt-1">
                  Ready for Turnkey Installation
                </h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Every Caxra composting machine includes starter bacterial media, complete internal SS 304 fabrication, automatic PLC controls, and on-site operator training.
                </p>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-[10px]">✓</div>
                  <span>100% In-House Design & Manufacturing in India</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-[10px]">✓</div>
                  <span>Optional IoT Live Telemetry Add-on Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-[10px]">✓</div>
                  <span>Full Comprehensive Warranty + Annual Maintenance</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-xl shadow-orange-500/25 transition-all duration-200"
                >
                  <span>Request Quote for {current.capacity}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2.5">
                  Fast quotation response within 2 business hours
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

