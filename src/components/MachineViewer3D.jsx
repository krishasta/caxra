import React, { useState, useRef } from 'react';
import { 
  RotateCw, 
  Maximize2, 
  Sparkles, 
  Sliders, 
  Box, 
  Layers, 
  ShieldCheck, 
  RefreshCw,
  Eye,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function MachineViewer3D({ onOpenQuote }) {
  const iframeRef = useRef(null);
  const [isLidOpen, setIsLidOpen] = useState(false);
  const [isAutoRotate, setIsAutoRotate] = useState(true);

  // Trigger buttons inside the iframe if supported
  const handleToggleLid = () => {
    try {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        const lidBtn = iframeRef.current.contentDocument.getElementById('lid');
        if (lidBtn) {
          lidBtn.click();
          setIsLidOpen(!isLidOpen);
        }
      }
    } catch (e) {
      console.log('Iframe control', e);
    }
  };

  const handleToggleSpin = () => {
    try {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        const spinBtn = iframeRef.current.contentDocument.getElementById('spin');
        if (spinBtn) {
          spinBtn.click();
          setIsAutoRotate(!isAutoRotate);
        }
      }
    } catch (e) {
      console.log('Iframe control', e);
    }
  };

  const handleReset = () => {
    try {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        const resetBtn = iframeRef.current.contentDocument.getElementById('reset');
        if (resetBtn) resetBtn.click();
      }
    } catch (e) {
      console.log('Iframe control', e);
    }
  };

  return (
    <section id="3d-viewer" className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#d9222a]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            Interactive 3D Engineering Studio
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-industrial tracking-tight">
            INSPECT THE CAXRA 3D COMPOSTING CABINET
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Interact with our on-site composting machine cabinet in full 3D. Drag to rotate 360°, scroll to zoom, open the hinged hopper lid, and inspect the industrial Stainless Steel structure.
          </p>
        </div>

        {/* 3D Model Interactive Frame */}
        <div className="bg-slate-950 rounded-3xl border-2 border-slate-700 shadow-2xl overflow-hidden relative">
          
          {/* Top Control Bar */}
          <div className="bg-slate-900/90 px-6 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-bold text-slate-200 tracking-wide font-industrial uppercase">
                Model: Caxra CMS-OWC Smart Cabinet
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-[11px] text-slate-400 hidden sm:inline">
                Drag to rotate • Scroll to zoom
              </span>
            </div>

            {/* Quick Action Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleToggleLid}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-[#d9222a] text-white border border-slate-700 transition-colors flex items-center gap-1.5"
              >
                <Box className="w-3.5 h-3.5 text-amber-400" />
                <span>Toggle Lid</span>
              </button>
              <button
                onClick={handleToggleSpin}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-[#d9222a] text-white border border-slate-700 transition-colors flex items-center gap-1.5"
              >
                <RotateCw className="w-3.5 h-3.5 text-amber-400" />
                <span>Auto Rotate</span>
              </button>
              <button
                onClick={handleReset}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors"
                title="Reset View"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Embedded 3D Canvas Iframe */}
          <div className="w-full h-[520px] sm:h-[600px] relative bg-[#eceae6]">
            <iframe
              ref={iframeRef}
              src="/3d-cabinet.html"
              title="Caxra Machine Systems 3D Cabinet Viewer"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

          {/* Bottom Technical Annotation Strip */}
          <div className="bg-slate-900 px-6 py-4 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-300">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ff7026] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">SS 304 Food-Grade</span>
                <span className="text-[11px] text-slate-400">Corrosion-resistant contact tank</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ff7026] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Hinged Hopper Lid</span>
                <span className="text-[11px] text-slate-400">Safety interlocked top feed door</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ff7026] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Discharge Tray & Chute</span>
                <span className="text-[11px] text-slate-400">Ergonomic compost harvest hatch</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ff7026] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Industrial Casters</span>
                <span className="text-[11px] text-slate-400">Heavy-duty locking transport wheels</span>
              </div>
            </div>
          </div>

        </div>

        {/* Action Callout */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-slate-800/80 border border-slate-700">
          <div>
            <h4 className="text-base font-bold text-white font-industrial uppercase">
              Need custom cabinet dimensions or integration with a feeding conveyor?
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Our engineering team builds custom dimensional layouts for cramped basements, rooftops, or dedicated utility bays.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="flex-shrink-0 px-6 py-3 rounded-full font-industrial text-sm font-bold uppercase text-white bg-[#d9222a] hover:bg-[#be1921] transition-colors shadow-md flex items-center gap-2"
          >
            <span>Request Custom 3D CAD Layout</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

