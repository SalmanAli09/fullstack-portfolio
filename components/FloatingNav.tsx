import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Code, Mail, FileText } from 'lucide-react';

const FloatingNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: Home, id: 'hero' },
    { name: 'About', icon: User, id: 'about' },
    { name: 'Exp', icon: Briefcase, id: 'experience' },
    { name: 'Work', icon: Code, id: 'projects' },
    { name: 'Contact', icon: Mail, id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-auto">
      <div className="glass-panel rounded-full px-2 py-2 flex items-center shadow-lg border border-white/40">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
              activeSection === item.id 
                ? 'text-primary-600 bg-white shadow-md scale-110' 
                : 'text-slate-500 hover:text-slate-800 hover:bg-white/50'
            }`}
            aria-label={item.name}
          >
            <item.icon size={20} strokeWidth={activeSection === item.id ? 2.5 : 2} />
            {activeSection === item.id && (
              <span className="absolute -top-8 bg-slate-900 text-white text-[10px] px-2 py-1 rounded shadow-sm opacity-0 animate-[fadeIn_0.2s_ease-out_forwards]">
                {item.name}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FloatingNav;