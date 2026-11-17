import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ onOpenQuote }) {
  return (
    <footer className="bg-[#121212] text-slate-300 border-t border-slate-800">
      
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/caxra-logo.png" 
                alt="Caxra Logo" 
                className="h-10 w-auto bg-white p-1 rounded-lg"
              />
              <span className="text-xl font-bold text-white font-industrial uppercase">
                CAXRA MACHINE SYSTEMS PVT LTD
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Engineering and manufacturing company designing, building, and supporting automatic organic waste composting machines (10 to 1000 kg/day), heavy-duty plastic shredders, Special Purpose Machines (SPM), custom machine engineering, and IoT telemetry.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#222] text-[#ff9900] border border-slate-700">
                🇮🇳 Designed & Made in India
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 font-industrial">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-[#ff7026] transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#ff7026] transition-colors">
                  Composter Configurator
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#ff7026] transition-colors">
                  About Our Engineering
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#ff7026] transition-colors">
                  Contact & Factory Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Products & SPMs */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 font-industrial">
              Machinery & Systems
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/products" className="hover:text-[#ff7026] transition-colors">
                  Composters (10–1000 kg/day)
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#ff7026] transition-colors">
                  Plastic Recycle Shredders
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#ff7026] transition-colors">
                  Special Purpose Machines (SPM)
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#ff7026] transition-colors">
                  IoT Telemetry & Controllers
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 font-industrial">
              Factory & Sales Desk
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ff7026] flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-relaxed">
                  Caxra Machine Systems Pvt Ltd<br />
                  29-3, Katoor Street, Kalapatti,<br />
                  Coimbatore - 641048
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#ff7026] flex-shrink-0" />
                <a href="tel:+919944479115" className="hover:text-white transition-colors">
                  +91 99444 79115
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#ff7026] flex-shrink-0" />
                <a href="mailto:info@caxra.in" className="hover:text-white transition-colors">
                  info@caxra.in
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Caxra Machine Systems Pvt Ltd. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & Engineered for Industrial Excellence
          </p>
        </div>
      </div>

    </footer>
  );
}
