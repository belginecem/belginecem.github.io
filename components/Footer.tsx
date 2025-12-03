import React from 'react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">{PROFILE.name}</h3>
        <p className="text-slate-500 mb-8">{PROFILE.title}</p>
        
        <div className="text-sm text-slate-600">
          <span>© {new Date().getFullYear()} All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;