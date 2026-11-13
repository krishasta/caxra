import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header({ onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200/90 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo on Left (Clean, High-Res, Brand Colors) */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <img
              src="/caxra-logo.png"
              alt="Caxra Machine Systems Logo"
              className="h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight text-[#1f2853] leading-none font-industrial">
                CAXRA
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#ff7026] mt-0.5">
                MACHINE SYSTEMS
              </span>
            </div>
          </Link>

          {/* Desktop Nav in Brand Colors */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `text-xs font-bold tracking-wider transition-colors ${
                    isActive ? 'text-[#ff7026] font-extrabold' : 'text-slate-800 hover:text-[#ff7026]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Caxra Flame Gradient Button */}
            <button
              onClick={onOpenQuote}
              className="px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider text-white caxra-gradient caxra-glow hover:opacity-95 transition-all shadow-xs cursor-pointer"
            >
              Request Quote
            </button>
          </nav>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="px-4 py-2 rounded-full text-xs font-bold text-white caxra-gradient cursor-pointer"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1f2853] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-slate-800 hover:text-[#ff7026] py-1.5"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-white caxra-gradient rounded-full cursor-pointer"
            >
              Request a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
