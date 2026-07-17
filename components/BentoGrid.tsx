import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const BentoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
      {PROJECTS.map((project, idx) => {
        // Determine span classes based on index for "Bento" look
        // Item 0: Large square (2x2)
        // Item 3: Wide rectangle (2x1)
        const isLarge = idx === 0;
        const isWide = idx === 3;
        
        const colSpan = isLarge ? 'md:col-span-1' : isWide ? 'md:col-span-2' : 'md:col-span-1';
        const rowSpan = isLarge ? 'md:row-span-2' : 'md:row-span-1';
        
        return (
          <a
            key={project.id} 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title}`}
            className={`
              ${colSpan} ${rowSpan}
              group relative rounded-3xl overflow-hidden border border-white/50 shadow-sm
              bg-white hover:shadow-xl transition-all duration-500 block
            `}
          >
            {/* Image Background */}
            <div className="absolute inset-0">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex justify-between items-start mb-2">
                  <div className="bg-primary-500/20 backdrop-blur-md border border-primary-500/30 text-primary-100 px-3 py-1 rounded-full text-xs font-medium mb-3 inline-block">
                     {project.technologies[0]}
                  </div>
                  <span className="bg-white text-slate-900 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 translate-x-4 group-hover:translate-x-0">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
                
                <h3 className={`font-display font-bold text-white mb-2 leading-tight ${isLarge ? 'text-3xl' : 'text-xl'}`}>
                  {project.title}
                </h3>
                
                <p className={`text-slate-300 text-sm line-clamp-2 ${isLarge ? 'md:line-clamp-4' : ''}`}>
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                   {project.technologies.slice(1).map(tech => (
                     <span key={tech} className="text-[10px] text-white/80 bg-white/10 px-2 py-1 rounded border border-white/10">
                       {tech}
                     </span>
                   ))}
                </div>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default BentoGrid;
