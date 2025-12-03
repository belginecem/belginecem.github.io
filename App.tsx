import React, { useState } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Hero />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 selection:bg-green-500/30 selection:text-green-200 overflow-x-hidden flex flex-col">
      <div className="fixed inset-0 z-0 bg-slate-950 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black opacity-80"></div>
        <div className="absolute inset-0 unity-grid opacity-60"></div>
      </div>
      
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      
      <main className="relative z-10 flex-grow pt-8 animate-fade-in min-h-[80vh]">
        {renderView()}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;