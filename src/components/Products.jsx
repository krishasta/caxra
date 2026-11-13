import React, { useState } from 'react';
import { 
  Recycle, 
  Settings, 
  Cpu, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Gauge, 
  Sparkles,
  BarChart3,
  Sliders
} from 'lucide-react';

export default function Products({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('all');

  const products = [
    {
      id: 'owc',
      category: 'composting',
      categoryLabel: 'Organic Waste Composting',
      title: 'Automatic Organic Waste Composting Machines (OWC)',
      capacity: '10 kg/day to 1000 kg/day',
      tagline: 'Fully automatic thermophilic aerobic conversion with 24-hr cycle',
      description: 'Our flagship smart composting systems convert wet kitchen, canteen, garden, and food waste into nutrient-dense, pathogen-free organic compost right on-site. Built with SS 304 food-grade contact chambers and automated heating, moisture, and agitation control.',
      features: [
        'Capacities available: 10, 25, 50, 100, 250, 500, 1000 kg/day',
        '85% to 90% organic waste volume reduction in 24 hours',
        'Built-in heating jacket & planetary speed reduction gearbox',
        'Multi-stage odor filtration and moisture evacuation',
        'Heavy gauge Stainless Steel (SS 304) internal chamber',
        'Integrated safety limit switches & overload protection'
      ],
      specs: {
        'Cycle Time': '24 Hours',
        'Reduction Ratio': '85 - 90%',
        'Chamber Material': 'SS 304 Heavy Duty',
        'Control System': 'Microcontroller / PLC based',
        'Odor System': 'Built-in Activated Carbon + Exhaust'
      },
      badge: 'Bestseller'
    },
    {
      id: 'shredder',
      category: 'shredder',
      categoryLabel: 'Recycle Machinery',
      title: 'Industrial Plastic Recycle Shredders',
      capacity: '20 kg/hr to 500 kg/hr',
      tagline: 'High-torque twin-shaft & single-shaft shredders for plastics & municipal scrap',
      description: 'Engineered for tough material size reduction including PET bottles, HDPE containers, rigid plastics, films, and packaging waste. Features hardened alloy steel blades and automatic reverse jam clearing mechanism.',
      features: [
        'Twin-shaft and single-shaft high torque rotor configurations',
        'Hardened alloy steel blades (D2 / EN31 tool steel)',
        'Automatic overload reverse rotation logic to prevent jamming',
        'Low speed, low noise, and minimal dust emission',
        'Customizable output screen sizes (6mm to 40mm)',
        'Heavy-duty industrial gearbox for 24/7 continuous duty'
      ],
      specs: {
        'Rotor Types': 'Single / Dual Shaft',
        'Blade Material': 'D2 / EN31 Hardened Alloy',
        'Drive': 'Electric Motor + Helical Gearbox',
        'Safety': 'Auto-Reverse on Jam + Emergency Stops',
        'Applications': 'PET, HDPE, PP, Cardboard, Can Shredding'
      },
      badge: 'Heavy-Duty'
    },
    {
      id: 'spm',
      category: 'spm',
      categoryLabel: 'Industrial Automation',
      title: 'Special Purpose Machines (SPM)',
      capacity: 'Custom Engineered',
      tagline: 'Turnkey customized machinery tailored to eliminate production bottlenecks',
      description: 'Caxra designs and manufactures custom Special Purpose Machines (SPM) for manufacturing plants. Whether you need custom assembly automation, punching/shearing units, material handling, or dedicated jigs and fixtures, we build machines around your exact process.',
      features: [
        'Bespoke mechanical design engineered to your component specs',
        'Pneumatic, hydraulic, and servo-electric motion options',
        'Complete integration with PLC, HMI, and vision inspection',
        'Rugged fabricated machine frames with vibration dampening',
        'Turnkey factory acceptance test (FAT) & site acceptance test (SAT)',
        'Operator safety interlocks compliant with industrial safety norms'
      ],
      specs: {
        'Automation': 'Semi-Auto & Fully Automatic',
        'Controllers': 'Siemens / Delta / Mitsubishi PLC',
        'Actuation': 'Servo, Stepper, Pneumatic, Hydraulic',
        'Design Cycle': 'CAD/CAM Prototyping to Commissioning',
        'Warranty': '1 Year Comprehensive + AMC Options'
      },
      badge: 'Custom Built'
    },
    {
      id: 'design',
      category: 'engineering',
      categoryLabel: 'Engineering Services',
      title: 'Custom Machine Design & Engineering',
      capacity: 'Concept to Production',
      tagline: 'Comprehensive mechanical engineering, 3D CAD modeling, and FEA simulation',
      description: 'Leverage our experienced engineering team for new product design, mechanical engineering drawings, structural FEA simulation, prototyping, and design-for-manufacturability (DFM) audits.',
      features: [
        'SolidWorks & Autodesk Inventor 3D CAD modeling',
        'Structural Finite Element Analysis (FEA) and load testing',
        'Detailed manufacturing 2D drafting with GD&T tolerances',
        'Reverse engineering and retrofitting legacy machines',
        'Rapid physical prototyping and proof-of-concept fabrication',
        'Bill of Materials (BOM) & cost optimization'
      ],
      specs: {
        'Deliverables': '3D CAD, 2D Drawings, FEA Reports, BOM',
        'Software': 'SolidWorks, AutoCAD, ANSYS',
        'Standard': 'ISO, DIN, ASME Design Practices',
        'Industry': 'Clean-tech, Manufacturing, Packaging',
        'Support': 'Fabrication supervision & assembly guidance'
      },
      badge: 'Engineering'
    },
    {
      id: 'iot',
      category: 'iot',
      categoryLabel: 'Smart Telemetry',
      title: 'IoT-Based Smart Monitoring Solutions',
      capacity: 'Cloud Connected',
      tagline: 'Live machine analytics, temperature profiling & predictive maintenance',
      description: 'Bring Industry 4.0 to your facility. Our custom IoT controllers monitor composting cycles, chamber temperatures, power consumption, motor currents, and machine health with cloud sync and mobile alerts.',
      features: [
        'Real-time temperature and moisture sensor data streaming',
        'Cloud web dashboard and mobile app remote monitoring',
        'Automated SMS/Email alerts for maintenance & fault triggers',
        'Historical cycle logs and waste reduction compliance reports',
        'OTA (Over-The-Air) firmware updates and telemetry logging',
        'Plug-and-play retrofit kits for existing machinery'
      ],
      specs: {
        'Connectivity': 'WiFi / 4G LTE / Ethernet / RS485 Modbus',
        'Cloud Platform': 'Secure AWS/GCP IoT Architecture',
        'Dashboard': 'Real-time telemetry, reports & export',
        'Alerts': 'Threshold breaches, cycle completion, faults',
        'Security': 'End-to-end encrypted telemetry'
      },
      badge: 'Industry 4.0'
    }
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <section id="products" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            Machinery & Systems Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineered Machines Built for Reliability & Performance
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            From smart on-site organic waste composters to industrial plastic shredders and bespoke automation systems, explore our full manufacturing range.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Products' },
              { id: 'composting', label: 'Composting Machines (10-1000 kg)' },
              { id: 'shredder', label: 'Plastic Shredders' },
              { id: 'spm', label: 'Special Purpose Machines (SPM)' },
              { id: 'engineering', label: 'Custom Machine Design' },
              { id: 'iot', label: 'IoT Solutions' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-slate-50/80 border border-slate-200/90 rounded-3xl p-7 sm:p-9 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Top Metadata */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                      {product.categoryLabel}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors mt-1">
                      {product.title}
                    </h3>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 border border-orange-200 flex-shrink-0">
                    {product.badge}
                  </span>
                </div>

                {/* Capacity Banner */}
                <div className="inline-block px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-800 mb-4 shadow-2xs">
                  ⚡ Capacity: <span className="text-amber-600 font-extrabold">{product.capacity}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Key Technical Features Checklist */}
                <div className="mb-6 space-y-2.5">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Key Engineering Features:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {product.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Specs Matrix */}
                <div className="bg-white rounded-2xl p-4 border border-slate-200 mb-6 text-xs">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {Object.entries(product.specs).map(([specKey, specVal], sIdx) => (
                      <div key={sIdx} className="border-l-2 border-orange-400 pl-2.5">
                        <span className="text-[11px] text-slate-400 block font-medium">{specKey}</span>
                        <span className="font-semibold text-slate-800 leading-tight block">{specVal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500 font-medium">
                  Custom sizes & voltages available on request
                </span>
                <button
                  onClick={onOpenQuote}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-500/20 transition-all duration-200"
                >
                  <span>Request Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

