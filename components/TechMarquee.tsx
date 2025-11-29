import React from 'react';
import { SKILLS } from '../constants';

const TechMarquee: React.FC = () => {
  // Flatten all skills into a single array
  const allSkills = SKILLS.flatMap(cat => cat.skills);
  // Duplicate for seamless loop
  const marqueeSkills = [...allSkills, ...allSkills, ...allSkills];

  return (
    <div className="w-full py-10 overflow-hidden bg-white/30 backdrop-blur-sm border-y border-white/40">
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
        
        <div className="flex animate-scroll hover:pause-on-hover whitespace-nowrap">
          {marqueeSkills.map((skill, index) => (
            <div 
              key={`${skill}-${index}`} 
              className="mx-6 px-6 py-3 rounded-xl bg-white/60 border border-white shadow-sm text-slate-600 font-display font-medium text-lg flex items-center justify-center min-w-[120px]"
            >
              <span className="w-2 h-2 rounded-full bg-primary-400 mr-3"></span>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechMarquee;