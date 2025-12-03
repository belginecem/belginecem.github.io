
import React, { useState } from 'react';
import { Terminal, Menu, X, Gamepad2 } from 'lucide-react';
import { PROFILE } from '../constants';

interface NavbarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setCurrentView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' }
  ];

  const handleNavClick = (viewId: string) => {
    setCurrentView(viewId);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-2 group"
        >
          <div className="bg-green-500/10 p-2 rounded text-green-500 group-hover:bg-green-500/20 transition-colors border border-green-500/20">
            <Terminal size={20} />
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="font-bold text-white tracking-tight">{PROFILE.name}</span>
          </div>
        </button>

        <div className="hidden md:flex items-center gap-1 bg-slate-900/50 p-1 rounded-lg border border-slate-800">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`
                px-5 py-2 rounded-md text-sm font-medium transition-all duration-300 font-mono relative
                ${currentView === item.id 
                  ? 'text-green-400 bg-slate-800 shadow-[0_0_10px_rgba(34,197,94,0.1)]' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}
              `}
            >
              {currentView === item.id && (
                <span className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              )}
              <span className={currentView === item.id ? 'ml-2' : ''}>{item.label}</span>
            </button>
          ))}
        </div>

        <button 
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-slate-950 border-b border-slate-800 shadow-2xl animate-fade-in">
          <div className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`
                  w-full text-left px-4 py-3 rounded border border-transparent
                  ${currentView === item.id 
                    ? 'bg-green-900/10 text-green-400 border-green-500/20' 
                    : 'text-slate-400 hover:bg-slate-900 hover:text-white'}
                `}
              >
                <div className="flex items-center gap-3">
                  {currentView === item.id && <Gamepad2 size={16} />}
                  {item.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
